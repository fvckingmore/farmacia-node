const {PrismaClient} = require('@prisma/client');
const db = new PrismaClient();
const { faker } = require('@faker-js/faker');

(async () => {

	await db.FormaPago.deleteMany({})

	for(let i = 0; i < 10; i++) {
		const fp = await db.FormaPago.create({
			data: {
				descripcion: faker.commerce.department(),
			}
		});

		console.log(fp);
	}
})()
