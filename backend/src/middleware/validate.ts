import type {Request,Response, NextFunction } from "express"
import { ZodSchema } from "zod";

export const validate=(schema:ZodSchema)=>{
  return  (req:Request,res:Response,next:NextFunction)=>{
    const result = schema.safeParse(req.body)
    if(result.success){
        next()
    }else{
        return res.status(400).json({
            success:false,
            message:"validation failed",
            errors:result.error.flatten().fieldErrors
         })
    }
  }
}