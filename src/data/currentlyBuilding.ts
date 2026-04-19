import { CurrentProject } from "../types";

export const currentlyBuilding: CurrentProject[] = [
  {
    title: "AURA",
    description:
      "Autonomous Utility & Resource Assistant — A fully offline AI developer assistant that automates coding workflows using local LLMs, voice commands, and system automation.",
    status: "In Development",
    techStack: ["Python", "Ollama", "Whisper", "ChromaDB", "PyQt6"],
    link: "https://github.com/aryanjsx/AURA",
  },
  {
    title: "AURA MCP Server",
    description:
      "An MCP server connecting Notion to your filesystem — interprets tasks with AI, scaffolds boilerplate, and updates Notion with the result.",
    status: "Beta",
    techStack: ["Python", "MCP Protocol", "Notion API", "FastAPI"],
    link: "https://github.com/aryanjsx/aura-mcp",
  },
  {
    title: "Code Converter",
    description: "Browser-based multi-language code converter powered by AI.",
    status: "Active",
    techStack: ["TypeScript", "React", "AI API"],
    link: "https://github.com/aryanjsx/code-converter",
  },
  {
    title: "Know India",
    description:
      "Know India is a tourism platform that helps users explore famous places across India with rich details, images, and location insights.",
    status: "Active",
    techStack: ["React.js", "Node.js", "Express.js", "MySQL", "REST APIs"],
    link: "https://github.com/aryanjsx/know-India",
  },
];
