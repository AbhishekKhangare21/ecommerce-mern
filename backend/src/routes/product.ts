import express from "express";
import { adminOnly } from "../middlewares/auth.js";

const app = express.Router();

//To Create New Product - api/v1/product/new
app.post("/new", adminOnly);
