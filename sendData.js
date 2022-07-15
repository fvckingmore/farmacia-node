const fetch = require('node-fetch-commonjs');
// import fetch from 'node-fetch';

(async () => {

	const sendData = await fetch('http://127.0.0.1:8000/api/store', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			name: 'gge',
			amount: 2,
			price: 4
		})
	}).catch(e => console.log(e)); 	

	const data = await sendData.json();

	console.log(data);
})();