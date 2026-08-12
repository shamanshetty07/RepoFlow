import { string } from "zod";
import { RepomixService } from "./repomix.service.js";
import { readFile } from "fs";
export class IndexingService{
    async indexingRepository(repositoryPath:string,repoid:number){
        const repomixService=new RepomixService();
        const outputPath=await repomixService.packRepository(repositoryPath,repoid);
        const repositoryContext= await readFile(outputPath,"utf-8");
        return repositoryContext
        
        
    }
}