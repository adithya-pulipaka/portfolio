import * as sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default function handler(req, res) {
  const msg = req.body;
  sgMail
    .send(msg)
    .then(() => {
      res.status(200).json({ message: "Success" });
    })
    .catch((error) => {
      res.status(400).json({ message: "Failure" });
    });
}
