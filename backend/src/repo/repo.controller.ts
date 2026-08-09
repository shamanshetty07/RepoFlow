import type { Request,Response } from "express";
import { RepositoryService } from "./repo.service.js";
    

const repoService=new RepositoryService();

export const importRepository= async(req:Request,res:Response)=>{
    const githubUrl=req.body.githubUrl;
 
    const userId=req.user.id;
    
    try{
    const repository=await repoService.importRepository({githubUrl,userId});

    return res.status(201).json(repository)


}
    catch(error){
        
        res.status(400).json({
            message:"Failed to import repository"
        })
    }



}