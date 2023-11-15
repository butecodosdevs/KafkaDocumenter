import GithubService from '@/services/GithubService';
import Classroom from '@/server/Classroom';
import AvailableClassroomAdapter from '@/server/adapter/AvailableClassroomAdapter';
const githubService = new GithubService();


export async function GET(req: Request) {

  try {
    const repositories = await githubService.fetchClassroomRepositories();

    const adapter = new AvailableClassroomAdapter();
    const classroom = Classroom.createClassroomFromRepositories(repositories);

    
    const response = JSON.stringify({
        classrooms: classroom.map(_cr => adapter.adapt(_cr))
    });
   
    return new Response(response);

  
  } catch (error) {
    console.error('Erro na solicitação GET:', error);
    return new Response(JSON.stringify({
      status: 500,
      body: 'Erro interno do servidor',
    }));
  }
}
