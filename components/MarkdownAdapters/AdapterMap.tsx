import { Components } from "react-markdown";
import TitleAdapter from "./TitleAdapter";
import ParagraphAdapter from "./ParagraphAdapter";
import StrongAdapter from "./StrongAdapter";
import SubtitleAdapter from "./SubtitleAdapter";
import PreAdapter from "./PreAdapter";
import CodeAdapter from "./CodeAdapter";
import BlockquoteAdapter from "./BlockquoteAdapter";
import EmAdapter from "./EmAdapter";
import ImageAdapter from "./ImageAdapter";
import LinkAdapter from "./LinkAdapter";
import HeadingThreeAdapter from "./HeadingThreeAdapter";

export const adapterMap: Partial<Components> | null | undefined = {
    h1(props) {
        return <TitleAdapter element={props}></TitleAdapter>
    },
    p(props) {
        return <ParagraphAdapter element={props}></ParagraphAdapter>
    },
    strong(props) {
        return <StrongAdapter element={props}></StrongAdapter>
    },
    h2(props) {
        return <SubtitleAdapter element={props}></SubtitleAdapter>;
    },
    pre(props) {
        return <PreAdapter element={props}></PreAdapter>
    },
    code(props) {
        return <CodeAdapter element={props}></CodeAdapter>
    },
    blockquote(props) {
        return <BlockquoteAdapter element={props}></BlockquoteAdapter>
    },
    em(props) {
        return <EmAdapter element={props}></EmAdapter>
    },
    img(props) {
        return <ImageAdapter element={props}></ImageAdapter>
    },
    a(props) {
        return <LinkAdapter element={props}></LinkAdapter>
    },
    h3(props) {
        return <HeadingThreeAdapter element={props}/>
    }
}