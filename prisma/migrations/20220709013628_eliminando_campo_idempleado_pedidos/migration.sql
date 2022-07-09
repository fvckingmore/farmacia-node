/*
  Warnings:

  - You are about to drop the column `id_empleado` on the `pedidos` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "pedidos" DROP CONSTRAINT "pedidos_id_empleado_fkey";

-- AlterTable
ALTER TABLE "pedidos" DROP COLUMN "id_empleado";
