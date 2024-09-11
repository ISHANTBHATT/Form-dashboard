import { mongooseconnect } from "../../app/lib/mongoose";
import { Form } from "../../app/models/form";

export default async function handle(req, res) {
  const { method } = req;
  await mongooseconnect();
  if (method === "GET") {
    if (req.query?.id) {
      const form = await Form.findById(req.query.id);
      res.json(form);
    } else if (req.query?.name) {
      const cate = await Form.find({
        name: req.query.name,
      });
      res.json(cate.reverse());
    } else if (req.query?.email) {
      const email = await Form.find({
        email: req.query.email,
      });
      res.json(email.reverse());
    } else {
      const forms = await Form.find();
      res.json(forms.reverse());
    }
  } else if (method === "DELETE") {
    if (req.query?.id) {
      await Form.deleteOne({ _id: req.query?.id });
      res.json(true);
    }
  } else if (method === "PUT") {
    const { verified } = req.body;
    const _id = req.query?.id;
    await Form.updateOne({ _id }, { verified });
    res.json(true);
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
