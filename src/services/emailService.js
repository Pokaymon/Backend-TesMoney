import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: 'sandbox.smtp.mailtrap.io',
    port: 2525,
    auth: {
        user: '91409375bbec8b',
        pass: '65c7e62e017c60'
    }
});

export const sendVerificationEmail = async (email, token) => {
    const verificationLink = `https://tesmoney.ddnsfree.com/api/auth/verify-email?token=${token}`;

    const info = await transporter.sendMail({
        from: '"TesMoney" <tesmoney@gmail.com>',
        to: email,
        subject: 'Verifica tu correo electrónico',
        html: `<p>Haz clic en el siguiente enlace para verificar tu cuenta:</p>
               <a  href="${verificationLink}">${verificationLink}</a>`
    });
    console.log('Correo enviado: %s', info.messageId);
}
