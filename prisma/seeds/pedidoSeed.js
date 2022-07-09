const {PrismaClient} = require('@prisma/client');
const db = new PrismaClient();
const { faker } = require('@faker-js/faker');

(async () => {

	await db.Pedido.deleteMany({})

	for(let i = 0; i < 30; i++) {
		const ped = await db.Pedido.create({
			data: {
				id_farmacia: Math.floor(Math.random() * (Math.floor(10) - Math.floor(1)) + Math.floor(1)),
				id_laboratorio: Math.floor(Math.random() * (Math.floor(5) - Math.floor(1)) + Math.floor(1)),
				id_empleado: Math.floor(Math.random() * (Math.floor(20) - Math.floor(1)) + Math.floor(1)),
				forma_pago: Math.floor(Math.random() * (Math.floor(10) - Math.floor(1)) + Math.floor(1)),
				slug: faker.random.alpha(),
			}
		});

		console.log(ped);
	}
})()
