import express from "express";

var router = express.Router();

router.get("/", (req, res) => {
    res.send("Chungus Bungus Index Pagus")
});

export = router;