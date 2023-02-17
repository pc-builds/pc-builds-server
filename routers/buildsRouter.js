const router = require("express").Router();
const Build = require("../models/buildModel");

router.get("/builds", async (req, res) => {
  try {
    const builds = await Build.find().populate("parts");
    res.json(builds);
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

router.post("/builds", async (req, res) => {
  try {
    const { name, tier, type, parts, images } = req.body;

    const newBuild = new Build({
      name,
      tier,
      type,
      parts,
      images,
    });

    const savedBuild = await newBuild.save();

    res.json(savedBuild);
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

module.exports = router;
