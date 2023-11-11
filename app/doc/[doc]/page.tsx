'use client';
import { adapterMap } from "@/components/MarkdownAdapters/AdapterMap";
import { useEffect, useState } from "react";
import TextContent from "@/components/TextContent";
import DocumentService from "@/services/DocumentService";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import MenuButton from "@/components/MenuButton";

interface RouteResource {
    doc: string
}

const service = new DocumentService()

export default function Page({ params }: { params: RouteResource }) {
    const [contentText, setContent] = useState("");
    const doc = decodeURIComponent(params.doc);

    useEffect(() => {
        const fetchedData = async () => {
            const content = await service.getDocument(doc);
            setContent(content);
        }
        fetchedData();
    }, []);

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