import ServerClassrooms from "@/types/ServerClassrooms";
export default class ClassroomService {
    async availableDocuments(): Promise<ServerClassrooms> {
        const response = await fetch('/api/docs');
        
        const data: ServerClassrooms = await response.json();
        return data;
    }
}