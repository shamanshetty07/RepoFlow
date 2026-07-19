import dotenv from "dotenv";

dotenv.config()
if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET is missing");
}
if(!process.env.PORT){
    throw new Error("PORT is missing")
}

export const env = {
    PORT: process.env.PORT,
    JWT_SECRET: process.env.JWT_SECRET,

};