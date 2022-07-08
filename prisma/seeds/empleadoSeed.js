const {PrismaClient} = require('@prisma/client');
const db = new PrismaClient();
const { faker } = require('@faker-js/faker');

(async () => {

	await db.Empleado.deleteMany({})

	for(let i = 0; i < 20; i++) {
		const emp = await db.Empleado.create({
			data: {
				ci: faker.random.numeric(8),
				nombre: faker.name.firstName(),
				apellido: faker.name.lastName(),
				edad: Math.floor(Math.random() * (Math.floor(60) - Math.floor(18)) + Math.floor(18)),
				telefono: faker.phone.number(),
				id_cargo: Math.floor(Math.random() * (Math.floor(10) - Math.floor(1)) + Math.floor(1)),
				id_farmacia: Math.floor(Math.random() * (Math.floor(10) - Math.floor(1)) + Math.floor(1)),
			}
		});

		console.log(emp);
	}
})()
