import WantedDocumentDTO from "../dto/WantedDocumentDTO";
import BadAdaptedObject from "../exceptions/BadAdaptedObject";

export default class WantedDocumentAdapter {
    async adapt(req: Request): Promise<WantedDocumentDTO> {
        const data = await req.json();
        if(!Object.keys(data).includes('token')) {
            throw new BadAdaptedObject("Token is missing on req.");
        }
        return new WantedDocumentDTO(data.token);
    }
}