import { processedFiles } from "../types/repository.types.js";
import { chunk, Language } from "code-chunk";
export class ChunkingService{
    async chunkfiles(files:processedFiles[]){
        // for(const file of files){
            // console.log(`path of the file ${files[0].path} and contents ${files[0].content}`)
            const chunks= await chunk(files[2].path,files[2].content,files[2].language);

            // console.log(chunks);
            // console.log(chunk);
            
            for (const chunk of chunks){
                console.log(chunk.contextualizedText)
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