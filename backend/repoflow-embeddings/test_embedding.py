from fastapi import FastAPI
from pydantic import BaseModel
from sentence_transformers import SentenceTransformer

app = FastAPI()

model = SentenceTransformer(
    "nomic-ai/CodeRankEmbed",
    trust_remote_code=True
)


class EmbeddingRequest(BaseModel):
    content: str


@app.post("/embeddings")
def create_embedding(request: EmbeddingRequest):
    embedding = model.encode(request.content)

    return {
        "embedding": embedding.tolist()
    }


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)

