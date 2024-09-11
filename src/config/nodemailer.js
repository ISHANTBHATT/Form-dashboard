import nodemailer from "nodemailer";

const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;
const homail = process.env.HEADOFFICE_MAIL;
export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass,
  },
});

// export const mailOptions = () => ({
//   from: email,
//   to: [email, proposeremail, seconderemail].filter(Boolean).join(","), // This ensures that only non-empty emails are joined
// });
export const mailOptions = {
  from: email,
  to: [email, homail].filter(Boolean).join(","),
};
