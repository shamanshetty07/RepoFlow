import {runCli , type CliOptions} from "repomix";
import path from "path";
export class RepomixService {
    async packRepository(repositoryPath: string,repoId:number){
        const outputPath= path.join(
            process.cwd(),
            "storage",
            repoId.toString(),
            "repomix.output.xml"           
        );
        const options={
            output:outputPath,
            style:"xml",
            compress: true,
            quiet : true
        } as CliOptions
   
        const result= await runCli(
            ["."],
            repositoryPath,
            options
        )
    }
}