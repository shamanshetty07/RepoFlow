import { processedFiles, chunks} from "../types/repository.types.js";
import { chunk, Language } from "code-chunk";
import {TokenChunker} from 'chonkie';
import { file } from "zod";


export class ChunkingService{
    async chunkfiles(files:processedFiles[]){
        // for(const file of files){
            // console.log(`path of the file ${files[0].path} and contents ${files[0].content}`)
        const chunker = await TokenChunker.create({
            chunkSize:500,
            chunkOverlap:100
            } );
        let chunkFiles:chunks[]=[];
        for(let i=0;i<files.length;i++){
        const result= await chunker.chunk(files[i].content);
        console.log(result.chunk)
        console.log(result.chunk.text);
    //    for( const chunck of result){
    //         const newChunk:chunk={
    //             content:chunck.text,
    //             language:chunck.files[i].language,
    //             filePath:files[i].path
                
    //         };
    //         chunk
    //    }
        
        }
        

        

            

            
         

            
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