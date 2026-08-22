from sentence_transformers import SentenceTransformer
import numpy as np

model = SentenceTransformer(
    "nomic-ai/CodeRankEmbed",
    trust_remote_code=True
)

chunks = [
    """
    function authenticate(username, password) {
        const user = database.findUser(username);
        return verifyPassword(password, user.password);
    }
    """,

    """
    function generateToken(user) {
        return jwt.sign(
            { id: user.id },
            process.env.JWT_SECRET
        );
    }
    """,

    """
    function createUser(username, password) {
        const hashedPassword = hashPassword(password);
        return database.insertUser(username, hashedPassword);
    }
    """
]

query = "Where is the code that authenticates a user with a password?"

query_embedding = model.encode(
    "Represent this query for searching relevant code:\n" + query
)

chunk_embeddings = model.encode(chunks)

# Normalize vectors
query_embedding = query_embedding / np.linalg.norm(query_embedding)
chunk_embeddings = chunk_embeddings / np.linalg.norm(
    chunk_embeddings, axis=1, keepdims=True
)

scores = chunk_embeddings @ query_embedding

for i, score in enumerate(scores):
    print(f"Chunk {i}: {score:.4f}")

best = np.argmax(scores)

print("\nMost relevant chunk:")
print(chunks[best])