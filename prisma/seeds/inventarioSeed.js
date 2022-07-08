const {PrismaClient} = require('@prisma/client');
const db = new PrismaClient();
const { faker } = require('@faker-js/faker');

(async () => {

	await db.Inventario.deleteMany({})

	for(let i = 0; i < 30; i++) {
		const med = await db.Inventario.create({
			data: {
				id_farmacia: Math.floor(Math.random() * (Math.floor(10) - Math.floor(1)) + Math.floor(1)),
				id_medicamento: Math.floor(Math.random() * (Math.floor(30) - Math.floor(1)) + Math.floor(1)),
				cantidad: Math.floor(Math.random() * (Math.floor(30) - Math.floor(1)) + Math.floor(1)),
			}
		});

		console.log(med);
	}
})()
