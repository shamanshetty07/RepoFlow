import { response } from "express";
import { chunks as chunkedFiles } from "../types/repository.types.js";

class embeddingService {
    async embedd(result:chunkedFiles[]){
        for(const chunk of result){
        const response=await fetch("https://localhost:8000",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: chunk.content

        })
    }
    const values=await response.json();
    
    }
}

