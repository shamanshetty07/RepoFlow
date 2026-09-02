import { processedFiles, chunks as chunkedFiles} from "../types/repository.types.js";

import {TokenChunker} from 'chonkie';



export class ChunkingService{
    async chunkfiles(files:processedFiles[]){
        // for(const file of files){
            // console.log(`path of the file ${files[0].path} and contents ${files[0].content}`)
            const  chunks:chunkedFiles[]=[]
        const chunker = await TokenChunker.create({
            chunkSize:500,
            chunkOverlap:100
            });

        for(let i=0;i<files.length;i++){
        const result= await chunker.chunk(files[i].content);
            if(!result[0]){
                continue
            }
        
            
            let index:number=0;

            const content = files[i].content;
            for( const chunkies of result){
            const startIndex= chunkies.startIndex;              //content.indexOf(chunkies.text,chunkies.startIndex);
            const endIndex=startIndex+chunkies.text.length;
            const startLine=content.slice(0, startIndex).split("\n").length;
            const endLine =content.slice(0, endIndex).split("\n").length;
           const newChunk:chunkedFiles={
                id:`${files[i].path}-${index}`,
                chunkIndex:index,
                tokenCount:chunkies.tokenCount,
                content:chunkies.text,
                language:files[i].language,
               filePath:files[i].path,
               startIndex:startIndex,
               endIndex:endIndex,
               startLine:startLine,
               endLine:endLine
                
         };

         chunks.push(newChunk);
        index++;}
    //    }
        
        }
        return chunks
        
        
        

        

            

            
         

            
        // }
    }
}


/*export class ChunkingService {

    chunkFiles(files: ProcessedFile[]) {
        // chunking logic
    }

    private chunkFile(file: ProcessedFile) {
        // logic for one file
    }

    private countTokens(text: string) {
        // token counting
    }
} */


/*
1. Choose Embedding Model
          ↓
2. Choose LLM
          ↓
3. Check their token/context limits
          ↓
4. Choose tokenizer(s)
          ↓
5. Design chunk size + overlap
          ↓
6. Implement ChunkingService
          ↓
7. Generate embeddings
          ↓
8. Store in vector DB */