const router = require("express").Router();
const Part = require("../models/partModel");

router.get("/parts", async (req, res) => {
  try {
    const parts = await Part.find();
    res.json(parts);
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

router.post("/parts", async (req, res) => {
  try {
    const { name, images, retailers, type } = req.body;

    const newPart = new Part({
      name,
      images,
      retailers,
      type,
    });

    const savedPart = await newPart.save();

    res.json(savedPart);
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

module.exports = router;
