import { GitService } from "../git/git.service.js";
import prisma from "../config/prisma.js";
import { env } from "../config/env.js";
// start here

type importRepositoryInput={
    githubUrl:string,
    userId:number
}
const gitService=new GitService();
export class RespositoryService{
    async importRepository(data:importRepositoryInput){
        const { githubUrl, userId } = data;
        const result = await prisma.repo.create({
            data:{
                githubUrl:githubUrl,
                userId:userId
            }
        })
        const destinationPath=path.join(process.cwd(),)
         await gitService.cloneRepository(githubUrl,`../storage/repositories/${result.id}`)
        

        return {
            githubUrl:result.githubUrl,
            id:result.id,
            status:result.status,
            userId:result.userId
            
        }

    }
}