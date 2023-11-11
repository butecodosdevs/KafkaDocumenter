import WantedDocumentDTO from "../dto/WantedDocumentDTO";

export default class WantedDocumentAdapter {
    async adapt(req: Request): Promise<WantedDocumentDTO> {
        const data = await req.json();
        return new WantedDocumentDTO(data.token);
    }
}