export default class DocumentService {
    async availableDocuments(): Promise<{[key: string]: string}> {
        const response = await fetch('/api/docs');
        if(response.status != 200) {
            throw new Error("Error while retriving the documents available.");
        }
        const data: {[key: string]: string} = await response.json();
        return data;
    }
    async getDocument(token: string) {
        const body = {
            token: token
        };
        const response = await fetch('/api/docs', {
            body: JSON.stringify(body),
            method: 'POST'
        });
        if(response.status != 200) {
            console.log('Erro ao recuperar o conteúdo do documento');
        }
        const data = await response.text();
        return data;
    }
}