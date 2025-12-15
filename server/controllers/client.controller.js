const ClientRequirement = require("../models/ClientRequirement");

exports.submitRequirement = async (req, res) => {
  try {
    const data = await ClientRequirement.create(req.body);
    res.status(201).json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
