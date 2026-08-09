import fs from "fs/promises"
import path from "path"

const results:string[]=[]
const walkRepository= async function  walkRepository (repositoryPath:string):Promise<string[]> {

    try{
        
        const files=await fs.readdir(repositoryPath);
        for(const file of files){
            const fullpath=path.join(repositoryPath,file);
            const stats=await fs.stat(fullpath);
            if(stats.isDirectory()){
                const nestedFiles= await walkRepository(fullpath);
                results.push(...nestedFiles);
            }else{
                results.push(fullpath);
            }
        }
        // continue here
    }catch(err){
        throw err;
    }
    return results;
}
