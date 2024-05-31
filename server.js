const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Contact form route
app.post('/send', (req, res) => {
    const { name, email, message } = req.body;

    // Create a transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
        service: 'gmail', // or any other email service you use
        auth: {
            user: 'your-email@gmail.com', // replace with your email
            pass: 'your-email-password' // replace with your email password
        }
    });

    const mailOptions = {
        from: email,
        to: 'your-email@gmail.com', // replace with your email
        subject: `Contact Form Submission from ${name}`,
        text: `You have a new message from ${name} (${email}):\n\n${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent: ' + info.response);
            res.redirect('/contact.html');
        }
    });
});

// Serve static files
app.use(express.static(__dirname));

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});