const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');
require('dotenv').config();

const auth = {
    auth:{
        api_key: process.env.API_KEY,
        domain: process.env.DOMAIN
    }
};

const transporter = nodemailer.createTransport(mailGun(auth));

const mailsend = (to,html)=>{
    const mailOptions={
        from:'anurag@anuragraghav.me',
        to: to,
        subject: 'testing',
        html:html
    };
    transporter.sendMail(mailOptions,(err,data)=>{
        if(err){
            console.log(err);
        }else{
            console.log('mail sent');
        }
    })
}

module.exports = mailsend;

