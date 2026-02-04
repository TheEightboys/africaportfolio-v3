export interface Forum {
  id: number;
  title: string;
  description: string;
  image: string;
  overview: string;
  keyAreas: string[];
  objectives?: string[];
  pillars?: { title: string; items: string[] }[];
  stakeholders?: string[];
  purpose?: string;
}