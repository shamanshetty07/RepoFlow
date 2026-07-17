type SignupData={
    name:string,
    email:string,
    password:string
}
export const signupService=async (data:SignupData)=>{
    return{
        success:true,
        message:"signup service is working"
    }
}