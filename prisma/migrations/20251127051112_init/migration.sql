-- CreateEnum
CREATE TYPE "FormStatus" AS ENUM ('novo', 'respondido', 'em_andamento', 'cancelado', 'finalizado');

-- CreateTable
CREATE TABLE "Form" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "projectDescription" TEXT NOT NULL,
    "deadline" TEXT NOT NULL,
    "budget" TEXT NOT NULL,
    "projectType" TEXT NOT NULL,
    "extraDetails" TEXT,
    "status" "FormStatus" NOT NULL DEFAULT 'novo',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Form_pkey" PRIMARY KEY ("id")
);
