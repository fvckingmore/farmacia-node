const {PrismaClient} = require('@prisma/client');
const db = new PrismaClient();
const { faker } = require('@faker-js/faker');

module.exports = {
	index: async (req, res) => {
		const pedidos = await db.Pedido.findMany({
			include: {
				farmacia: true,
				laboratorio: true,
				formas_pago: true,
			}
		});

		const farmacias = await db.Farmacia.findMany();
		const laboratorios = await db.Laboratorio.findMany();
		const formas_pago = await db.FormaPago.findMany();
		const medicamentos = await db.Medicamento.findMany();

		res.render('pedido/index', {
			pedidos: pedidos,
			farmacias: farmacias,
			laboratorios: laboratorios,
			formas_pago: formas_pago,
			medicamentos: medicamentos,
			titulo: "Pedidos",
			creado: req.query.creado,
			editado: req.query.editado,
			eliminado: req.query.eliminado,
		});	
	},
	create: async (req, res) => {
		console.log(req.body);

		try {
			const pedido = await db.Pedido.create({
				data: {
					id_farmacia: parseInt(req.body.id_farmacia),
					id_laboratorio: parseInt(req.body.id_laboratorio),
					forma_pago: parseInt(req.body.forma_pago),
					slug: faker.random.alphaNumeric(16)
				}
			});

			console.log(pedido);

			for(let i=0; i<req.body.medicamentos.length; i++){

				await db.PedidoMedicamento.create({
					data: {
						id_pedido: parseInt(pedido.id),
						id_medicamento: parseInt(req.body.medicamentos[i]),
					}
				});
			}
		} catch (e) {
			console.log(e);
			return res.redirect('/pedido?&creado=0');
		}

		return res.redirect('/pedido?&creado=1');
	},
	edit: async (req, res) => {
		const pedidos = await db.Pedido.findMany({
			include: {
				cargo: true,
			}
		});
		const e = await db.Pedido.findUnique({
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
		return res.render('empleado/index', {
			pedidos: pedidos,
			farmacias: farmacias,
			cargos: cargos,
			titulo: "Pedidos",
			creado: req.query.creado,
			editado: req.query.editado,
			eliminado: req.query.eliminado,
			e: e,
			edit: true
		});	
	},
	update: async (req,res) => {

		try {
			await db.Pedido.update({
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
			return res.redirect('/empleado?&editado=0');
		}
		return res.redirect('/empleado?&editado=1');
	},
	delete: async (req,res) => {
		try {
			await db.Pedido.delete({
				where: {
					id: parseInt(req.params.id),
				},
			});
		} catch (e) {
			console.log(e);
			return res.redirect('/empleado?&eliminado=0');
		}
		return res.redirect('/empleado?&eliminado=1');
	},
	show: async (req, res) => {
		const pedidos = await db.Pedido.findMany({
			include: {
				cargo: true,
			}
		});
		const e = await db.Pedido.findUnique({
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
		return res.render('empleado/index', {
			pedidos: pedidos,
			farmacias: farmacias,
			cargos: cargos,
			titulo: "Pedidos",
			creado: req.query.creado,
			editado: req.query.editado,
			eliminado: req.query.eliminado,
			e: e,
			show: true,
		});	
	},
}
