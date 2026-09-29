-- CreateTable
CREATE TABLE "Chunk" (
    "id" SERIAL NOT NULL,
    "repoId" INTEGER NOT NULL,
    "filePath" TEXT NOT NULL,
    "language" TEXT,
    "content" TEXT NOT NULL,
    "chunkIndex" INTEGER NOT NULL,
    "startIndex" INTEGER NOT NULL,
    "endIndex" INTEGER NOT NULL,
    "startLine" INTEGER NOT NULL,
    "endLine" INTEGER NOT NULL,
    "tokenCount" INTEGER NOT NULL,
    "embedding" DOUBLE PRECISION[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Chunk_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Chunk_repoId_idx" ON "Chunk"("repoId");

-- CreateIndex
CREATE UNIQUE INDEX "Chunk_repoId_filePath_chunkIndex_key" ON "Chunk"("repoId", "filePath", "chunkIndex");

-- AddForeignKey
ALTER TABLE "Chunk" ADD CONSTRAINT "Chunk_repoId_fkey" FOREIGN KEY ("repoId") REFERENCES "Repo"("id") ON DELETE CASCADE ON UPDATE CASCADE;
