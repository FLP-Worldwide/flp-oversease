const mongoose = require("mongoose");

const ClientRequirementSchema = new mongoose.Schema(
  {
    companyName: String,
    country: String,
    jobRole: String,
    workersRequired: Number,
    contactPerson: String,
    phone: String,
    email: String,
    message: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("ClientRequirement", ClientRequirementSchema);
