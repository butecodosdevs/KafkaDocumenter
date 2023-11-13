import ServerClassrooms from "@/types/ServerClassrooms";
export default class ClassroomService {
    async availableClassrooms(): Promise<ServerClassrooms> {
        const response = await fetch('/api/classrooms');
        if(response.status != 200) 
            throw new Error("Error while retriving the classrooms available.");
       
        const data: ServerClassrooms = await response.json();
        return data;
    }
}