const {PrismaClient} = require('@prisma/client');
const db = new PrismaClient();

module.exports = {
	index: async (req, res) => {
		const inventario = await db.Inventario.findMany({
			include: {
				farmacia: true,
				medicamento: true,
			}
		});

		res.render('inventario/index', {
			inventario: inventario,
			titulo: "Inventario",
		});	
	},
}