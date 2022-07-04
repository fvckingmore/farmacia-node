const {PrismaClient} = require('@prisma/client');
const db = new PrismaClient();
const { faker } = require('@faker-js/faker');

(async () => {

	await db.Farmacia.deleteMany({})

	for(let i = 0; i < 50; i++) {
		const far = await db.Farmacia.create({
			data: {
				nombre: faker.company.companyName(),
				ubicacion: faker.address.city(),
			}
		});

		console.log(far);
	}
})()
