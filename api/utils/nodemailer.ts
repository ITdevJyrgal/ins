export {}
const nodemailer = require('api/utils/nodemailer');
const transporter = nodemailer.createTransport(
    {
     service: 'gmail',
     auth: {
       user: 'khanhhoatest@gmail.com',
       pass: 'sax5101997'
     }
    }
 )

exports.sendEmail = async (email:string, token:string) => {
    let mailOptions = {
        from: '"Margetsni 👻" <khanhhoatest@gmail.com>', // sender address
        to: email, // list of receivers
        subject: 'Account Verification Token', // Subject line
        text: 'Hello my friend',
        html: '<b>verify your account</b>'
            + ' <br/>'
            + '<span>Please verify your account by clicking the link</span>'
            + '<br/>'
            + '<span>http://localhost:3000/confirm/' + token +  '</span>'
    };
    try{
        let send = await transporter.sendMail(mailOptions);
    }
    catch(err){
        console.log(err);
        return false;
    }
    return true;
}

exports.sendEmailForgotPassword = async (email:string, token:string) => {
    let mailOptions = {
        from: '"Margetsni 👻" <khanhhoatest@gmail.com>', // sender address
        to: email, // list of receivers
        subject: 'Forgot password Verification Token', // Subject line
        html: '<b>Forgot password</b>'
            + ' <br/>'
            + '<span>Please enter OTP below</span>'
            + '<br/>'
            + '<span>' + token +  '</span>'
    };
    try{
        let send = await transporter.sendMail(mailOptions);
    }
    catch(err){
        console.log(err);
        return false;
    }
    return true;
}
