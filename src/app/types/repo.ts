export type REPO = {
  id: number;
  name: string;
  updated_at: Date;
  language?: string;
  visibility: string;
  description?: string;
  languages_url: string;
  stargazers_count: number;
};
