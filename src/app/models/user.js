// import mongoose from "mongoose";
const { Schema, models, model } = require("mongoose");
const AdminSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  region: {
    type: String,
    required: true,
  },
});

// const Admin = mongoose.models.Admin || mongoose.model("Admin", AdminSchema);
// export const Admin = models.Form || model("Form", AdminSchema, "Admin");
// export default Admin;

export const Admin = models.Admin || model("Admin", AdminSchema, "Admin");
