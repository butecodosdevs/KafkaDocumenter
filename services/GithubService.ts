import ServerClassrooms from "@/types/ServerClassrooms";
const apiUrl: string = `${process.env.CHORUME_GITHUB_BASE_URL_REPOSITORIES}`;
const apiUrlRepo: string = `${process.env.CHORUME_GITHUB_BASE_URL_REPOSITORY}`;
const apiUrlRepoDown: string = `${process.env.CHORUME_GITHUB_BASE_URL_DOWNLOAD}`;
const token: string = `${process.env.GITHUB_BASE_TOKEN}`;
import {Repository, RepositoryContent} from "@/types/ServerRepository";
import Contributor from "@/types/ServerContributor";
export default class GithubService {
  async fetchClassroomRepositories(): Promise<Repository[]> {
    try {
      const response = await fetch(apiUrl);
  
      if (!response.ok) {
        throw new Error(`Request error: ${response.statusText}`);
      }
  
      const data: Repository[] = await response.json();
  
      const classroomRepositories = data.filter(repo => repo.name.startsWith('classroom'));
 
      for (const repo of classroomRepositories) {
        const contributors = await this.fetchContributorsInRepository(repo.name);
        repo.contributors = { serverContributors: contributors };
      }
  
      return classroomRepositories;
  
    } catch (error) {
      console.error('Error when fetching repositories:', error);
      throw error;
    }
  }
      async fetchFoldersInRepository(repoName: string | null, path:string | null): Promise<RepositoryContent[]> {
        const urlContent = `${apiUrlRepo}/${repoName}/contents/${path}`;
        const urlContentDownload = `${apiUrlRepoDown}/${repoName}/main/${path}`;
     

        try {
          const response = await fetch(urlContent);
          
          if (!response.ok) 
            throw new Error(`Request error: ${response.statusText}`);
          
          const data: RepositoryContent[] = await response.json();
      
          const indexMdItemIndex = data.findIndex((item) => {
           
            const lowercaseFileName = item.name.toLowerCase();
            return lowercaseFileName === 'index.md';
        
    
          });
     
    
          if(indexMdItemIndex != -1) {
            const responseDownload = await(await fetch(`${urlContentDownload}/${data[indexMdItemIndex].name}`)).text();
            data[indexMdItemIndex].content = responseDownload;
          }

          const folders = data;
          return folders;
      
        } catch (error) {
          console.error('Error when fetching repositories:', error);
          throw error;
        }
      }
     private async fetchContributorsInRepository(repoName: string): Promise<Contributor[]> {
        const urlContent = `${apiUrlRepo}/${repoName}/contributors`;
        const headers = {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        };

        try {
          const response = await fetch(urlContent/*,{
            headers:headers
          }*/);
      
        
          if (!response.ok) 
            throw new Error(`Request error: ${response.statusText}`);
          
      
          const data: Contributor[] = await response.json();
          return data;
        } catch (error) {
          console.error('Error when fetching contributors:', error);
          throw error;
        }
      }
      
 
}