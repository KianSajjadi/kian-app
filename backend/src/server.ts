import "reflect-metadata";
import express from "express";
import router from "./routes/router"
import {createConnection} from "typeorm";
import cors from "cors";

const app = express();

createConnection().then(async connection => {
}).catch(error => console.log(error));

app.use(cors());
app.use("/", router);
app.use("/test", router);

app.listen(8000, () => {
    console.log("App listening at http://localhost:8000");
});