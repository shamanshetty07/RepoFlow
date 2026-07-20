import  type {Request,Response} from "express";
import { signupService } from "./auth.service.js";

export const signup=async (req:Request,res:Response)=>{

    const {name,email,password}=req.body;
    try{
    const result=await signupService({
        name,email,password
    })
    return res.status(201).json(result);}
    catch(err){
        return res.status(409).json({
            message:"User already exists"
        })
    }
}