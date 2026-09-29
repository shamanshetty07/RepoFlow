
import { chunks as chunkedFiles } from "../types/repository.types.js";
let value:any;
export class embeddingService {

    async embedd(result:chunkedFiles[]){
        for(const chunk of result){
         value=await fetch("http://localhost:8000/embeddings",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:  JSON.stringify({

                content: chunk.content

            })

        })
    }
    const values=await value.json();
    console.log(values)
    
    }
}

