import fs from "fs/promises"
import path from "path"
import { IndexingService } from "./indexingService.js"
import { isAwaitExpression } from "typescript"
import { nullable } from "zod"
import { ChunkingService } from "./chunking.service.js"
import { processedFiles } from "../types/repository.types.js"



const walkRepository= async function  walkRepository (repositoryPath:string) {
    const results:string[]=[]
    const ignoredDirectories = new Set([
   ".git",
    "node_modules",
    "dist",
    "build",
    "coverage"
])  

    
        
        const files=await fs.readdir(repositoryPath);

        for(const file of files){

            const fullpath=path.join(repositoryPath,file);
            const stats=await fs.stat(fullpath);
            if(ignoredDirectories.has(file)){
                continue;
            }
            if(stats.isDirectory()){
               continue;
            }else{
                results.push(fullpath);
            }
        }
    
        const indexingService=new IndexingService();
        const processedFile=await indexingService.indexingFiles(results);

        const chunkService=new ChunkingService();
        if(processedFile){
            await chunkService.chunkfiles(processedFile);
        }
        
        // return processedFile
        



    
}

export default walkRepository;

walkRepository("/Users/shamanshetty/RepoFlow/backend/storage/repositories/4");


