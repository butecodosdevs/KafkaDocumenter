import ServerClassrooms from "@/types/ServerClassrooms";
import ServerLessons from "@/types/ServerLessons";
export default class ClassroomService {
    async availableClassrooms(): Promise<ServerClassrooms> {
        const response = await fetch('/api/classrooms');
        if(response.status != 200) 
            throw new Error("Error while retriving the classrooms available.");
      
        const data: ServerClassrooms = await response.json();

        return data;
    }
    async availableLessons(classname:string): Promise<ServerLessons> {
        const response = await fetch(`/api/lessons?classname=${encodeURIComponent(classname)}`);

        
        if(response.status != 200) 
            throw new Error("Error while retriving the classrooms available.");
      
        const data: ServerLessons = await response.json();
  
        return data;
    }
}