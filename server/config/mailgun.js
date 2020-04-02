const mailgun = require("mailgun-js");
const DOMAIN = 'sandbox95a071782e5d422aa35eabafe1d55410.mailgun.org';
const mg = mailgun({apiKey: 'b6d79c6416f624c026b7d32a8c1cdc61-46ac6b00-ef9d5117', domain: DOMAIN});
const data = {
	from: 'Excited User <me@samples.mailgun.org>',
	to: 'amitabh.kumar2@gmail.com, YOU@YOUR_DOMAIN_NAME',
	subject: 'Hello',
	text: 'Testing some Mailgun awesomness!'
};
mg.messages().send(data, function (error, body) {
	console.log(body);
});
