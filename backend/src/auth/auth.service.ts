import prisma from "../config/prisma.js"
import bcrypt from "bcrypt"
type SignupData={
    name:string,
    email:string,
    password:string
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
    return user
}