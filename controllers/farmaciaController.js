const {PrismaClient} = require('@prisma/client');
const db = new PrismaClient();

module.exports = {
	index: async (req, res) => {
		const farmacias = await db.Farmacia.findMany();
		res.render('farmacia/index', {
			farmacias: farmacias,
			titulo: "Farmacias",
			creado: req.query.creado,
			editado: req.query.editado,
			eliminado: req.query.eliminado,
		});	
	},
	create: async (req, res) => {
		try {
			const f = await db.Farmacia.create({
				data: {
					nombre: req.body.nombre,
					ubicacion: req.body.ubicacion,
				}
			});
			console.log(f);
		} catch (e) {
			return res.redirect('/farmacia?&creado=0');
		}
		return res.redirect('/farmacia?&creado=1');
	},
	edit: async (req, res) => {
		const farmacias = await db.Farmacia.findMany();
		const f = await db.Farmacia.findUnique({
			where: {
				id: parseInt(req.params.id),
			}
		});
		res.render('farmacia/index', {
			farmacias: farmacias,
			f: f,
			titulo: "Farmacias",
			edit: true
		});	
	},
	update: async (req,res) => {
		try{
			await db.Farmacia.update({
				where: {
					id: parseInt(req.params.id),
				},
				data: {
					nombre: req.body.nombre,
					ubicacion: req.body.ubicacion,
				}
			});
		} catch (e) {
			return res.redirect('/farmacia?&editado=0');
		}
		return res.redirect('/farmacia?&editado=1');
	},
	delete: async (req,res) => {
		try {
			await db.Farmacia.delete({
				where: {
					id: parseInt(req.params.id),
				},
			});
		} catch (e) {
			return res.redirect('/farmacia?&eliminado=0');
		}
		return res.redirect('/farmacia?&eliminado=1');
	},
}
