const nodemailer = require('nodemailer');
// Create a transporter
const transporter = nodemailer.createTransport({
  service: 'gmail', // Use 'gmail', 'outlook', etc., or configure SMTP settings
  auth: {
    user: "shahnawajali323@gmail.com", // Your email address
    pass: "wjwy mjcz yqjr inpx", // Your email password or app-specific password
  },
});

// Verify the transporter
transporter.verify((error, success) => {
  if (error) {
    console.error('Error connecting to email service:', error);
  } else {
    console.log('Email service ready to send messages');
  }
});

module.exports=transporter;