import { Router } from "express";
import { signup } from "./auth.controller.js";
import { signupSchema } from "./auth.validator.js";
import { validate } from "../middleware/validate.js";

const router=Router()
router.post("/signup",validate(signupSchema),signup)


export default router;