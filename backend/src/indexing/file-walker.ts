import fs from "fs/promises"
import path from "path"


const walkRepository= async function  walkRepository (repositoryPath:string):Promise<string[]> {
    const results:string[]=[]

    
        
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

    
    return results;
}

export default walkRepository;