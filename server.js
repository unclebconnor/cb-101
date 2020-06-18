const express = require("express");

var bodyParser = require("body-parser");
const port = process.env.PORT || 5000;
require("dotenv").config();

/////// helpers for submit form /////////

// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const buildEmailMessage = (formState) => {
	const f = formState;
	// form has default values & validation so these are safe
	const messageText = `Inquiry Details:\n
        City: ${f.selectedCity}
        First: ${f.firstName}
        Last: ${f.lastName}
        Phone: ${f.phone}
        Email: ${f.email}
        Arrival Date: ${f.arrivalDate}
        Departure Date: ${f.departureDate}
        Occasion: ${f.occasion}
        Men: ${f.countMen}
        Women: ${f.countWomen}
        Minors: ${f.minors}\n
    `;
	return messageText;
};

const app = express();

// parse application/json
app.use(bodyParser.json());

app.post('/api/submit_form', async (req, res) => {
	const msg = {
		to: `${process.env.CLUBBING_101_INQUIRIES}`,
		from: `${process.env.CLUBBING_101_MAIN}`,
		subject: "Clubbing 101 Inquiry",
		text: buildEmailMessage(req.body.formState),
	};

	const thanks = `Thanks for your inquiry.  We are confirming that we have received your request successfully and you will hear from us soon.\n\n`;

	const confirmMsg = {
		to: `${req.body.formState.email}`,
		from: `${process.env.CLUBBING_101_MAIN}`,
		subject: "Clubbing 101 Inquiry",
		text: thanks + buildEmailMessage(req.body.formState),
	};
	try {
        let sgRes = await sgMail.send(msg)
            .then(async () => {
			    let sgRes = await sgMail.send(confirmMsg);
            })
            .then(() => {
                res.status(200).send("Success")
            });
	} catch (e) {
		res.status(500).send("Something went wrong");
	}
});


//Non api requests in production
if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
    // Express will serve up production assets i.e. main.js
    app.use(express.static(__dirname + '/react-ui/build'));
    // If Express doesn't recognize route serve index.html
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(
            path.resolve(__dirname, 'react-ui', 'build', 'index.html')
        );
    });
}

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));