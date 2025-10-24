import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';
import morgan from 'morgan';
import mongoose from 'mongoose';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

const MONGODB_URI = process.env.MONGODB_URI || '';
if (MONGODB_URI) {
  mongoose.connect(MONGODB_URI).then(()=>console.log('✅ MongoDB Connected')).catch(err=>console.error('MongoDB error:',err.message));
}

app.get('/api/health', (req,res)=>res.json({ok:true}));
app.get('/api/trending', (req,res)=>{
  res.json({
    items: [
      { _id:1, title:"Hotel Deals", price:99, currency:"USD" },
      { _id:2, title:"Fashion Trends", price:49, currency:"USD" },
      { _id:3, title:"Flights", price:199, currency:"USD" }
    ]
  });
});

const distDir = path.join(__dirname, 'frontend', 'dist');
app.use(express.static(distDir));
app.get('*', (req, res) => res.sendFile(path.join(distDir, 'index.html')));

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>console.log(`🚀 Server running on http://localhost:${PORT}`));
