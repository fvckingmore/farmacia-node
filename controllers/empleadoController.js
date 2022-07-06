const {PrismaClient} = require('@prisma/client');
const db = new PrismaClient();

module.exports = {
	index: async (req, res) => {
		const empleados = await db.Empleado.findMany({
			include: {
				cargo: true,
			}
		});
		const farmacias = await db.Farmacia.findMany();
		const cargos = await db.Cargo.findMany();

		console.log(empleados);

		res.render('empleado/index', {
			empleados: empleados,
			farmacias: farmacias,
			cargos: cargos,
			titulo: "Empleados",
			creado: req.query.creado,
			editado: req.query.editado,
			eliminado: req.query.eliminado,
		});	
	},
	create: async (req, res) => {

		const f = await db.Empleado.create({
			data: {
				nombre: req.body.nombre,
				ubicacion: req.body.ubicacion,
			}
		});
		if(!f) res.redirect('/empleado?&creado=0');
		res.redirect('/empleado?&creado=1');
	},
	edit: async (req, res) => {
		const empleados = await db.Empleado.findMany();
		const f = await db.Empleado.findUnique({
			where: {
				id: parseInt(req.params.id),
			}
		});
		res.render('empleado/index', {
			empleados: empleados,
			f: f,
			titulo: "Empleados",
			edit: true
		});	
	},
	update: async (req,res) => {
		const f = await db.Empleado.update({
			where: {
				id: parseInt(req.params.id),
			},
			data: {
				nombre: req.body.nombre,
				ubicacion: req.body.ubicacion,
			}
		});
		if(!f) res.redirect('/empleado?&editado=0');
		res.redirect('/empleado?&editado=1');
	},
	delete: async (req,res) => {
		const f = await db.Empleado.delete({
			where: {
				id: parseInt(req.params.id),
			},
		});
		console.log(f);
		if(!f) res.redirect('/empleado?&eliminado=0');
		res.redirect('/empleado?&eliminado=1');
	},
}
