import  type { Request,Response} from "express";
import { signupService , signinService } from "./auth.service.js";

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

export const signin=async (req:Request,res:Response)=>{
    const {email,password} = req.body
    try{
        const result=await signinService({
            email,
            password
        })
    
    return res.status(201).json(result)}
    catch(err){
       return res.status(411).json({
            message:"Invalid credentials"
        })
    }

}

export const me= (req:Request,res:Response)=>{
    const name=req.user.name
    

}