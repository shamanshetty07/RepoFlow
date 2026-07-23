import  type { Request,Response} from "express";
import { signupService , signinService , meService } from "./auth.service.js";

export const signup=async (req:Request,res:Response)=>{

    const {name,email,password}=req.body;
    try{
    const result=await signupService({
        name,email,password
    })
    return res.status(201).json(result);}
    catch(err){
        return res.status(404).json({
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
    
    return res.status(200).json(result)}
    catch(err){
       return res.status(401).json({
            message:"Invalid credentials"
        })
    }

}

export const me= async (req:Request,res:Response)=>{
    try{
        if(!req.user){
            throw new Error("unauthorized acess")
        }
        const id=req.user.id;
    const user=await meService({
       id
    })
    return res.status(200).json(user)}
    catch{
        return res.status(401).json({
            message:"invalid credentials"
        })
    }

}