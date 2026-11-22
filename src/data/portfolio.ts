export const personalInfo = {
  name: "Luu Thanh Danh",
  title: "AI Engineer",
  roles: ["AI Engineer", "ML Researcher", "Deep Learning Engineer"],
  email: "thanhdanh15102006@gmail.com",
  github: "https://github.com/ThanhDanh1510",
  orcid: "https://orcid.org/0009-0003-5632-6317",
  location: "Ho Chi Minh City, Vietnam",
  bio: "AI Engineer & Data Scientist specializing in deep learning, computer vision, and multimodal retrieval systems. Currently pursuing BSc in Data Science at HCMUS.",
};

export type Project = {
  title: string;
  subtitle: string;
  year: string;
  tags: string[];
  github: string;
  highlight: string;
  description: string;
  color: "cyan" | "purple" | "green";
};

export const projects: Project[] = [
  {
    title: "Super Multimodal Video Retrieval Engine",
    subtitle: "AIC 2026",
    year: "2025 – Present",
    tags: ["BEiT-3", "Qdrant", "Milvus", "Elasticsearch", "FastAPI", "Docker"],
    github:
      "https://github.com/ThanhDanh1510/Super-Image-Retrieval-System-for-AIC2026",
    highlight: "< 1.5s latency · 88,899 keyframes · 130+ video hours",
    description:
      "Real-time multimodal search platform indexing 88,899+ video keyframes. Hybrid dense-sparse retrieval combining multi-branch vector search (Qdrant, Milvus) with BM25. Leveraged Gemini VLM + BEiT-3 for cross-modal alignment with DANTE temporal DP (TRAKE) for multi-step queries.",
    color: "cyan",
  },
  {
    title: "Deep Residual Vision Pipeline",
    subtitle: "Olympic AI HCMC 2025",
    year: "2025",
    tags: ["PyTorch", "CUDA", "ResNet", "CNN", "Label Smoothing"],
    github: "https://github.com/ThanhDanh1510/OLP-AI-HCMC-2025",
    highlight: "Custom skip connections · Kaiming init · Label smoothing 0.05",
    description:
      "Deep learning image classification system in PyTorch (CUDA). Custom deep ConvNets with residual skip connections, batch normalization, and LeakyReLU. Applied Kaiming Normal initialization and label smoothing for boosted generalization.",
    color: "purple",
  },
  {
    title: "Auto-Doodle-Insta",
    subtitle: "CV & Trajectory Optimization Engine",
    year: "2024 – 2025",
    tags: ["OpenCV", "K-Means", "TSP", "Win32 API", "CIE-Lab"],
    github: "https://github.com/ThanhDanh1510/Auto-Doodle-Insta",
    highlight:
      "70–90% stroke compression · 65% travel latency cut · 10–50x speedup",
    description:
      "High-performance computer vision system converting raster images into optimized vector strokes. CIE-Lab Delta-E perceptual color matching with K-Means clustering, RDP contour simplification, and Greedy TSP path optimizer. Direct Win32 APIs for 10–50x speedup.",
    color: "green",
  },
];

export type Publication = {
  title: string;
  venue: string;
  year: string;
  doi?: string;
  arxiv?: string;
  description: string;
};

export const publications: Publication[] = [
  {
    title:
      "Integrated Semantic and Temporal Alignment for Interactive Video Retrieval",
    venue: "Springer CCIS",
    year: "2026",
    doi: "https://doi.org/10.1007/978-981-92-2584-2_8",
    description:
      "Formulated joint cross-modal semantic matching and temporal sequence alignment to accurately locate complex multi-step events across extensive video archives.",
  },
  {
    title:
      "GeoRoute: Geometry-Aware Hybrid Inference for Traffic Future-Frame Prediction",
    venue: "ECCV Workshops",
    year: "2026",
    arxiv: "https://arxiv.org/abs/2608.09493",
    description:
      "Training-free hybrid inference framework with view-conditioned routing and depth-layered rendering to stabilize static geometry and temporal coherence in traffic video diffusion models.",
  },
];

export type SkillPillar = {
  icon: string;
  label: string;
  color: "cyan" | "purple" | "green" | "pink";
  skills: string[];
};

export const skillPillars: SkillPillar[] = [
  {
    icon: "🧠",
    label: "AI & Deep Learning",
    color: "cyan",
    skills: [
      "PyTorch",
      "Transformers",
      "CNNs",
      "BEiT-3",
      "PINNs",
      "Mamba",
      "Scikit-Learn",
    ],
  },
  {
    icon: "👁️",
    label: "Computer Vision & NLP",
    color: "purple",
    skills: [
      "OpenCV",
      "Vector Search",
      "Hybrid Retrieval",
      "Dense + BM25",
      "Feature Engineering",
      "RDP Simplification",
    ],
  },
  {
    icon: "⚙️",
    label: "MLOps & Frameworks",
    color: "green",
    skills: [
      "Docker",
      "FastAPI",
      "Pydantic",
      "Milvus",
      "Qdrant",
      "Elasticsearch",
      "MLflow",
      "DVC",
      "uv",
    ],
  },
  {
    icon: "💾",
    label: "Data & Languages",
    color: "pink",
    skills: [
      "Python",
      "C/C++",
      "SQL",
      "TypeScript",
      "NumPy",
      "Pandas",
      "DuckDB",
      "MongoDB",
      "MySQL",
    ],
  },
];

export const achievements = [
  {
    title: "HCMC AI Challenge (AIC 2025 & 2026)",
    description:
      "Engineered real-time multimodal video retrieval platforms using hybrid dense-sparse search and multi-branch Qdrant vector architectures with dual rerankers (ViRanker + Jina via RRF).",
  },
  {
    title: "Olympic AI HCMC 2025",
    description:
      "Engineered deep residual CNN pipelines for competitive image recognition with custom architectures and advanced initialization strategies.",
  },
  {
    title: "Machine Learning Foundations from Scratch (TensorTonic)",
    description:
      "Implemented core ML/DL primitives from first principles without high-level libraries: Adam, RMSprop, Transformer Positional Encoding, Decision Tree Entropy, IoU metrics.",
  },
  {
    title: "Academic Open-Source",
    description:
      "Authored curated open-source repositories for Data Structures & Algorithms (HCMUS DSA) and Statistical Theory reference materials.",
  },
];
