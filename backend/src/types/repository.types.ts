export type processedFiles={
    path:string;
    language:string|null;
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

export interface chunks{
    
    startIndex:number;
    endIndex:number;
    tokenCount:number;
    content:string,

    language:string | null;
    id:string;
    startLine:number;
    endLine:number;
    filePath:string;
    chunkIndex:number;
    symbolName?:string;
    symbolType?:string;

    parentSymbol?:string;
    metadata?: {
        isComplete: boolean;
        hasImports: boolean;
        hasComments: boolean;
    };


}