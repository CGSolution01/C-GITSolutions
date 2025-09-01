const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// Optional: Uncomment and configure for email notifications
// const nodemailer = require('nodemailer');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

// Handle quotation requests
app.post('/api/quotation', async (req, res) => {
    const { name, email, service, details } = req.body;

    // Save to database here if desired
    // Or send email notification (example below)

    /*
    // Uncomment for email notification (configure transporter first)
    try {
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'your.email@gmail.com',
                pass: 'yourpassword'
            }
        });
        await transporter.sendMail({
            from: '"C&G IT Solutions" <your.email@gmail.com>',
            to: 'info@cgitsolutions.com',
            subject: `New Quotation Request from ${name}`,
            html: `<b>Name:</b> ${name}<br>
                   <b>Email:</b> ${email}<br>
                   <b>Service:</b> ${service}<br>
                   <b>Details:</b> ${details}`
        });
    } catch (err) {
        return res.status(500).json({ message: "Failed to send email." });
    }
    */

    res.json({ message: "Quotation request received. We'll contact you soon!" });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});