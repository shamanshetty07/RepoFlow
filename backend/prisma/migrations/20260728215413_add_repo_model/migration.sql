-- CreateEnum
CREATE TYPE "Status" AS ENUM ('PENDING', 'CLONING', 'READY', 'FAILED');

-- CreateTable
CREATE TABLE "Repo" (
    "id" SERIAL NOT NULL,
    "githubUrl" TEXT NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'PENDING',

    CONSTRAINT "Repo_pkey" PRIMARY KEY ("id")
);
