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
  bio: "AI Engineer & Data Scientist specializing in deep learning, multimodal retrieval, and autonomous LLM agents. Third-year Data Science student at VNUHCM - University of Science.",
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
  abstract: string;
  bibtex: string;
  badgeType: "springer" | "eccv";
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
    abstract:
      "Interactive video retrieval across extensive unconstrained archives demands precise cross-modal semantic understanding and robust temporal sequence boundary localization. In this work, we present an end-to-end framework coupling multimodal representation learning with dynamic programming-based temporal alignment (DANTE TRAKE). Leveraging hybrid dense-sparse vector indexing across 88,899+ video keyframes, our architecture achieves sub-1.5s search latency and high Known-Item Search accuracy with dual reranking.",
    bibtex: `@inproceedings{danh2026integrated,
  title={Integrated Semantic and Temporal Alignment for Interactive Video Retrieval},
  author={Luu, Thanh Danh and collaborators},
  booktitle={Communications in Computer and Information Science (CCIS)},
  year={2026},
  publisher={Springer Nature},
  doi={10.1007/978-981-92-2584-2_8}
}`,
    badgeType: "springer",
  },
  {
    title:
      "GeoRoute: Geometry-Aware Hybrid Inference for Traffic Future-Frame Prediction",
    venue: "ECCV Workshops",
    year: "2026",
    arxiv: "https://arxiv.org/abs/2608.09493",
    description:
      "Engineered a training-free hybrid inference framework with view-conditioned routing and depth-layered rendering to stabilize static geometry and temporal coherence in traffic video diffusion models.",
    abstract:
      "Synthesizing temporally coherent and physically grounded future video frames in complex driving scenes remains challenging for diffusion models. We propose GeoRoute, a training-free hybrid inference architecture incorporating view-conditioned routing and depth-stratified rendering. By decoupling static roadway geometry from dynamic agent trajectories, GeoRoute eliminates visual hallucination and ensures high multi-view structural consistency.",
    bibtex: `@inproceedings{danh2026georoute,
  title={GeoRoute: Geometry-Aware Hybrid Inference for Traffic Future-Frame Prediction},
  author={Luu, Thanh Danh and collaborators},
  booktitle={Proceedings of the European Conference on Computer Vision Workshops (ECCVW)},
  year={2026},
  eprint={2608.09493},
  archivePrefix={arXiv},
  primaryClass={cs.CV}
}`,
    badgeType: "eccv",
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

export type TributeWish = {
  id: string;
  name: string;
  message: string;
  date: string;
  tag?: string;
  highlight?: boolean;
  color?: string;
};

export const birthdayServerUrl = "https://lolizabrett-byte.github.io/happy-birthday-danh/";

export const featuredLetter = {
  author: "kho",
  role: "Best Friend & Roblox Duo",
  serverMeta: "SaveAsDanh · Lv 20 Unlocked · 15/10/2026",
  lines: [
    "Danh ơi! Chúc mừng sinh nhật tuổi 20 nha ông bạn đại học kiêm đồng đội Roblox số 1 của tui 🎂",
    "Cảm ơn ông vì bao nhiêu trận Steal An Egg cướp trứng tới khuya, bao nhiêu lần cày Blox Fruits chung sau giờ học. Mấy lúc đó vui thiệt sự.",
    "Chúc Danh có một bữa tiệc sinh nhật thật hạnh phúc và ấm áp, bên cạnh gia đình và những người thương Danh nhất.",
    "Tuổi 20 rồi, chúc ông level up không chỉ trong game mà cả ngoài đời: mỗi ngày phát triển bản thân thêm một chút, học hành suôn sẻ, ngày càng vững vàng.",
    "Chúc Danh luôn giữ lửa đam mê, theo đuổi tới cùng và hoàn thành mọi ước mơ, nguyện vọng của mình. Kiên trì như cách ông roll ra trái Mythical vậy đó 😆",
    "Sau này có bận cỡ nào thì cũng nhớ chừa một slot trong server cho tui vào chơi chung nha! Happy Birthday, SaveAsDanh! GG WP tuổi 19, welcome tuổi 20 🥳",
  ],
};

export const tributeWishes: TributeWish[] = [
  {
    id: "wish-kho-live",
    name: "Kho",
    message: "Keep going and grinding bro, i believe in you",
    date: "15/10/2026",
    tag: "Đồng đội",
    highlight: true,
    color: "#06b6d4",
  },
  {
    id: "wish-cunis",
    name: "cunis",
    message:
      "hiii nam thần, hôm nay anh lại thêm tuổi mới rồi, em chúc anh Danh luôn vui vẻ, hạnh phúc, luôn thoải mái đón nhận chuyện vui chuyện buồn trong cuộc sống, em nghĩ là anh sẽ luôn enjoy cuộc sống vì em thấy anh rất là tích cực lun, chúc anh 8386, mãi đẹp trai và bá khí nhó🥳😘🎂",
    date: "15/10/2026",
    tag: "Friend",
    highlight: true,
    color: "#f43f5e",
  },
  {
    id: "wish-quoc",
    name: "Nguyễn An Thành Quốc",
    message: "chúc bạn Thành Danh tui tuổi 20 thành danh nha🥳",
    date: "15/10/2026",
    tag: "HCMUS Friend",
    color: "#10b981",
  },
  {
    id: "wish-hoang6mui",
    name: "hoangdeptrai6mui",
    message:
      "happy 20th birthday Danh! Chúc ông tuổi mới luôn tỏa sáng và đạt được mọi dự định!!!!!!!!!!!😘🥰😍😝🤗🤑😳😚",
    date: "15/10/2026",
    tag: "Friend",
    color: "#a855f7",
  },
  {
    id: "wish-hpann",
    name: "HPann",
    message: "Cmsn danh nha 🎂🎂🎂 Mãi iu Ai bít sẽ bít ☝️😎",
    date: "15/10/2026",
    tag: "Friend",
    color: "#f59e0b",
  },
  {
    id: "wish-schema",
    name: "God (Schema)",
    message: "Chúc Danh AI unslop",
    date: "15/10/2026",
    tag: "AI Peer",
    color: "#3b82f6",
  },
  {
    id: "wish-cat",
    name: "🐱",
    message: "Chúc ông snvv💥💥🎉",
    date: "16/10/2026",
    tag: "Friend",
    color: "#ec4899",
  },
  {
    id: "wish-aibiet",
    name: "ai biết",
    message: "e trai snvv 🐶🐶🐷",
    date: "15/10/2026",
    tag: "Friend",
    color: "#14b8a6",
  },
  {
    id: "wish-hoang",
    name: "hoang",
    message: "cmsn",
    date: "15/10/2026",
    tag: "Friend",
    color: "#8b5cf6",
  },
  {
    id: "wish-dealer",
    name: "Blox Fruit Dealer",
    message:
      "Hôm nay sinh nhật nên shop tặng Danh một trái Mythical miễn phí. Chúc tuổi mới roll đâu trúng đó! 🍎",
    date: "15/10/2026",
    tag: "Server Buff",
    color: "#ef4444",
  },
];
