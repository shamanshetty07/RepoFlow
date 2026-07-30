import express from "express";
import authRouter from "../auth/auth.routes.js"
import repoRoutes from "../repo/repo.routes.js"
const app=express();

app.use(express.json())

app.use("/api/v1/auth",authRouter)
app.use("/api/v1/repositories",repoRoutes)

export default app;