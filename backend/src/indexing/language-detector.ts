import { createLowlight,common } from "lowlight";
import fs from "fs/promises"
export class detectLanguage{
   async dectector(filepath:string):Promise<string| null>{
        const lowlight=createLowlight(common)
        const code=await fs.readFile(filepath,"utf-8")
        const first50lines=code.split("/n").slice(0,50).join("/n");
        const result=lowlight.highlightAuto(first50lines);
        return result.data?.language ?? null
        
        

    }
}

