
import prisma from "../config/prisma.js";
type importRepositoryInput={
    githubUrl:string,
    userId:number
}
export class RespositoryService{
    async importRepository(data:importRepositoryInput){
        const { githubUrl, userId } = data;
        const result = await prisma.repo.create({
            data:{
                githubUrl:githubUrl,
                userId:userId
            }
        })
        return {
            githubUrl:result.githubUrl,
            id:result.id,
            status:result.status,
            userId:result.userId
            
        }

    }
}