
import GithubService from '@/services/GithubService';
import Classroom from '@/server/Classroom';
import AvailableClassroomAdapter from '@/server/adapter/AvailableClassroomAdapter';

const githubService = new GithubService();
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
 let classname = searchParams.get('classname');
  try {
   console.log(classname);
    return new Response();

  
  } catch (error) {
    console.error('Erro na solicitação GET:', error);
    return {
      status: 500,
      body: 'Erro interno do servidor',
    };
  }
}
