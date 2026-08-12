import { GitService } from "../git/git.service.js";
import prisma from "../config/prisma.js";
import { env } from "../config/env.js";
import path from "path";
import { RepomixService} from "../indexing/repomix.service.js";

type importRepositoryInput={
    githubUrl:string,
    userId:number
}
const gitService=new GitService();
export class RepositoryService{
    async importRepository(data:importRepositoryInput){
        const { githubUrl, userId } = data;
        const result = await prisma.repo.create({
            data:{
                githubUrl:githubUrl,
                userId:userId,
                status:"PENDING"
            }
        })
        const destinationPath=path.join(process.cwd(),env.REPO_STORAGE_PATH,result.id.toString())
        await prisma.repo.update({
            where:{
                id:result.id,
                userId:userId,
            },
            data:{
                status:"CLONING"
            }
        })
        try {
            await gitService.cloneRepository(githubUrl,destinationPath)
        } catch(err){
            await prisma.repo.update({
                where:{
                    id:result.id
                },
                data:{
                    status:"FAILED"
                }
            })
            throw err;
        }

        const repomixService=new RepomixService();
        try{
            await repomixService.packRepository(destinationPath,result.id);
        }catch(err){
            await prisma.repo.update({
                where:{
                    id:result.id
                },
                data:{
                    status:"FAILED"
                }
            })
            throw err;
        }
        


        

        const updateRepository=await prisma.repo.update({
            where:{
                id:result.id
            },
            data:{
                status:"READY"
            }
        })

        


        return updateRepository

    }
}