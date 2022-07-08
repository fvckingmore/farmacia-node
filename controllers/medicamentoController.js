const {PrismaClient} = require('@prisma/client');
const db = new PrismaClient();

module.exports = {
	index: async (req, res) => {
		const medicamentos = await db.Medicamento.findMany();

		res.render('medicamento/index', {
			medicamentos: medicamentos,
			titulo: "Medicamentos",
			creado: req.query.creado,
			editado: req.query.editado,
			eliminado: req.query.eliminado,
		});	
	},
	create: async (req, res) => {
		try {
			await db.Medicamento.create({
				data: {
					monodroga: req.body.monodroga,
					presentacion: req.body.presentacion,
					accion: req.body.accion,
					precio: parseFloat(req.body.precio),
				}
			});
		} catch (e) {
			console.log(e);
			return res.redirect('/medicamento?&creado=0');
		}

		return res.redirect('/medicamento?&creado=1');
	},
	edit: async (req, res) => {
		const medicamentos = await db.Medicamento.findMany();
		const m = await db.Medicamento.findUnique({
			where: {
				id: parseInt(req.params.id),
			},
		});
		return res.render('medicamento/index', {

			medicamentos: medicamentos,
			titulo: "Medicamentos",
			creado: req.query.creado,
			editado: req.query.editado,
			eliminado: req.query.eliminado,
			m: m,
			edit: true
		});	
	},
	update: async (req,res) => {
		try {
			await db.Medicamento.update({
				where: {
					id: parseInt(req.params.id),
				},
				data: {
					monodroga: req.body.monodroga,
					presentacion: req.body.presentacion,
					accion: req.body.accion,
					precio: parseFloat(req.body.precio),
				}
			});
		} catch (e) {
			console.log(e);
			return res.redirect('/medicamento?&editado=0');
		}
		return res.redirect('/medicamento?&editado=1');
	},
	delete: async (req,res) => {
		try {
			await db.Medicamento.delete({
				where: {
					id: parseInt(req.params.id),
				},
			});
		} catch (e) {
			console.log(e);
			return res.redirect('/medicamento?&eliminado=0');
		}
		return res.redirect('/medicamento?&eliminado=1');
	},
}
