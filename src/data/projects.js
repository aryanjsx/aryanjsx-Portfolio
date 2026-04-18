export const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of the latest technology tools. 🚀 I excel in creating both Web Development and Software Development projects. Below, you'll find some of my projects. Please note that not all mentioned projects are on GitHub yet. 🌐🛠️",
  avatar_image_path: "projects_image.svg",
};

export const npmPackages = {
  enabled: true,
  title: "Packages",
  description:
    "Open-source packages I've published to npm. Install with npm or yarn. 📦",
  data: [
    {
      name: "Api Response",
      description:
        "It provides a simple, consistent API for all your response needs with full TypeScript support. You can use it to create a response for your API.",
      version: "1.0.0",
      weeklyDownloads: 20,
      installCommand: "npm i @aryanjsx/api-response",
      repository: "https://github.com/aryanjsx/api-response",
    },
    {
      name: "Know India",
      description:
        "It is a comprehensive npm package designed to provide structured, reliable data about India's states and union territories. It powers the Know India tourism platform and can be seamlessly integrated into dashboards, websites, APIs, and educational applications.",
      version: "1.2.4",
      weeklyDownloads: 245,
      installCommand: "npm i @aryanjsx/knowindia",
      repository: "https://github.com/aryanjsx/know-india",
    },
    {
      name: "India Map",
      description:
        "It is an elegant, interactive SVG map of India for React applications. It can be used to display the map of India in your React application.",
      version: "1.0.2",
      weeklyDownloads: 220,
      installCommand: "npm i @aryanjsx/indiamap",
      repository: "https://github.com/aryanjsx/IndiaMap",
    },
    {
      name: "AURA (orkio)",
      type: "pypi",
      description:
        "Autonomous Unified Resource Architect — an AI-powered MCP server that interprets natural language tasks, validates them for safety, and executes them through a modular plugin architecture.",
      version: "0.3.1",
      installCommand: "pip install orkio",
      registryUrl: "https://pypi.org/project/orkio/",
      repository: "https://github.com/aryanjsx/aura-mcp",
    },
  ],
};

export const projects = {
  data: [
    {
      id: "know-india",
      name: "Know India",
      shortDescription:
        "AI-powered tourism platform for exploring India's states and territories.",
      url: "https://knowindia.aryankr.in/",
      repo: "https://github.com/aryanjsx/know-India",
      description:
        "Plan your India trip with AI! Explore 28 states, 8 union territories, generate personalized itineraries, save favorites, share & download as PDF. Powered by Mistral-7B, FAISS, React & Node.js.",
      languages: [
        { name: "ReactJS", iconifyClass: "devicon:react" },
        { name: "Node.js", iconifyClass: "logos-nodejs" },
        { name: "Tailwind CSS", iconifyClass: "devicon:tailwindcss" },
        { name: "MySQL", iconifyClass: "simple-icons:mysql" },
        { name: "Material UI", iconifyClass: "devicon:materialui" },
        { name: "Chart.js", iconifyClass: "logos-chartjs" },
        { name: "Vercel", iconifyClass: "simple-icons:vercel" },
        { name: "React Router", iconifyClass: "devicon:reactrouter" },
      ],
      problem:
        "India has 28 states and 8 union territories, each with unique culture, cuisine, and attractions. Travelers struggle to discover authentic experiences and plan comprehensive itineraries without fragmented research across dozens of sources.",
      solution:
        "Built a full-stack tourism platform that combines structured geographic data with AI-generated personalized itineraries. Users can explore regions interactively, get tailored travel plans via a RAG pipeline, and export their itineraries as shareable PDFs.",
      techStack: [
        "React",
        "Node.js",
        "MySQL",
        "Tailwind CSS",
        "Material UI",
        "Chart.js",
        "Mistral-7B",
        "FAISS",
        "Vercel",
      ],
      features: [
        "Interactive map-based exploration of all Indian states and territories",
        "AI-powered itinerary generation using Mistral-7B and FAISS retrieval",
        "Category-based discovery: food, culture, adventure, heritage",
        "Save favorites and download itineraries as PDF",
        "Admin dashboard for managing tourism data",
        "Responsive design for mobile and desktop",
      ],
      technicalDecisions: [
        "Chose Mistral-7B over cloud APIs for cost efficiency and offline capability during development",
        "Used FAISS for vector similarity search to match user preferences with relevant destinations",
        "MySQL for structured relational data (states, districts, attractions) with normalized schema",
        "React with Tailwind CSS for rapid UI iteration and consistent styling",
      ],
      challenges: [
        "Curating accurate, up-to-date tourism data for all 36 regions with consistent quality",
        "Balancing LLM response quality with latency — implemented streaming responses",
        "Designing a RAG pipeline that produces contextually relevant itineraries, not generic content",
      ],
      outcomes: [
        "Published as an npm package (@aryanjsx/knowindia) with 245+ weekly downloads",
        "Interactive India map component extracted as a separate reusable package",
        "Comprehensive coverage of all Indian states and union territories",
      ],
      architectureDiagram: "/architecture/know-india.svg",
      screenshots: [
        "/projects/know-india/1.svg",
        "/projects/know-india/2.svg",
      ],
      videoDemo: "",
      githubUrl: "https://github.com/aryanjsx/know-India",
      liveUrl: "https://knowindia.aryankr.in/",
    },
    {
      id: "code-converter",
      name: "Code Converter",
      shortDescription:
        "Browser-based multi-language code converter powered by LLMs.",
      url: "https://convertcodex.vercel.app",
      repo: "https://github.com/aryanjsx/code-converter",
      description:
        "Browser-based multi-language code converter powered by LLMs. Upload full projects, preserve architecture & naming, compare original vs converted code side-by-side, and export as ZIP.",
      languages: [
        { name: "TypeScript", iconifyClass: "devicon:typescript" },
        { name: "ReactJS", iconifyClass: "logos-react" },
        { name: "Vite", iconifyClass: "devicon:vitejs" },
        { name: "LLM", iconifyClass: "simple-icons:openai" },
        { name: "Tailwind CSS", iconifyClass: "devicon:tailwindcss" },
        { name: "Vercel", iconifyClass: "simple-icons:vercel" },
      ],
      problem:
        "Developers frequently need to convert code between languages for migrations, learning, or prototyping. Existing tools handle single files but fail on multi-file projects — losing directory structure, naming conventions, and cross-file references.",
      solution:
        "Built a browser-based tool that accepts entire project directories, preserves their architecture during conversion, and provides a side-by-side diff view. The converted output can be exported as a ready-to-use ZIP archive.",
      techStack: [
        "TypeScript",
        "React",
        "Vite",
        "Tailwind CSS",
        "LLM API",
        "Vercel",
      ],
      features: [
        "Multi-file project upload with directory structure preservation",
        "Side-by-side comparison of original and converted code",
        "Support for multiple source and target languages",
        "Architecture-aware conversion that maintains naming and references",
        "Export converted project as ZIP",
        "Syntax-highlighted code editor with line numbers",
      ],
      technicalDecisions: [
        "Used Vite + TypeScript for fast development iteration and type safety",
        "Client-side file tree parsing to avoid uploading user code to a server",
        "Streaming LLM responses to show conversion progress in real time",
        "Tailwind CSS for consistent, responsive UI without custom stylesheet overhead",
      ],
      challenges: [
        "Maintaining cross-file import references when converting between language ecosystems",
        "Handling large projects without exceeding LLM context windows — implemented chunked conversion",
        "Building an intuitive file tree UI that maps original to converted structure",
      ],
      outcomes: [
        "Fully client-side architecture — no user code leaves the browser",
        "Supports conversion between 10+ programming languages",
        "Clean project export with correct directory hierarchy",
      ],
      architectureDiagram: "/architecture/code-converter.svg",
      screenshots: [
        "/projects/code-converter/1.svg",
        "/projects/code-converter/2.svg",
      ],
      videoDemo: "",
      githubUrl: "https://github.com/aryanjsx/code-converter",
      liveUrl: "https://convertcodex.vercel.app",
    },
    {
      id: "aura",
      name: "AURA",
      shortDescription:
        "Offline AI developer assistant with voice commands and system automation.",
      repo: "https://github.com/aryanjsx/AURA",
      description:
        "Autonomous Utility & Resource Assistant — A fully offline AI developer assistant that automates coding workflows using local LLMs, voice commands, and system automation.",
      languages: [
        { name: "Python", iconifyClass: "logos:python" },
        { name: "Ollama", iconifyClass: "simple-icons:ollama" },
        { name: "Docker", iconifyClass: "devicon:docker" },
        { name: "PyQt6", iconifyClass: "devicon:qt" },
        { name: "ChromaDB", iconifyClass: "simple-icons:chroma" },
        { name: "Git", iconifyClass: "devicon:git" },
      ],
      problem:
        "Cloud-based AI assistants require constant internet access, raise data privacy concerns for enterprise code, and incur recurring API costs. Developers need an AI assistant that works completely offline with full control over their data.",
      solution:
        "Created a desktop AI assistant that runs entirely on local hardware using Ollama for LLM inference. Features voice commands, codebase-aware context via ChromaDB embeddings, and a modular plugin architecture for system automation tasks.",
      techStack: [
        "Python",
        "Ollama",
        "Docker",
        "PyQt6",
        "ChromaDB",
        "Git",
        "Whisper",
      ],
      features: [
        "Fully offline AI inference using local LLMs via Ollama",
        "Voice command interface with Whisper speech recognition",
        "Codebase-aware context through ChromaDB vector embeddings",
        "Modular plugin system for extensible automation",
        "Git integration for commit summaries and code review",
        "Desktop GUI built with PyQt6",
      ],
      technicalDecisions: [
        "Ollama for local LLM serving — supports multiple model families without GPU lock-in",
        "ChromaDB for persistent vector storage with fast similarity search on local disk",
        "PyQt6 over Electron to keep the stack Python-native and reduce memory overhead",
        "Plugin architecture to allow users to extend functionality without modifying core",
      ],
      challenges: [
        "Optimizing LLM inference speed on consumer hardware without dedicated GPU",
        "Building reliable voice-to-command pipeline with acceptable error rates",
        "Managing vector index updates efficiently as the codebase evolves",
      ],
      outcomes: [
        "Published to PyPI as orkio — installable via pip install orkio",
        "Zero cloud dependency — works on air-gapped machines",
        "MCP server variant for IDE integration",
      ],
      architectureDiagram: "/architecture/aura.svg",
      screenshots: ["/projects/aura/1.svg", "/projects/aura/2.svg"],
      videoDemo: "",
      githubUrl: "https://github.com/aryanjsx/AURA",
      liveUrl: "",
    },
    {
      id: "arythm",
      name: "Arythm",
      shortDescription:
        "Open-source web music player powered by YouTube Music.",
      url: "https://arythm.vercel.app",
      repo: "https://github.com/aryanjsx/Arythm",
      description:
        "A beautiful, open-source web music player powered by YouTube Music. Stream millions of songs, enjoy synced lyrics, and discover new music — all from your browser.",
      languages: [
        { name: "TypeScript", iconifyClass: "devicon:typescript" },
        { name: "ReactJS", iconifyClass: "logos-react" },
        { name: "YouTube API", iconifyClass: "logos:youtube-icon" },
        { name: "Vercel", iconifyClass: "simple-icons:vercel" },
      ],
      problem:
        "Most web-based music players are either locked behind subscriptions, bloated with ads, or lack features like synced lyrics. Developers and music lovers need a clean, free alternative that runs entirely in the browser.",
      solution:
        "Built an open-source music player that streams from YouTube Music's catalog, displays time-synced lyrics, and provides a polished listening experience — all without requiring user accounts or subscriptions.",
      techStack: ["TypeScript", "React", "YouTube Data API", "Vercel"],
      features: [
        "Stream millions of songs via YouTube Music integration",
        "Time-synced lyrics display",
        "Search and discover music by artist, album, or track",
        "Queue management and playlist support",
        "Responsive design for mobile and desktop",
        "Keyboard shortcuts for playback control",
      ],
      technicalDecisions: [
        "TypeScript for strict type safety across the audio playback pipeline",
        "YouTube Data API for access to a massive music catalog without hosting audio",
        "Client-side audio state management for gapless playback experience",
        "Vercel Edge for low-latency API proxy to handle CORS and rate limiting",
      ],
      challenges: [
        "Handling YouTube API rate limits while maintaining responsive search",
        "Synchronizing lyrics with audio playback across varying network conditions",
        "Building a polished audio player UX that matches native app expectations",
      ],
      outcomes: [
        "Fully open-source and free to use",
        "No account or subscription required",
        "Clean, ad-free listening experience",
      ],
      architectureDiagram: "/architecture/arythm.svg",
      screenshots: ["/projects/arythm/1.svg", "/projects/arythm/2.svg"],
      videoDemo: "",
      githubUrl: "https://github.com/aryanjsx/Arythm",
      liveUrl: "https://arythm.vercel.app",
    },
  ],
};

export function getProjectBySlug(slug) {
  return projects.data.find((p) => p.id === slug) || null;
}

export function getAllProjectSlugs() {
  return projects.data.map((p) => p.id);
}
