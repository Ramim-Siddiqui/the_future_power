require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/submit-form', async (req, res) => {
  const { name, email, mobile, problem } = req.body;

  let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.GMAIL_USER, 
      pass: process.env.GMAIL_PASS
    }
  });

  let mailOptions = {
    from: email, 
    to: process.env.GMAIL_USER, 
    subject: 'New Contact Form Submission',
    text: `
      Name: ${name}
      Email: ${email}
      Mobile: ${mobile}
      Problem: ${problem}
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'An error occurred while sending the email' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
