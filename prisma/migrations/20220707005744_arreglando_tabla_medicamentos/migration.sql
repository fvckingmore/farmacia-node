/*
  Warnings:

  - You are about to drop the column `direccion` on the `medicamentos` table. All the data in the column will be lost.
  - You are about to drop the column `nombre` on the `medicamentos` table. All the data in the column will be lost.
  - You are about to drop the column `telefono` on the `medicamentos` table. All the data in the column will be lost.
  - Added the required column `accion` to the `medicamentos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `monodroga` to the `medicamentos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `precio` to the `medicamentos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `presentacion` to the `medicamentos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "medicamentos" DROP COLUMN "direccion",
DROP COLUMN "nombre",
DROP COLUMN "telefono",
ADD COLUMN     "accion" TEXT NOT NULL,
ADD COLUMN     "monodroga" TEXT NOT NULL,
ADD COLUMN     "precio" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "presentacion" TEXT NOT NULL;
