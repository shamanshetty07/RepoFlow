import  type {Request,Response} from "express";
import { signupService } from "./auth.service.js";

export const signup=async (req:Request,res:Response)=>{

    const {name,email,password}=req.body;
    const result=await signupService({
        name,email,password
    })
    return res.status(201).json(result);
}