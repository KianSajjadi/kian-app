import express from "express";
import router from "./routes/router"
import cors from "cors";
const app = express();

app.use(cors());
app.use("/", router);
app.use("/test", router);

app.listen(8000, () => {
    console.log("App listening at http://localhost:8000");
}); 