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
					ci: req.body.cedula,
					nombre: req.body.nombre,
					apellido: req.body.apellido,
					edad: parseInt(req.body.edad),
					telefono: req.body.telefono,
					id_cargo: parseInt(req.body.id_cargo),
					id_farmacia: parseInt(req.body.id_farmacia),
				}
			});
		} catch (e) {
			console.log(e);
			return res.redirect('/medicamento?&creado=0');
		}

		return res.redirect('/medicamento?&creado=1');
	},
	edit: async (req, res) => {
		const medicamentos = await db.Medicamento.findMany({
			include: {
				cargo: true,
			}
		});
		const e = await db.Medicamento.findUnique({
			where: {
				id: parseInt(req.params.id),
			},
			include: {
				cargo: true,
				farmacia: true,
			}
		});
		const farmacias = await db.Farmacia.findMany();
		const cargos = await db.Cargo.findMany();
		return res.render('medicamento/index', {
			medicamentos: medicamentos,
			farmacias: farmacias,
			cargos: cargos,
			titulo: "Medicamentos",
			creado: req.query.creado,
			editado: req.query.editado,
			eliminado: req.query.eliminado,
			e: e,
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
					ci: req.body.cedula,
					nombre: req.body.nombre,
					apellido: req.body.apellido,
					edad: parseInt(req.body.edad),
					telefono: req.body.telefono,
					id_cargo: parseInt(req.body.id_cargo),
					id_farmacia: parseInt(req.body.id_farmacia),
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
