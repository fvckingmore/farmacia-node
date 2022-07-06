const {PrismaClient} = require('@prisma/client');
const db = new PrismaClient();
const { faker } = require('@faker-js/faker');

(async () => {

	await db.Cargo.deleteMany({})

	for(let i = 0; i < 10; i++) {
		const car = await db.Cargo.create({
			data: {
				descripcion: faker.commerce.department(),
			}
		});

		console.log(car);
	}
})()
