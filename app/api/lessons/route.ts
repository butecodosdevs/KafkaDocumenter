
import GithubService from '@/services/GithubService';
import Lesson from '@/server/Lesson';
import AvailableLessonAdapter from '@/server/adapter/AvailableLessonAdapter';

const githubService = new GithubService();
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)

  try {
    let classname = searchParams.get('classname');
    let path = searchParams.get('path');
    let  foldersAndFiles =  await githubService.fetchFoldersInRepository(classname, path);
 
    const adapter = new AvailableLessonAdapter();

    const lessons = await Lesson.createLessonFromRepositoryContent(foldersAndFiles);
    
    const response = JSON.stringify({
      lessons: lessons.map(_cr => adapter.adapt(_cr))
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
