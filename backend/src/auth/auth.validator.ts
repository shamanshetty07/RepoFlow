
import { z} from "zod"

export const signupSchema = z.object({
    name: z.string().min(3, "Name must be at least 3 characters"),
    email: z.email("invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters")
})

export const signinSchema= z.object({
    email : z.email("inavlid email address"),
    password: z.string().min(8,"Invalid Input")
})