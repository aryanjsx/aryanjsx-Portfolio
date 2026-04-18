export interface Theme {
  body: string;
  text: string;
  secondaryText: string;
  accentColor: string;
  imageDark: string;
  accentBright?: string;
  headerColor?: string;
}

export interface NpmPackage {
  name: string;
  displayName: string;
  description: string;
  repository: string;
}

export interface CurrentProject {
  title: string;
  description: string;
  status: string;
  techStack: string[];
  link: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  shortDescription?: string;
  url?: string;
  repo?: string;
  liveUrl?: string;
  githubUrl?: string;
  problem?: string;
  solution?: string;
  techStack?: string[];
  features?: string[];
  technicalDecisions?: string[];
  challenges?: string[];
  outcomes?: string[];
  architectureDiagram?: string;
  screenshots?: string[];
  videoDemo?: string;
}
