export interface NpmPackage {
  name: string;
  displayName: string;
  description: string;
  repository: string;
  registry?: "npm" | "pypi";
}

export interface CurrentProject {
  title: string;
  description: string;
  status: string;
  techStack: string[];
  link: string;
}

