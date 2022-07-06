/*
  Warnings:

  - You are about to drop the column `cargo` on the `empleados` table. All the data in the column will be lost.
  - Added the required column `id_cargo` to the `empleados` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "empleados" DROP CONSTRAINT "empleados_cargo_fkey";

-- AlterTable
ALTER TABLE "empleados" DROP COLUMN "cargo",
ADD COLUMN     "id_cargo" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "empleados" ADD CONSTRAINT "empleados_id_cargo_fkey" FOREIGN KEY ("id_cargo") REFERENCES "cargos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
