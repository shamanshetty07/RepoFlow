import { Router } from "express";
import { validate } from "../middleware/validate.js";
import { importRepositorySchema } from "./repo.validator.js";
import { authMiddleware } from "../middleware/auth.middleware.js";
import { importRepository } from "./repo.controller.js";


const router=Router();
router.post("/import",authMiddleware,validate(importRepositorySchema),importRepository);
export default router