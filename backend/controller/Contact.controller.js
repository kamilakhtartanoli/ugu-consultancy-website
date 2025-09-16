const nodemailer = require("nodemailer");
const Customer = require("../model/customer.model.js");

// setup transporter (using Gmail example)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // your gmail (from .env)
    pass: process.env.EMAIL_PASS, // app password (not your main password)
  },
});
const submitContact = async (req, res) => {
  try {
    const { name, phone, email, service, message } = req.body;

    // 1. Save in MongoDB
    const customer = new Customer({ name, phone, email, service, message });
    await customer.save();

    // 2. Send email notification
    await transporter.sendMail({
      from: `"UGU Services" <${email}>`,
      to: 'akhtartanoli23@gmail.com', // your business email
      subject: `New Contact Request from ${name}`,
      html: `
        <h2>New Contact Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong> ${message || "No message"}</p>
      `,
    });

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
  res.send('helloe vercel')
}
module.exports = {
    submitContact , name
}