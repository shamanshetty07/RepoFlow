import { RepomixService } from "./repomix.service.js";

export class IndexingService{
    async indexingRepository(repositoryPath:string,repoid:number){
        const repomixService=new RepomixService();
        await repomixService.packRepository(repositoryPath,repoid);
        
        
    }
}