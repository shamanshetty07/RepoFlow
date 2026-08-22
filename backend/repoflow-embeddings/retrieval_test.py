from retriever import CodeRetriever


chunks = [
    """
    function authenticate(username, password) {
        const user = database.findUser(username);

        if (!user) {
            return null;
        }

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

        return database.insertUser(
            username,
            hashedPassword
        );
    }
    """,

    """
    function processPayment(order) {
        return stripe.paymentIntents.create({
            amount: order.total,
            currency: "usd"
        });
    }
    """
]


retriever = CodeRetriever()

query = "Where is password authentication implemented?"

results = retriever.search(
    query,
    chunks,
    top_k=3
)

for i, result in enumerate(results):

    print("\nRESULT", i + 1)
    print("Score:", result["score"])
    print(result["chunk"])



#     GitHub repository
#         ↓
# clone / download
#         ↓
# repository file walker
#         ↓
# language detection
#         ↓
# Tree-sitter parser
#         ↓
# AST
#         ↓
# symbol extraction
#         ↓
# semantic chunk creation
#         ↓
# metadata + relationships
#         ↓
# CodeRankEmbed
#         ↓
# vector index
