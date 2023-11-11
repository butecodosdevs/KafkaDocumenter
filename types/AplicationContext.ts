import ServerDocuments from "./ServerDocuments";

export default interface AplicationContext {
    openSideMenu: boolean,
    toggleSideMenu: () => void,
    documents: ServerDocuments
}