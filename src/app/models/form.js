const { Schema, models, model } = require("mongoose");

const FormSchema = new Schema(
  {
    name: { type: String, required: true },
    date: { type: Date, required: true },
    address: { type: String, required: true },
    number: { type: Number, required: true },
    telnumber: { type: String, required: true },
    email: { type: String, required: true },
    hoaddress: { type: String, required: true },
    gstin: { type: String, required: true },
    iata: { type: String, required: true },
    iatanumber: { type: String, default: "" },
    iatadate: { type: Date, default: "" },
    proposerName: { type: String, required: true },
    proposeremail: { type: String, required: true },
    seconderName: { type: String, required: true },
    seconderemail: { type: String, required: true },
    region: { type: String, required: true },
    verified: { type: Boolean, default: false },
    verifiedByProposeremail: { type: Boolean, default: false },
    verifiedBySeconderemail: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const Form = models.Form || model("Form", FormSchema, "Formtest");
