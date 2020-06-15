const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/api/submit_form', (req, res) => {
  res.send({ formStateReceived: "test"});
});

const sendgridUrl = 'https://api.sendgrid.com/v3/mail/send';
// const headers = {
//     'Content-Type': 'application/json;charset=utf-8',
//     'Authorization': `Bearer ${process.env.REACT_APP_SENDGRID_API_KEY}`
// };
// const method = 'POST';
// const mode = 'no-cors';
// const sendgridToFrom = {
//     personalizations: [{
//         to: [{
//             email: 'clubbing101.inquiries@gmail.com'
//         }]
//     }],
//     from: {
//         email: 'theclubbing101@gmail.com'
//     }
// }
