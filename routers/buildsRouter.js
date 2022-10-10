
const router = require("express").Router();
const Build = require("../models/buildModel");

router.get("/", async (req, res) => {
    try {
      const builds = await Build.find();
      res.json(builds);
    } catch (err) {
      console.error(err);
      res.status(500).send();
    }
  });

  module.exports = router;