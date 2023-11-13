import ServerClassrooms from "@/types/ServerClassrooms";
const apiUrl: string = `${process.env.CHORUME_GITHUB_BASE_URL_REPOSITORIES}`;
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
      
          return classroomRepositories;
      
        } catch (error) {
          console.error('Error when fetching repositories:', error);
          throw error;
        }
      }
      async fetchFoldersInRepository(repoName: string): Promise<RepositoryContent[]> {
        const urlContent = `${apiUrl}/${repoName}/contents`;
      
        try {
          const response = await fetch(urlContent);
      
          if (!response.ok) {
            throw new Error(`Erro na solicitação: ${response.statusText}`);
          }
      
          const data: RepositoryContent[] = await response.json();
     
          const folders = data.filter(item => item.type === 'dir');
      
          return folders;
      
        } catch (error) {
          console.error('Erro ao buscar pastas no repositório:', error);
          throw error;
        }
      }
      async fetchContributorsInRepository(repoName: string): Promise<Contributor[]> {
        const urlContent = `${apiUrl}/${repoName}/contributors`;
      
        try {
          const response = await fetch(urlContent);
      
          if (!response.ok) {
            throw new Error(`Request error: ${response.statusText}`);
          }
      
          const data: Contributor[] = await response.json();
          return data;
        } catch (error) {
          console.error('Error when fetching contributors:', error);
          throw error;
        }
      }
      
 
}