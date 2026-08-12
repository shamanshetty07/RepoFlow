import {runCli , type CliOptions} from "repomix";
import path from "path";
import fs from "fs"
import { int } from "zod";

export class RepomixService {
    async packRepository(repositoryPath: string,repoId:number){
        
        const inputfiles=repositoryPath+repoId;
        const outputPath= path.join(
            process.cwd(),
            "storage/processed",
            repoId.toString(),
            "repomix.output.xml"   
        
        );
        const options={
            output:outputPath,
            style:"xml",
            compress:true,
            quiet : true
        } as CliOptions
   
        const result= await runCli(
            ["."],
            repositoryPath,
            options
        )
        if( result==null){
            return
        }

        return result.packResult.processedFiles;
        // continue here

    }
}


