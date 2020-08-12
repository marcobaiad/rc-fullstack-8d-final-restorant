require('dotenv').config()
const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const OAuth2 = google.auth.OAuth2;

const oauth2Client = new OAuth2(
    process.env.CLIENTE_ID_G,
    process.env.CLIENTE_SECRET_G, // Client Secret
    process.env.REDIRECT_URL_G // Redirect URL
);

oauth2Client.setCredentials({
    refresh_token: process.env.REFRESH_TOKEN_G
});

const accessToken = oauth2Client.getAccessToken()

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: "smtp.gmail.com",
  port: 465,
  secure: false, // upgrade later with STARTTLS
  auth: {
    type: "OAuth2",
    user: process.env.EMAIL, 
    clientId: process.env.CLIENTE_ID_G,
    clientSecret: process.env.CLIENTE_SECRET_G,
    refreshToken: process.env.REFRESH_TOKEN_G,
    accessToken: accessToken
  }
});

const SendRecoveryPassEmail = (email, subject, msg, tokenRecovery) => {
  //La función recibe por parámetros los datos a llenar en el correo
  const mailOptions = {
    from: `Asturias F & D <${process.env.EMAIL}>`, // email sender
    to: email, // email receiver
    subject: subject,
    html: `
            <div>
                  <h1 style='text-align: center'>${msg}</h1>
                <div style='display: flex; justify-content: center;'>
                     <img src='https://image.freepik.com/vector-gratis/ilustracion-concepto-olvide-contrasena_114360-1095.jpg' alt="..." style='margin: auto; height: 150px; margin-top: 20px; margin-bottom: 20px;'>
                </div>
                <div>
                    <div style='display: flex; justify-content: center; margin-left: 150px'>
                       <div>
                            <h2 style='margin-left: 180px; margin-bottom: 30px'>Haz Click en el Siguiente Boton</h2>
                            <a style='margin-left: 235px; padding: 15px; background-color: red; color: white; text-decoration: none' href="${process.env.FRONTEND_BASE_URL}/recoverpass/${tokenRecovery}" >Ir A Recuperar Contraseña</a>
                       </div>
                    </div>
                </div>
                 <div>
                        <h3 style='text-align: center; margin-top: 30px'>
                            ¡Estamos Para Ayudarte! <br>
                            El equipo de Asturias F & D 
                        </h3>
                 </div>
              </div>
            </div>    
        ` // html body | contenido del mail
  };
  return transporter.sendMail(mailOptions);
};
module.exports = SendRecoveryPassEmail;