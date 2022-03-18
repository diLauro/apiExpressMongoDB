import mongoose from "mongoose";

mongoose.connect("mongodb+srv://gonzo:123@cluster0.or4en.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;
