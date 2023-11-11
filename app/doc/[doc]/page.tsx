'use client';
import { adapterMap } from "@/components/MarkdownAdapters/AdapterMap";
import { useContext, useEffect, useState } from "react";
import TextContent from "@/components/TextContent";
import DocumentService from "@/services/DocumentService";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import MenuButton from "@/components/MenuButton";
import HttpError from "@/services/HttpError";
import { appContext } from "@/context/AppContext";

interface RouteResource {
    doc: string
}

const service = new DocumentService()

export default function Page({ params }: { params: RouteResource }) {
    const {toggleLoading} = useContext(appContext);
    const [contentText, setContent] = useState("");
    const doc = decodeURIComponent(params.doc);
    useEffect(() => {
        const fetchedData = async () => {
            try {
                const content = await service.getDocument(doc);
                setContent(content);
                console.log('aquii');
                toggleLoading(false);
            } catch(error: unknown) {
                // TO-DO
            }
        }
        fetchedData();
    }, []);
    if(contentText != "") {
        toggleLoading(false);
    }
    return (
        <>
            <MenuButton></MenuButton>
            <TextContent>
                <Markdown
                    components={adapterMap}
                    remarkPlugins={[remarkGfm]}>
                    {contentText}
                </Markdown>
            </TextContent>
        </>

    )
}