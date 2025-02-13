import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app= express();

app.use(
    cors({
      origin: "http://localhost:5173",
      methods: ["GET", "POST", "DELETE", "PUT"],
      allowedHeaders: [
        "Content-Type",
        "Authorization",
        "Cache-Control",
        "Expires",
        "Pragma",
      ],
      credentials: true,
    })
  );

app.get('/',(req,res)=>{
    res.send("started server")
});

const PORT= process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log("server started in http://localhost:3000")
});