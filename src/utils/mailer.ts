import nodemailer from "nodemailer"
import bcryptjs from "bcryptjs";
import User from '@/models/adminModels'


export const sendEmail = async ({ email, emailType, userId }:any) => {
  try {
    // TODO: configure mail for usage

    const  hashedToken = await bcryptjs.hash(userId.toString(),10)

    if(emailType === "VERIFY") {
      await User.findByIdAndUpdate(userId,
        {verifyToken: hashedToken, verifyTokenExpiry: Date.now() + 3600000}
      )
    } else if(emailType === "RESET") {
        await User.findByIdAndUpdate(userId,
        {forgotPasswordToken: hashedToken, forgotPasswordTokenExpiry: Date.now() + 3600000})
      }

    var transport = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "5ca229f17dd739",
        pass: "dfba8c96f08376",
      },
    });

    const mailOptions = {
      from: "Shivam@gmail.com", // sender address
      to: email, // list of receivers
      subject:
        emailType === "VERIFY" ? "Verify your email" : "reset your password", // Subject line
      text: "Hello world?", // plain text body
      html: `<p>
    Click <a href="${process.env.DOMAIN}/verifyemail?token=${hashedToken}" target="_blank" rel="noopener noreferrer">Here</a> to ${
      emailType === "VERIFY" ? "verify your email" : "reset your password"
    } or copy and paste the link below in your browser
    <br> ${process.env.DOMAIN}/verifyemail?token=${hashedToken}
   </p>`, // html body
    };
    

    const mailResponse = await transport.sendMail(mailOptions);
  } catch (error:any) {
    throw new
    
    Error(error.message)
  }
};