export const personalInfo = {
  name: "Luu Thanh Danh",
  title: "AI Engineer",
  roles: [
    "AI Engineer",
    "Machine Learning",
    "Deep Learning",
    "Multimodal AI",
  ],
  email: "thanhdanh15102006@gmail.com",
  github: "https://github.com/ThanhDanh1510",
  orcid: "https://orcid.org/0009-0003-5632-6317",
  location: "Ho Chi Minh City, Vietnam",
  bio: "AI Engineer & Data Scientist specializing in deep learning, multimodal retrieval, and autonomous LLM agents. Currently pursuing BSc in Data Science at VNUHCM - University of Science.",
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
    tags: ["BEiT-3", "Qdrant", "Milvus", "Elasticsearch", "FastAPI", "Docker", "uv"],
    github:
      "https://github.com/ThanhDanh1510/Super-Image-Retrieval-System-for-AIC2026",
    highlight: "< 1.5s latency · 88,899 keyframes · 130+ video hours",
    description:
      "Real-time multimodal search platform indexing 88,899+ video keyframes (130+ video hours) for Known-Item Search, Visual QA, and temporal event sequence retrieval. Hybrid dense-sparse retrieval combining multi-branch vector search (Qdrant, Milvus, GPU matmul) with BM25. Integrated Gemini VLM + BEiT-3 embeddings, DANTE temporal DP (TRAKE), and Dual Rerankers (ViRanker + Jina via RRF).",
    color: "cyan",
  },
  {
    title: "Autonomous Voice-to-Action AI Agent",
    subtitle: "LifeMate · Zalo AI 2026",
    year: "2026",
    tags: ["vLLM", "LoRA Soup", "ONNX Runtime", "Qwen3.5", "ASR", "FastAPI", "Docker"],
    github: "https://github.com/ThanhDanh1510/ZaloAI2026",
    highlight: "0 MB VRAM ASR · LoRA Soup (r=160) · 0% error rate (625 cases)",
    description:
      "End-to-end offline Voice-to-Action agent translating multi-turn Vietnamese speech into tool executions across 20+ apps and 60+ APIs under a strict 6B parameter ceiling. Zero-GPU-overhead ASR serving Gipformer 1.5 via ONNX Runtime on CPU (~200ms latency), dedicating 100% GPU to LLM KV-cache. Fine-tuned Qwen3.5-4B via LoRA Soup across 5 domain adapters with 4-tier guardrails and vLLM prefix caching.",
    color: "purple",
  },
  {
    title: "Deep Residual Vision Pipeline",
    subtitle: "Olympic AI HCMC 2025",
    year: "2025",
    tags: ["PyTorch", "CUDA", "Residual Networks", "CNN", "Optimization"],
    github: "https://github.com/ThanhDanh1510/OLP-AI-HCMC-2025",
    highlight: "Custom ResNet · Kaiming init · Label smoothing 0.05",
    description:
      "Deep learning image classification system in PyTorch (CUDA) for the Olympic AI HCMC 2025 competition. Designed custom deep convolutional networks with residual skip connections, batch normalization, and LeakyReLU activations. Applied Kaiming Normal initialization and label smoothing to accelerate gradient flow and avoid representation collapse.",
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
      "Formulated joint cross-modal semantic matching and temporal sequence alignment to accurately locate complex multi-step events and actions across extensive video archives.",
  },
  {
    title:
      "GeoRoute: Geometry-Aware Hybrid Inference for Traffic Future-Frame Prediction",
    venue: "ECCV Workshops",
    year: "2026",
    arxiv: "https://arxiv.org/abs/2608.09493",
    description:
      "Engineered a training-free hybrid inference framework with view-conditioned routing and depth-layered rendering to stabilize static geometry and temporal coherence in traffic video diffusion models.",
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
      "LLMs (Qwen)",
      "LoRA / PEFT",
      "ASR",
      "Multimodal (BEiT-3)",
      "CNNs",
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
      "Function Calling",
    ],
  },
  {
    icon: "⚙️",
    label: "MLOps & Frameworks",
    color: "green",
    skills: [
      "Docker",
      "Docker Compose",
      "vLLM",
      "ONNX Runtime",
      "FastAPI",
      "Pydantic",
      "Milvus",
      "Qdrant",
      "Elasticsearch",
      "uv",
      "Git",
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
      "Bash Scripting",
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
    title: "HCMC AI Challenge (AIC 2024 & 2025)",
    description:
      "Awarded Potential Prize (2025) and Third Prize (2024) for developing real-time multimodal video retrieval and keyframe search systems indexing 88,899+ frames.",
  },
  {
    title: "Zalo AI Challenge 2026",
    description:
      "Built an autonomous offline Voice-to-Action agent (LifeMate) featuring zero-GPU-overhead ASR via ONNX Runtime and LoRA Soup fine-tuning with 0% error rate across 625 test cases.",
  },
  {
    title: "Olympic AI HCMC 2025",
    description:
      "Engineered deep residual CNN pipelines with skip connections, batch normalization, and Kaiming initialization for competitive multi-class image recognition.",
  },
  {
    title: "AI Olympiad Mentorship",
    description:
      "Mentored high school student qualifying for the Vietnam National Team selection round for the International AI Olympiad (IAIO).",
  },
];
