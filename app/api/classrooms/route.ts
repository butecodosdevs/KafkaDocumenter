import GithubService from '@/services/GithubService';
import Classroom from '@/server/Classroom';
import AvailableClassroomAdapter from '@/server/adapter/AvailableClassroomAdapter';
const githubService = new GithubService();
export async function GET(req: Request) {

  try {
    const repositories = await githubService.fetchClassroomRepositories();
    const adapter = new AvailableClassroomAdapter();
    const classrooom = Classroom.createClassroomFromRepositories(repositories);

    const response = JSON.stringify({
        docs: classrooom.map(classroom => adapter.adapt(classroom))
    });
    
    return new Response(response);

  
  } catch (error) {
    console.error('Erro na solicitação GET:', error);
    return {
      status: 500,
      body: 'Erro interno do servidor',
    };
  }
}
