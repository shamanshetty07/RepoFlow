import {simpleGit} from "simple-git"
const git=simpleGit()
export class GitService {
    async cloneRepository(githubUrl:string,destinationPath:string):Promise<void>{
        await git.clone(githubUrl,destinationPath);
    }
}