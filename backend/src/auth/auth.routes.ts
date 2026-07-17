import { Router } from "express";
import { signup } from "./auth.controller.js";
const router=Router()

router.post("/signup",signup)

export default router;