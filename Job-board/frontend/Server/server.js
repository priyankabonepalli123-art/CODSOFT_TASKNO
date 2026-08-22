const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

/* MongoDB Connection */

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((error) => {
    console.log("MongoDB connection error:", error.message);
  });


/* USER MODEL */

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);


/* JOB MODEL */

const jobSchema = new mongoose.Schema({
  title: String,
  company: String,
  location: String,
  type: String,
  salary: String,
  category: String,
  description: String,
  skills: [String],
});

const Job = mongoose.model("Job", jobSchema);


/* APPLICATION MODEL */

const applicationSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  jobId: String,
  coverLetter: String,
  appliedAt: {
    type: Date,
    default: Date.now,
  },
});

const Application = mongoose.model(
  "Application",
  applicationSchema
);


/* HOME ROUTE */

app.get("/", (req, res) => {
  res.json({
    message: "JobBoard API is running",
  });
});


/* SIGN UP */

app.post("/api/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "Email already registered",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      name,
      email,
      password: hashedPassword,
    });

    await user.save();

    res.status(201).json({
      message: "Account created successfully",
    });

  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});


/* LOGIN */

app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "Invalid email or password",
      });
    }

    const passwordMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!passwordMatch) {
      return res.status(400).json({
        message: "Invalid email or password",
      });
    }

    res.json({
      message: "Login successful",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });

  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});


/* GET ALL JOBS */

app.get("/api/jobs", async (req, res) => {
  try {
    const jobs = await Job.find().sort({
      _id: -1,
    });

    res.json(jobs);

  } catch (error) {
    res.status(500).json({
      message: "Unable to fetch jobs",
    });
  }
});


/* POST JOB */

app.post("/api/jobs", async (req, res) => {
  try {
    const job = new Job(req.body);

    await job.save();

    res.status(201).json({
      message: "Job posted successfully",
      job,
    });

  } catch (error) {
    res.status(500).json({
      message: "Unable to post job",
    });
  }
});


/* APPLY FOR JOB */

app.post("/api/applications", async (req, res) => {
  try {
    const application = new Application(req.body);

    await application.save();

    res.status(201).json({
      message: "Application submitted successfully",
    });

  } catch (error) {
    res.status(500).json({
      message: "Unable to submit application",
    });
  }
});


/* SERVER */

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`JobBoard server running on port ${PORT}`);
});