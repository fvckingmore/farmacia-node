/*
  Warnings:

  - Added the required column `cantidad` to the `pedido_medicamento` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "pedido_medicamento" ADD COLUMN     "cantidad" INTEGER NOT NULL;
