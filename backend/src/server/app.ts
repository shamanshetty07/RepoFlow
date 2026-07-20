import express from "express";
import authrouter from "../auth/auth.routes.js"
const app=express();

app.use(express.json())

app.use("/api/v1/auth",authrouter)

export default app;