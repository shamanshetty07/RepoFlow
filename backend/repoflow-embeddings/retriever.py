from sentence_transformers import SentenceTransformer
import numpy as np


class CodeRetriever:

    def __init__(self):
        print("Loading CodeRankEmbed...")

        self.model = SentenceTransformer(
            "nomic-ai/CodeRankEmbed",
            trust_remote_code=True
        )

        print("Model loaded!")

    def embed_code(self, chunks):
        return self.model.encode(
            chunks,
            convert_to_numpy=True
        )

    def embed_query(self, query):
        query = (
            "Represent this query for searching relevant code:\n"
            + query
        )

        return self.model.encode(
            query,
            convert_to_numpy=True
        )

    def search(self, query, chunks, top_k=3):

        query_embedding = self.embed_query(query)
        chunk_embeddings = self.embed_code(chunks)

        # Normalize
        query_embedding = (
            query_embedding /
            np.linalg.norm(query_embedding)
        )

        chunk_embeddings = (
            chunk_embeddings /
            np.linalg.norm(
                chunk_embeddings,
                axis=1,
                keepdims=True
            )
        )

        scores = chunk_embeddings @ query_embedding

        ranked_indices = np.argsort(scores)[::-1]

        results = []

        for index in ranked_indices[:top_k]:
            results.append({
                "chunk": chunks[index],
                "score": float(scores[index])
            })

        return results