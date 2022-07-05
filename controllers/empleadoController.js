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

		const f = await db.Farmacia.create({
			data: {
				nombre: req.body.nombre,
				ubicacion: req.body.ubicacion,
			}
		});
		if(!f) res.redirect('/farmacia?&creado=0');
		res.redirect('/farmacia?&creado=1');
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
		const f = await db.Farmacia.update({
			where: {
				id: parseInt(req.params.id),
			},
			data: {
				nombre: req.body.nombre,
				ubicacion: req.body.ubicacion,
			}
		});
		if(!f) res.redirect('/farmacia?&editado=0');
		res.redirect('/farmacia?&editado=1');
	},
	delete: async (req,res) => {
		const f = await db.Farmacia.delete({
			where: {
				id: parseInt(req.params.id),
			},
		});
		console.log(f);
		if(!f) res.redirect('/farmacia?&eliminado=0');
		res.redirect('/farmacia?&eliminado=1');
	},
}