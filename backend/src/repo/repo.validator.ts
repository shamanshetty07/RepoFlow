import {z} from "zod";

export const importRepositorySchema= z.object({
    githubUrl:z.string()
                .trim()
                .min(1,"GithubUrl is required")
                .url("Invalid GitHub  URL")

});
