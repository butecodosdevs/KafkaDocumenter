import ServerDocuments from "@/types/ServerDocuments";

export default class DocumentService {
    async availableDocuments(): Promise<ServerDocuments> {
        const response = await fetch('/api/docs');
        if(response.status != 200) {
            throw new Error("Error while retriving the documents available.");
        }
        const data: ServerDocuments = await response.json();
        return data;
    }
}