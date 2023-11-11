import DocumentService from "@/services/DocumentService";
import AplicationContext from "@/types/AplicationContext";
import DocumentsAvailable from "@/types/DocumentsAvailable";
import HashMapInterface from "@/types/HashMapInterface";
import React, {useEffect, useState } from "react";

const documentService = new DocumentService();

export const appContext = React.createContext<AplicationContext>({} as AplicationContext);

export default function AppContextProvider({children}: {children: React.ReactNode}) {
    const [openSideMenu, setOpenSideMenu] = useState(false);
    const [loading, setLoading] = useState(true);
    const [documents, setDocuments] = useState<DocumentsAvailable>({
        docs: []
    });

    const initial: AplicationContext = {
        loading: loading,
        openSideMenu: openSideMenu,
        toggleSideMenu: function() {
            setOpenSideMenu(old => !old);            
        },
        documents: documents,
        toggleLoading: (loading: boolean) => {
            setLoading(loading);
        }
    }

    useEffect(() => {
        const fetched = async () => {
            const documents = await documentService.availableDocuments();
            setDocuments(documents);
        };
        fetched()
        .then(() => {
            setLoading(false);
        })
    }, []);

    return(
        <appContext.Provider value={initial}>
            {children}
        </appContext.Provider>
    );
}

