const express = require("express");
const path = require("path");
const multer = require("multer");
const fs = require("fs");

const uploadDir = path.join(__dirname, '..', '..', 'public', 'uploads');

// Buat folder 'uploads' jika belum ada
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
    console.log("Folder 'uploads' telah dibuat.");
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        const filename = Date.now() + path.extname(file.originalname);
        cb(null, filename);
    },
});
const upload = multer({ storage });

const { createProduct } = require("./product.service");
const router = express.Router();

router.post("/", upload.single("image"), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).send({ message: "No image uploaded" });
        }

        const newProductData = {
            ...req.body,
            image: req.file.filename,
        };

        const product = await createProduct(newProductData);
        res.status(200).send({ data: product, message: "Success upload" });
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
});

module.exports = router;
