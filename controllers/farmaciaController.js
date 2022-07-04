const {PrismaClient} = require('@prisma/client');
const db = new PrismaClient();

module.exports = {

	index: async (req, res) => {
		const farmacias = await db.Farmacia.findMany();
		res.render('farmacia/index', {
			farmacias: farmacias,
			titulo: "Farmacias",
		});	
	},

	create: async (req, res) => {
		res.redirect('/farmacia');
	},
}

