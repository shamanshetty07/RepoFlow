export type processedFiles={
    path:string;
    content:string;
}
export type codeChunk={
    filepath:string;
    content:string;

    chunkIndex:number;

    startLine:number;
    endLine:number;

    symbolName?:string;
    symbolType?:string;
}

