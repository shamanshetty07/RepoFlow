import { Router } from "express";
import { signup,signin,me } from "./auth.controller.js";
import { signupSchema,signinSchema} from "./auth.validator.js";
import { validate } from "../middleware/validate.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router=Router()
router.post("/signup",validate(signupSchema),signup)
router.post("/signin",validate(signinSchema),signin)
router.post("/me",authMiddleware,me)
export default router;