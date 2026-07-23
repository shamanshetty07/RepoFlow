import prisma from "../config/prisma.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import{env } from "../config/env.js"

type SignupData={
    name:string,
    email:string,
    password:string
}
type SignIn={
    email:string,
    password:string
}
type meData={
    id:number
}
export const signupService=async (data:SignupData)=>{   
   const userExists= await prisma.user.findUnique({
        where:{
            email:data.email
        }
    })
    if(userExists){
        throw new Error("User already Exists")
    }
    const hashedPassword= await bcrypt.hash(data.password,10)
  const user=await  prisma.user.create({
        data:{
        name:data.name,
        email:data.email,
        password:hashedPassword
        },
    })
    const token= jwt.sign({
        id:user.id,
        email:user.email
},env.JWT_SECRET,{
    expiresIn:"7d"
})
}

export const signinService=async (data:SignIn)=>{

    const userExists= await prisma.user.findUnique({
        where:{
            email:data.email,
        }
    })
    if(!userExists){
        throw new Error("invalid credentials");
    }
    const isValidPassword = await bcrypt.compare(data.password,userExists.password)
    if(!isValidPassword){
        throw new Error("invalid credentials");
    }
    const token=jwt.sign({
            id:userExists.id,
            email:userExists.email
        },env.JWT_SECRET,
        {
            expiresIn:"7d"
        }
    );
   return {
    token,
    user: {
        id: userExists.id,
        name: userExists.name,
        email: userExists.email,
    },
};
    
}


export const  meService=async (data:meData)=>{
    const id=data.id;

    const user=await prisma.user.findUnique({
        where:{
            id:id
 }
    })
    if(!user){
        throw new Error("User not found")
    }
    return {
        id:user.id,
        email:user.email,
        name:user.name
    }
}