import { processedFiles } from "../types/repository.types.js";
export class ChunkingService{
    chunkfiles(files:processedFiles[]){
        
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