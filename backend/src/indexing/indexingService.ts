import { string } from "zod";
import { RepomixService } from "./repomix.service.js";
import { readFile } from "fs";
import { detectLanguage } from "./language-detector.js";
export class IndexingService{
    async indexingRepository(repositoryPath:string,repoid:number){
        const repomixService=new RepomixService();
        const processedFiles=await repomixService.packRepository(repositoryPath,repoid);

        return processedFiles;}
       
        async indexingFiles(files:string[]){
            const detect=new detectLanguage()
            for(const file of files){
              const  language= await detect.dectector(file);
              console.log(file,language);
            }
        }   

    
}