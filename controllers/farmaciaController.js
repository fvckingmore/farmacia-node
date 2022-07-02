const {PrismaClient} = require('@prisma/client');
const db = new PrismaClient();

module.exports = {

	index: (req, res) => {
		res.render('farmacia/index');	
	}
}

