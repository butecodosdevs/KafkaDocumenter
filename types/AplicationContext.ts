import DocumentsAvailable from "./DocumentsAvailable";

export default interface AplicationContext {
    openSideMenu: boolean,
    loading: boolean,
    toggleSideMenu: () => void,
    toggleLoading: (loading: boolean) => void,
    documents: DocumentsAvailable
}