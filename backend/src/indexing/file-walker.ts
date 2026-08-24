import fs from "fs/promises"
import path from "path"
import { IndexingService } from "./indexingService.js"
import { isAwaitExpression } from "typescript"


const walkRepository= async function  walkRepository (repositoryPath:string):Promise<string[]> {
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
        const processedFiles=await indexingService.indexingFiles(results);
        ch



    
}

export default walkRepository;

walkRepository("/Users/shamanshetty/RepoFlow/backend/storage/repositories/4");


