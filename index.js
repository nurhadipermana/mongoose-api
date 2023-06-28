import express from "express";
import mongoose from "mongoose";
import userRoute from "./routes/index.mjs";
import cors from "cors";

const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/fullstack_mongoose", {
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Database Connected"));

// middleware
app.use(cors());
app.use(express.json());

// router
app.use("/users", userRoute);

app.listen("4000", () => console.log("Server Running at Port: 4000"));
