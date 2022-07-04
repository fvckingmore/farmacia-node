/*
  Warnings:

  - You are about to drop the `Cargo` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Compra` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Empleado` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Farmacia` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `FormaPago` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Inventario` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Laboratorio` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Medicamento` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Pedido` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Compra" DROP CONSTRAINT "Compra_id_farmacia_fkey";

-- DropForeignKey
ALTER TABLE "Compra" DROP CONSTRAINT "Compra_id_pedido_fkey";

-- DropForeignKey
ALTER TABLE "Empleado" DROP CONSTRAINT "Empleado_cargo_fkey";

-- DropForeignKey
ALTER TABLE "Empleado" DROP CONSTRAINT "Empleado_id_farmacia_fkey";

-- DropForeignKey
ALTER TABLE "Inventario" DROP CONSTRAINT "Inventario_id_farmacia_fkey";

-- DropForeignKey
ALTER TABLE "Inventario" DROP CONSTRAINT "Inventario_id_medicamento_fkey";

-- DropForeignKey
ALTER TABLE "_LaboratorioToMedicamento" DROP CONSTRAINT "_LaboratorioToMedicamento_A_fkey";

-- DropForeignKey
ALTER TABLE "_LaboratorioToMedicamento" DROP CONSTRAINT "_LaboratorioToMedicamento_B_fkey";

-- DropForeignKey
ALTER TABLE "_MedicamentoToPedido" DROP CONSTRAINT "_MedicamentoToPedido_A_fkey";

-- DropForeignKey
ALTER TABLE "_MedicamentoToPedido" DROP CONSTRAINT "_MedicamentoToPedido_B_fkey";

-- DropForeignKey
ALTER TABLE "Pedido" DROP CONSTRAINT "Pedido_forma_pago_fkey";

-- DropForeignKey
ALTER TABLE "Pedido" DROP CONSTRAINT "Pedido_id_empleado_fkey";

-- DropForeignKey
ALTER TABLE "Pedido" DROP CONSTRAINT "Pedido_id_farmacia_fkey";

-- DropForeignKey
ALTER TABLE "Pedido" DROP CONSTRAINT "Pedido_id_laboratorio_fkey";

-- DropTable
DROP TABLE "Cargo";

-- DropTable
DROP TABLE "Compra";

-- DropTable
DROP TABLE "Empleado";

-- DropTable
DROP TABLE "Farmacia";

-- DropTable
DROP TABLE "FormaPago";

-- DropTable
DROP TABLE "Inventario";

-- DropTable
DROP TABLE "Laboratorio";

-- DropTable
DROP TABLE "Medicamento";

-- DropTable
DROP TABLE "Pedido";

-- CreateTable
CREATE TABLE "cargos" (
    "id" SERIAL NOT NULL,
    "descripcion" TEXT NOT NULL,

    CONSTRAINT "cargos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "formas_pago" (
    "id" SERIAL NOT NULL,
    "descripcion" TEXT NOT NULL,

    CONSTRAINT "formas_pago_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "farmacias" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "ubicacion" TEXT NOT NULL,

    CONSTRAINT "farmacias_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "empleados" (
    "id" SERIAL NOT NULL,
    "ci" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "edad" INTEGER NOT NULL,
    "telefono" TEXT NOT NULL,
    "cargo" INTEGER NOT NULL,
    "id_farmacia" INTEGER NOT NULL,

    CONSTRAINT "empleados_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "medicamentos" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "direccion" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,

    CONSTRAINT "medicamentos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pedidos" (
    "id" SERIAL NOT NULL,
    "id_farmacia" INTEGER NOT NULL,
    "id_laboratorio" INTEGER NOT NULL,
    "id_empleado" INTEGER NOT NULL,
    "forma_pago" INTEGER NOT NULL,
    "slug" TEXT NOT NULL,

    CONSTRAINT "pedidos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "compras" (
    "id" SERIAL NOT NULL,
    "vencimiento" TIMESTAMP(3) NOT NULL,
    "cancelado" BOOLEAN NOT NULL,
    "id_farmacia" INTEGER NOT NULL,
    "id_pedido" INTEGER NOT NULL,

    CONSTRAINT "compras_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "inventario" (
    "id" SERIAL NOT NULL,
    "id_farmacia" INTEGER NOT NULL,
    "id_medicamento" INTEGER NOT NULL,
    "cantidad" INTEGER NOT NULL,

    CONSTRAINT "inventario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "laboratorios" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "direccion" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,

    CONSTRAINT "laboratorios_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "empleados" ADD CONSTRAINT "empleados_cargo_fkey" FOREIGN KEY ("cargo") REFERENCES "cargos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "empleados" ADD CONSTRAINT "empleados_id_farmacia_fkey" FOREIGN KEY ("id_farmacia") REFERENCES "farmacias"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pedidos" ADD CONSTRAINT "pedidos_forma_pago_fkey" FOREIGN KEY ("forma_pago") REFERENCES "formas_pago"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pedidos" ADD CONSTRAINT "pedidos_id_farmacia_fkey" FOREIGN KEY ("id_farmacia") REFERENCES "farmacias"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pedidos" ADD CONSTRAINT "pedidos_id_empleado_fkey" FOREIGN KEY ("id_empleado") REFERENCES "empleados"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pedidos" ADD CONSTRAINT "pedidos_id_laboratorio_fkey" FOREIGN KEY ("id_laboratorio") REFERENCES "laboratorios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "compras" ADD CONSTRAINT "compras_id_farmacia_fkey" FOREIGN KEY ("id_farmacia") REFERENCES "farmacias"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "compras" ADD CONSTRAINT "compras_id_pedido_fkey" FOREIGN KEY ("id_pedido") REFERENCES "pedidos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "inventario" ADD CONSTRAINT "inventario_id_farmacia_fkey" FOREIGN KEY ("id_farmacia") REFERENCES "farmacias"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "inventario" ADD CONSTRAINT "inventario_id_medicamento_fkey" FOREIGN KEY ("id_medicamento") REFERENCES "medicamentos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MedicamentoToPedido" ADD CONSTRAINT "_MedicamentoToPedido_A_fkey" FOREIGN KEY ("A") REFERENCES "medicamentos"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MedicamentoToPedido" ADD CONSTRAINT "_MedicamentoToPedido_B_fkey" FOREIGN KEY ("B") REFERENCES "pedidos"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LaboratorioToMedicamento" ADD CONSTRAINT "_LaboratorioToMedicamento_A_fkey" FOREIGN KEY ("A") REFERENCES "laboratorios"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LaboratorioToMedicamento" ADD CONSTRAINT "_LaboratorioToMedicamento_B_fkey" FOREIGN KEY ("B") REFERENCES "medicamentos"("id") ON DELETE CASCADE ON UPDATE CASCADE;
