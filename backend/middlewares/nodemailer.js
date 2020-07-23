const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL, // TODO: your gmail account
        pass: process.env.PASSWORD // TODO: your gmail password
    }
});

const sendNodeMail = (email, subject, msg) => {
    //La función recibe por parámetros los datos a llenar en el correo
    const mailOptions = {
        from: process.env.EMAIL, // email sender
        to: email, // email receiver
        subject: subject,
        html: `
            <div>
               <img src='https://i.pinimg.com/originals/8d/1b/49/8d1b4901f95dfcb9c4c835bcf35c66a3.gif' alt="...">
                <h1>
                    ${msg}
                </h1>
                <h3> Te damos la Bienvenida a Asturias Foods & Drinks </h3>
              
                <p> Pedí online de manera fácil, práctica y sin costo adicional. </p>
            </div>
        ` // html body | contenido del mail
    };

    return transporter.sendMail(mailOptions);
};

module.exports = sendNodeMail;