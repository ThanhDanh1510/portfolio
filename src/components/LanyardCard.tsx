"use client";

import * as THREE from "three";
import { useRef, useState, useCallback, Suspense } from "react";
import { Canvas, useFrame, extend } from "@react-three/fiber";
import { useTexture, Environment } from "@react-three/drei";
import {
  BallCollider,
  CuboidCollider,
  Physics,
  RigidBody,
  useRopeJoint,
  useSphericalJoint,
  RapierRigidBody,
} from "@react-three/rapier";
import { MeshLineGeometry, MeshLineMaterial } from "meshline";

extend({ MeshLineGeometry, MeshLineMaterial });

// Augment R3F JSX for meshline
declare module "@react-three/fiber" {
  interface ThreeElements {
    meshLineGeometry: React.HTMLAttributes<object>;
    meshLineMaterial: React.HTMLAttributes<object> & {
      color?: string | THREE.Color;
      lineWidth?: number;
      resolution?: THREE.Vector2;
    };
  }
}

import type React from "react";

const GRAVITY = -28;
const DAMPING = 5;
const ROPE_COLOR = "#06b6d4";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyRef = any;

function Band({ hasAvatar }: { hasAvatar: boolean }) {
  const bandRef = useRef<THREE.Mesh>(null);
  const cardRef = useRef<RapierRigidBody>(null);
  const fixed = useRef<RapierRigidBody>(null);
  const j1 = useRef<RapierRigidBody>(null);
  const j2 = useRef<RapierRigidBody>(null);
  const j3 = useRef<RapierRigidBody>(null);

  const [dragged, setDragged] = useState<THREE.Vector3 | false>(false);
  const [hovered, setHovered] = useState(false);

  const texture = useTexture(
    hasAvatar ? "/avatar.jpg" : "/avatar-placeholder.png"
  );

  const vec = useRef(new THREE.Vector3());
  const dir = useRef(new THREE.Vector3());

  // Cast to AnyRef to bypass rapier's strict RefObject typing
  useRopeJoint(fixed as AnyRef, j1 as AnyRef, [[0, 0, 0], [0, 0, 0], 1.2]);
  useRopeJoint(j1 as AnyRef, j2 as AnyRef, [[0, 0, 0], [0, 0, 0], 1.2]);
  useRopeJoint(j2 as AnyRef, j3 as AnyRef, [[0, 0, 0], [0, 0, 0], 1.2]);
  useSphericalJoint(j3 as AnyRef, cardRef as AnyRef, [
    [0, 0, 0],
    [0, 1.45, 0],
  ]);

  // Curve for the rope line
  const [curve] = useState(
    () =>
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3(),
      ])
  );

  useFrame((state) => {
    if (dragged && cardRef.current) {
      vec.current
        .set(state.pointer.x, state.pointer.y, 0.5)
        .unproject(state.camera);
      dir.current
        .copy(vec.current)
        .sub(state.camera.position)
        .normalize();
      vec.current.add(
        dir.current.multiplyScalar(state.camera.position.length())
      );

      [cardRef, j1, j2, j3, fixed].forEach((r) => r.current?.wakeUp());
      cardRef.current.setNextKinematicTranslation({
        x: vec.current.x - (dragged as THREE.Vector3).x,
        y: vec.current.y - (dragged as THREE.Vector3).y,
        z: vec.current.z - (dragged as THREE.Vector3).z,
      });
    }

    if (
      fixed.current &&
      j1.current &&
      j2.current &&
      j3.current &&
      cardRef.current
    ) {
      curve.points[0].copy(fixed.current.translation() as THREE.Vector3);
      curve.points[1].copy(j1.current.translation() as THREE.Vector3);
      curve.points[2].copy(j2.current.translation() as THREE.Vector3);
      curve.points[3].copy(j3.current.translation() as THREE.Vector3);

      if (bandRef.current) {
        const geo = bandRef.current.geometry as MeshLineGeometry;
        geo.setPoints(curve.getPoints(32));
      }
    }
  });

  const handlePointerDown = useCallback(
    (e: { stopPropagation: () => void; target: EventTarget & { setPointerCapture: (id: number) => void }; pointerId: number; point: THREE.Vector3 }) => {
      e.stopPropagation();
      e.target.setPointerCapture(e.pointerId);
      const pos = cardRef.current?.translation();
      if (pos) {
        setDragged(
          new THREE.Vector3().copy(e.point).sub(pos as THREE.Vector3)
        );
      }
    },
    []
  );

  const handlePointerUp = useCallback(
    (e: { target: EventTarget & { releasePointerCapture: (id: number) => void }; pointerId: number }) => {
      e.target.releasePointerCapture(e.pointerId);
      setDragged(false);
    },
    []
  );

  return (
    <>
      {/* Fixed anchor at the top */}
      <RigidBody ref={fixed} type="fixed" position={[0, 4.5, 0]} />

      {/* Rope segments */}
      <RigidBody
        ref={j1}
        position={[0.5, 3, 0]}
        linearDamping={DAMPING}
        angularDamping={DAMPING}
      >
        <BallCollider args={[0.1]} />
      </RigidBody>
      <RigidBody
        ref={j2}
        position={[1, 1.5, 0]}
        linearDamping={DAMPING}
        angularDamping={DAMPING}
      >
        <BallCollider args={[0.1]} />
      </RigidBody>
      <RigidBody
        ref={j3}
        position={[1.5, 0, 0]}
        linearDamping={DAMPING}
        angularDamping={DAMPING}
      >
        <BallCollider args={[0.1]} />
      </RigidBody>

      {/* Card rigid body */}
      <RigidBody
        ref={cardRef}
        position={[0, -2, 0]}
        type={dragged ? "kinematicPosition" : "dynamic"}
        linearDamping={DAMPING}
        angularDamping={DAMPING}
      >
        <CuboidCollider args={[1.1, 1.55, 0.05]} />
        <group
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          onPointerDown={handlePointerDown as AnyRef}
          onPointerUp={handlePointerUp as AnyRef}
        >
          {/* Card backing */}
          <mesh>
            <planeGeometry args={[2.2, 3.1, 1, 1]} />
            <meshStandardMaterial
              color={hovered ? "#0f2a3a" : "#0a1a28"}
              roughness={0.1}
              metalness={0.7}
              emissive="#061218"
              emissiveIntensity={0.3}
            />
          </mesh>

          {/* Card border glow */}
          <mesh position={[0, 0, -0.01]}>
            <planeGeometry args={[2.26, 3.16, 1, 1]} />
            <meshStandardMaterial
              color="#06b6d4"
              emissive="#06b6d4"
              emissiveIntensity={hovered ? 0.5 : 0.2}
              transparent
              opacity={0.4}
            />
          </mesh>

          {/* Avatar photo */}
          <mesh position={[0, 0.65, 0.01]}>
            <planeGeometry args={[1.4, 1.4]} />
            <meshStandardMaterial map={texture} roughness={0.3} />
          </mesh>

          {/* Avatar neon ring */}
          <mesh position={[0, 0.65, 0.015]}>
            <ringGeometry args={[0.69, 0.75, 64]} />
            <meshStandardMaterial
              color="#06b6d4"
              emissive="#06b6d4"
              emissiveIntensity={1.5}
              side={THREE.DoubleSide}
            />
          </mesh>

          {/* Name plate */}
          <mesh position={[0, -0.3, 0.01]}>
            <planeGeometry args={[2.0, 0.38]} />
            <meshStandardMaterial color="#0d2030" transparent opacity={0.85} />
          </mesh>

          {/* Subtitle plate */}
          <mesh position={[0, -0.72, 0.01]}>
            <planeGeometry args={[2.0, 0.28]} />
            <meshStandardMaterial color="#0a1820" transparent opacity={0.7} />
          </mesh>

          {/* Bottom badge strip */}
          <mesh position={[0, -1.2, 0.01]}>
            <planeGeometry args={[2.0, 0.25]} />
            <meshStandardMaterial
              color="#06b6d4"
              emissive="#06b6d4"
              emissiveIntensity={0.4}
              transparent
              opacity={0.15}
            />
          </mesh>

          {/* Grommet hole */}
          <mesh position={[0, 1.42, 0.02]}>
            <cylinderGeometry args={[0.1, 0.1, 0.12, 32]} />
            <meshStandardMaterial
              color="#1a3a4a"
              metalness={0.9}
              roughness={0.1}
            />
          </mesh>
        </group>
      </RigidBody>

      {/* Rope line rendered with MeshLine */}
      <mesh ref={bandRef}>
        <meshLineGeometry />
        <meshLineMaterial
          color={ROPE_COLOR}
          lineWidth={0.06}
          resolution={new THREE.Vector2(
            typeof window !== "undefined" ? window.innerWidth : 1920,
            typeof window !== "undefined" ? window.innerHeight : 1080
          )}
        />
      </mesh>
    </>
  );
}

export default function LanyardCard({
  hasAvatar = false,
}: {
  hasAvatar?: boolean;
}) {
  return (
    <div className="h-full w-full" style={{ cursor: "grab" }}>
      <Canvas
        camera={{ position: [0, 0, 14], fov: 22 }}
        gl={{ alpha: true, antialias: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={1.5} />
        <pointLight position={[5, 5, 5]} intensity={2} color="#06b6d4" />
        <pointLight position={[-5, 3, 3]} intensity={1} color="#a78bfa" />
        <Environment preset="city" />

        <Suspense fallback={null}>
          <Physics gravity={[0, GRAVITY, 0]} timeStep="vary">
            <Band hasAvatar={hasAvatar} />
          </Physics>
        </Suspense>
      </Canvas>
    </div>
  );
}
