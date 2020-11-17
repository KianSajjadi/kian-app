import express from "express";
import index_router from "./routes/index_router";

const app = express();


app.use("/", index_router);

app.listen(8000, () => {
    console.log("App listening at http://localhost:8000");
});