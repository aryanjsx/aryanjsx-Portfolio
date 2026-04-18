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
      name: "Know India",
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
    },
    {
      name: "Code Converter",
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
    },
    {
      name: "AURA",
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
    },
    {
      name: "Arythm",
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
    },
  ],
};
