const nodemailer = require("nodemailer");
const Customer = require("../model/customer.model");

// setup transporter (using Gmail example)


// create transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // your Gmail email
    pass: process.env.EMAIL_PASS, // app password (NOT your main password)
  },
});

// verify connection (optional, helps debug)
transporter.verify((error, success) => {
  if (error) {
    console.error("Nodemailer connection error:", error);
  } else {
    console.log("Nodemailer ready to send emails");
  }
});

const submitContact = async (req, res) => {
  try {
    const { name, phone, email, service, message } = req.body;

    if (!name || !phone || !email || !service) {
      return res.status(400).json({ 
        success: false, 
        error: "Name, phone, email, and service are required" 
      });
    }

    // 1. Save in MongoDB
    const customer = new Customer({ name, phone, email, service, message });
    await customer.save();

    // 2. Send email notification
    const mailOptions = {
      from: `"UGU Services" <${process.env.EMAIL_USER}>`, // must match Gmail account
      to: "akhtartanoli23@gmail.com", // your business email
      subject: `New Contact Request from ${name}`,
      html: `
        <h2>New Contact Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong> ${message || "No message"}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(201).json({
      success: true,
      message: "Request submitted and email sent",
      data: customer,
    });
  } catch (error) {
    console.error("Error in contact submission:", error);
    res.status(500).json({ success: false, error: error.message });
  }
};

const name = async (req,res)=>{
  res.send('vercel hello babe')
}

module.exports = { submitContact ,name };