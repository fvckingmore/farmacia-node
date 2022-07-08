const {PrismaClient} = require('@prisma/client');
const db = new PrismaClient();
const { faker } = require('@faker-js/faker');

(async () => {

	await db.Laboratorio.deleteMany({})

	for(let i = 0; i < 5; i++) {
		const lab = await db.Laboratorio.create({
			data: {
				nombre: faker.company.companyName(),
				direccion: faker.address.streetAddress(),
				telefono: faker.phone.phoneNumber(),
			}
		});

		console.log(lab);
	}
})()
