import type { Request,Response, NextFunction } from "express";
import { RespositoryService } from "./repo.service.js";
    

const repoService=new RespositoryService();

export const importRepository= async(req:Request,res:Response)=>{
    const githubUrl=req.body.githubUrl;
 
    const userId=req.user.id;
    
    try{
    const repository=await repoService.importRepository({githubUrl,userId});
    repository.status="CLONING"
    return res.status(201).json(repository)
    // start here
}
    catch(error){
        
        res.status(400).json({
            message:"Failed to import repository"
        })
    }



}