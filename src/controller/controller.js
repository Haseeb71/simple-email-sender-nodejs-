const express = require("express");
var nodemailer = require("nodemailer");

const sendEmail = async (req,res)=>{
    const {
        name,
        email,
        message
    } = req.body
    console.log(req.body);
    var transport = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "cb7f73e0792bf4",
          pass: "f5d4f1960c87be"
        }
      });

      let mailOptions1 = {
        from: "saba@gmail.com", 
        to: email,
        bcc: "sales@hysolis.com",
        subject: `Contact Us Form`, 
        html: `<h4>Name : ${name } </h4>
        <p>${message}</p>`,
      };
    
      transport.sendMail(mailOptions1, (error, info) => {
        if (error) {
          console.log("error", error);
          res.status(500).send({ message: "No recipients defined" });
        } else {
          res.status(200).json({
            success: true,
            response: info.response,
          });
        }
      });
}

module.exports = {sendEmail};