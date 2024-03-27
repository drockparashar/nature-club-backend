import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { formRouter } from "./src/routes/routes.js";

const app=express();

app.use(express.json());
app.use(cors());

app.use("/main",formRouter)

mongoose.connect("mongodb+srv://pranshu007parashar:4BtE1A6sirUthuZO@cluster0.ueklcrz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        .then(()=>console.log("Connected to database"))
        .catch(()=>console.log("Could not connect"))

app.listen(3001, ()=>console.log("server started"));