import ServerContributors from "./ServerContributors";
export interface Repository {
    id:number;
    name: string;
    description:string;
    language:string;
    created_at:string;
    contributors:ServerContributors;
  }
export interface RepositoryContent {
      name: string;
      type: 'file' | 'dir';
      content:string;
}