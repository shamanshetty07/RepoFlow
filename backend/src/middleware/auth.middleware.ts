import type { NextFunction, Request , Response } from "express";
import jwt from "jsonwebtoken"
import {env} from "../config/env.js"
export const authMiddleware= (req:Request,res:Response,next:NextFunction)=>{
    const authHeader=req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({
            message:"invalid access"
        })
    }
    const token = authHeader.split(" ")[1];
    try{
    const decoded= jwt.verify(token,env.JWT_SECRET);
    req.user=decoded;
    next()
    }
    catch{
        res.json(401).json({
            message:"invalid token"
        })
    }



}