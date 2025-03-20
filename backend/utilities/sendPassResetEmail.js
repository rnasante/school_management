import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

export const tempPassResetEmail = async (email, tempPassword) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_FROM,
            pass: process.env.EMAIL_FROM_PASSWORD
        }
    });

    const mailOptions = {
        from: process.env.EMAIL_FROM,
        to: email,
        subject: 'Your School Account Has Been Created',
        text: `Dear Teacher,

An account has been created for you.

Temporary Password: ${tempPassword}

Please log in at: https://school.com/login
and reset your password.

Regards,
School Management`
    };


    await transporter.sendMail(mailOptions);
};

// import postmark from 'postmark';

// const client = new postmark.ServerClient(process.env.POSTMARK_API_KEY);

// const sendTempPasswordEmail = async (email, tempPassword) => {
//     await client.sendEmail({
//         From: process.env.EMAIL_USER,
//         To: email,
//         Subject: 'Your Temporary Password',
//         TextBody: `Dear User,

// A temporary password has been assigned to your account.

// Temporary Password: ${tempPassword}

// Please log in and reset your password immediately.

// Login here: https://school.com/login

// Regards,
// School Management`,
//         HtmlBody: `<p>Dear User,</p>
//                    <p>A temporary password has been assigned to your account:</p>
//                    <h3>${tempPassword}</h3>
//                    <p>Please log in and reset your password immediately.</p>
//                    <a href="https://school.com/login">Login Here</a>
//                    <p>Regards,<br>School Management</p>`
//     });
// };
