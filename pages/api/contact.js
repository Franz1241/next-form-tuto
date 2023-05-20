const nodemailer = require("nodemailer");


export default async function handler(req, res) {
  const {name,email,message} = req.body;
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email', 
    port: '587',
    secure: false, // true for 465, false for other ports
    auth: {
        user: 'salma20@ethereal.email', // ethereal user
        pass: 'eMny7a517fEKhzQPQq', // ethereal password
    },
    });

  const msg = {
    from: '"Test Me" <test@mail.com>', // sender address
    to: `${email}`, // list of receivers
    subject: 'Confirmation Message!', // Subject line
    text: ` Hey ${name}, thanks you for sending this message:\n ${message}`, // plain text body
}
// send mail with defined transport object
const info = await transporter.sendMail(msg);

console.log("Message sent: %s", info.messageId);
// Expected output: Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

// Preview only available when sending through an Ethereal account
console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
// Expected output: Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...


  res.status(200).json(req.body)

}
