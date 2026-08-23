import { string } from "zod";
import { RepomixService } from "./repomix.service.js";
import { readFile } from "fs";
import { detectLanguage } from "./language-detector.js";
import path from "path";
import { LanguageServiceMode } from "typescript";
export class IndexingService{
    
    async indexingRepository(repositoryPath:string,repoid:number){
    
        const repomixService=new RepomixService();
        const processedFiles=await repomixService.packRepository(repositoryPath,repoid);

        return processedFiles;}
       
        async indexingFiles(files:string[]){
            const detect=new detectLanguage()
            const languageMap:  Record<string, string>= {
              ".js": "javascript",
             ".ts": "typescript",
    ".tsx": "typescript",
    ".py": "python",
    ".java": "java",
    ".css": "css",
    ".html": "html",
    ".json": "json",
    ".md": "markdown",
    };
            
            for(const file of files){
              const extension=path.extname(file);

              let language:string|null=languageMap[extension]
              if(!language){
               language= await detect.dectector(file);
              }
              console.log(`this ${file} is written in =>${language}`);
            }
        }   

    
}