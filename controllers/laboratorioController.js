const {PrismaClient} = require('@prisma/client');
const db = new PrismaClient();

module.exports = {
	index: async (req, res) => {
		const laboratorios = await db.Laboratorio.findMany();

		res.render('laboratorio/index', {
			laboratorios: laboratorios,
			titulo: "Laboratorios",
			creado: req.query.creado,
			editado: req.query.editado,
			eliminado: req.query.eliminado,
		});	
	},
	create: async (req, res) => {
		try {
			await db.Laboratorio.create({
				data: {
					nombre: req.body.nombre,
					direccion: req.body.direccion,
					telefono: req.body.telefono,
				}
			});
		} catch (e) {
			console.log(e);
			return res.redirect('/laboratorio?&creado=0');
		}

		return res.redirect('/laboratorio?&creado=1');
	},
	edit: async (req, res) => {
		const laboratorios = await db.Laboratorio.findMany();
		const l = await db.Laboratorio.findUnique({
			where: {
				id: parseInt(req.params.id),
			},
		});
		return res.render('laboratorio/index', {

			laboratorios: laboratorios,
			titulo: "Laboratorios",
			creado: req.query.creado,
			editado: req.query.editado,
			eliminado: req.query.eliminado,
			l: l,
			edit: true
		});	
	},
	update: async (req,res) => {
		try {
			await db.Laboratorio.update({
				where: {
					id: parseInt(req.params.id),
				},
				data: {
					nombre: req.body.nombre,
					direccion: req.body.direccion,
					telefono: req.body.telefono,
				}
			});
		} catch (e) {
			console.log(e);
			return res.redirect('/laboratorio?&editado=0');
		}
		return res.redirect('/laboratorio?&editado=1');
	},
	delete: async (req,res) => {
		try {
			await db.Laboratorio.delete({
				where: {
					id: parseInt(req.params.id),
				},
			});
		} catch (e) {
			console.log(e);
			return res.redirect('/laboratorio?&eliminado=0');
		}
		return res.redirect('/laboratorio?&eliminado=1');
	},
}
