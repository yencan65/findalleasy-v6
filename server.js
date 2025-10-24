import express from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();

app.use(cors());
app.use(express.json());

// ---- Mongo bağlan ----
const MONGODB_URI = process.env.MONGODB_URI || "";
if (MONGODB_URI) {
  mongoose.connect(MONGODB_URI)
    .then(()=>console.log("✅ MongoDB bağlandı"))
    .catch(err=>console.error("❌ MongoDB hata:", err.message));
} else {
  console.warn("⚠️ MONGODB_URI .env'de tanımlı değil. (Geliştirme için devam ediliyor.)");
}

// ---- Basit API örnekleri ----
app.get("/api/health", (req,res)=>res.json({ok:true, time:new Date()}));

// Vitrin akıllı öneri (IP/dil/placeholders temelli yalın demo)
app.post("/api/suggestions", (req,res)=>{
  const { locale="en", topic } = req.body || {};
  const byLocale = {
    tr:["Bilet","Otel","Sigorta","Yemek"],
    de:["Tickets","Hotels","Versicherung","Essen"],
    ar:["تذاكر","فنادق","تأمين","طعام"],
    zh:["机票","酒店","保险","美食"],
    en:["Tickets","Hotels","Insurance","Food"]
  };
  const items = byLocale[locale] || byLocale.en;
  res.json({items, topic});
});

// ---- Frontend build'i serve et ----
app.use(express.static(path.join(__dirname, "frontend", "dist")));
app.get("*", (req,res)=>{
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, ()=>console.log(`🚀 Server ${PORT} portunda`));
