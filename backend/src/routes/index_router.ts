import express from "express";

var index_router = express.Router();

index_router.get("/", (req, res) => {
    res.send("Chungus Bungus Index Pagus")
});

export = index_router;