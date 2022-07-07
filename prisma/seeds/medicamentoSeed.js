const {PrismaClient} = require('@prisma/client');
const db = new PrismaClient();
const { faker } = require('@faker-js/faker');

(async () => {

	await db.Medicamento.deleteMany({})

	for(let i = 0; i < 200; i++) {
		const med = await db.Medicamento.create({
			data: {
				monodroga: faker.commerce.productAdjective(),
				presentacion: faker.commerce.productMaterial(),
				accion: faker.word.verb(),
				precio: parseFloat(faker.commerce.price(5, 200)),
			}
		});

		console.log(med);
	}
})()
