require("dotenv").config();
const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

const resumeRoutes = require("./routes/resume.routes");
const clientRoutes = require("./routes/client.routes");
const jobRoutes = require("./routes/job.routes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// DB
connectDB();

// Routes
app.use("/api/resume", resumeRoutes);
app.use("/api/client", clientRoutes);
app.use("/api/jobs", jobRoutes);

// Health check
app.get("/health", (_, res) => {
  res.json({ status: "OK", service: "Overseas Portal API" });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () =>
  console.log(`🚀 Express running on http://localhost:${PORT}`)
);
