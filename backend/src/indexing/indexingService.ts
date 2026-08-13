import { string } from "zod";
import { RepomixService } from "./repomix.service.js";
import { readFile } from "fs";
export class IndexingService{
    async indexingRepository(repositoryPath:string,repoid:number){
        const repomixService=new RepomixService();
        const processedFiles=await repomixService.packRepository(repositoryPath,repoid);

        return processedFiles;
        

    }
}