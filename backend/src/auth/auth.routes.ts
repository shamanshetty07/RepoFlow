import { Router } from "express";
import { signup,signin } from "./auth.controller.js";
import { signupSchema,signinSchema} from "./auth.validator.js";
import { validate } from "../middleware/validate.js";

const router=Router()
router.post("/signup",validate(signupSchema),signup)
router.post("/signin",validate(signinSchema),signin)
export default router;