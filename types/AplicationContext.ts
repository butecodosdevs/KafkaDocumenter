export default interface AplicationContext {
    openSideMenu: boolean,
    toggleSideMenu: () => void,
    documents: {[key: string]: string}
}