export interface Project {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  repoUrl?: string;
  liveUrl?: string;
  image?: string;
}

export const projects: Project[] = [];
