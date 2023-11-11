import DocumentService from "@/services/DocumentService";
import AplicationContext from "@/types/AplicationContext";
import ServerDocuments from "@/types/ServerDocuments";
import React, {useEffect, useState } from "react";

const documentService = new DocumentService();

export const appContext = React.createContext<AplicationContext>({} as AplicationContext);

export default function AppContextProvider({children}: {children: React.ReactNode}) {
    const [openSideMenu, setOpenSideMenu] = useState(false);
    const [documents, setDocuments] = useState<ServerDocuments>({ docs: []});

    const initial: AplicationContext = {
        openSideMenu: openSideMenu,
        toggleSideMenu: function() {
            setOpenSideMenu(old => !old);            
        },
        documents: documents
    }

    useEffect(() => {
        const fetched = async () => {
            const documents = await documentService.availableDocuments();
            setDocuments(documents);
        };
        fetched();
    }, []);

    return(
        <appContext.Provider value={initial}>
            {children}
        </appContext.Provider>
    );
}

