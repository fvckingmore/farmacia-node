/*
  Warnings:

  - You are about to drop the `_LaboratorioToMedicamento` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_MedicamentoToPedido` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[id_pedido]` on the table `compras` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "_LaboratorioToMedicamento" DROP CONSTRAINT "_LaboratorioToMedicamento_A_fkey";

-- DropForeignKey
ALTER TABLE "_LaboratorioToMedicamento" DROP CONSTRAINT "_LaboratorioToMedicamento_B_fkey";

-- DropForeignKey
ALTER TABLE "_MedicamentoToPedido" DROP CONSTRAINT "_MedicamentoToPedido_A_fkey";

-- DropForeignKey
ALTER TABLE "_MedicamentoToPedido" DROP CONSTRAINT "_MedicamentoToPedido_B_fkey";

-- DropTable
DROP TABLE "_LaboratorioToMedicamento";

-- DropTable
DROP TABLE "_MedicamentoToPedido";

-- CreateTable
CREATE TABLE "compra_medicamento" (
    "id" SERIAL NOT NULL,
    "id_compra" INTEGER NOT NULL,
    "id_medicamento" INTEGER NOT NULL,
    "cantidad" INTEGER NOT NULL,

    CONSTRAINT "compra_medicamento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "laboratorio_medicamento" (
    "id" SERIAL NOT NULL,
    "id_laboratorio" INTEGER NOT NULL,
    "id_medicamento" INTEGER NOT NULL,

    CONSTRAINT "laboratorio_medicamento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pedido_medicamento" (
    "id" SERIAL NOT NULL,
    "id_pedido" INTEGER NOT NULL,
    "id_medicamento" INTEGER NOT NULL,

    CONSTRAINT "pedido_medicamento_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "compras_id_pedido_key" ON "compras"("id_pedido");

-- AddForeignKey
ALTER TABLE "compra_medicamento" ADD CONSTRAINT "compra_medicamento_id_medicamento_fkey" FOREIGN KEY ("id_medicamento") REFERENCES "medicamentos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "compra_medicamento" ADD CONSTRAINT "compra_medicamento_id_compra_fkey" FOREIGN KEY ("id_compra") REFERENCES "compras"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "laboratorio_medicamento" ADD CONSTRAINT "laboratorio_medicamento_id_medicamento_fkey" FOREIGN KEY ("id_medicamento") REFERENCES "medicamentos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "laboratorio_medicamento" ADD CONSTRAINT "laboratorio_medicamento_id_laboratorio_fkey" FOREIGN KEY ("id_laboratorio") REFERENCES "laboratorios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pedido_medicamento" ADD CONSTRAINT "pedido_medicamento_id_medicamento_fkey" FOREIGN KEY ("id_medicamento") REFERENCES "medicamentos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pedido_medicamento" ADD CONSTRAINT "pedido_medicamento_id_pedido_fkey" FOREIGN KEY ("id_pedido") REFERENCES "pedidos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
