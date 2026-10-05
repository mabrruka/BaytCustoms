const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 5001;

// =========================
// MIDDLEWARE
// =========================

app.use(
    cors({
        origin: "http://localhost:5173",
    })
);

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// =========================
// FILE UPLOAD CONFIGURATION
// =========================

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, "uploads"));
    },

    filename: function (req, file, cb) {
        const timestamp = Date.now();
        const safeOriginalName = file.originalname.replace(
            /[^a-zA-Z0-9.-]/g,
            "_"
        );

        cb(
            null,
            `${timestamp}-${safeOriginalName}`
        );
    },
});

const upload = multer({
    storage,

    limits: {
        fileSize: 10 * 1024 * 1024,
    },

    fileFilter: function (req, file, cb) {
        const allowedTypes = [
            "image/jpeg",
            "image/png",
            "application/pdf",
        ];

        if (allowedTypes.includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb(
                new Error(
                    "Only JPG, PNG, and PDF files are allowed."
                )
            );
        }
    },
});

// =========================
// TEST ROUTE
// =========================

app.get("/", (req, res) => {
    res.json({
        message: "Bayt Customs backend is running.",
    });
});

// =========================
// PROJECT SUBMISSION ROUTE
// =========================

app.post(
    "/api/project-submission",
    upload.single("projectFile"),
    async (req, res) => {
        try {
            console.log("New project submission received.");

            console.log("Form data:");
            console.log(req.body);

            if (req.file) {
                console.log("Uploaded file:");
                console.log(req.file);
            }

            res.status(200).json({
                success: true,
                message:
                    "Project specification received successfully.",
            });
        } catch (error) {
            console.error(
                "Project submission error:",
                error
            );

            res.status(500).json({
                success: false,
                message:
                    "Something went wrong while processing the project submission.",
            });
        }
    }
);

// =========================
// ERROR HANDLER
// =========================

app.use((error, req, res, next) => {
    console.error(error);

    if (error instanceof multer.MulterError) {
        if (error.code === "LIMIT_FILE_SIZE") {
            return res.status(400).json({
                success: false,
                message:
                    "The uploaded file is too large. Maximum size is 10MB.",
            });
        }

        return res.status(400).json({
            success: false,
            message: error.message,
        });
    }

    if (error) {
        return res.status(400).json({
            success: false,
            message: error.message,
        });
    }

    next();
});

// =========================
// START SERVER
// =========================

app.listen(PORT, () => {
    console.log(
        `Bayt Customs backend running at http://localhost:${PORT}`
    );
});