 import express from'express';
 import cookieParser from 'cookie-parser';
 import postRoutes from './routes/post.js';
 import userRoutes from './routes/users.js';
 import authRoutes from './routes/auth.js';
  import cors from 'cors';
  import multer from "multer";
  const app = express();

 app.use(cors({
  origin: 'http://localhost:3000', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'], 
  credentials: true, 
}));
app.use(express.json());
app.use(cookieParser())
app.use(cookieParser());
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../client/bloger/public/upload");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage });

app.post("/api/upload", upload.single("file"), function (req, res) {
  const file = req.file;
  res.status(200).json(file.filename);
});
app.use('/api/posts',postRoutes);
app.use('/api/user',userRoutes);
app.use('/api/auth',authRoutes);




app.listen(5000,()=>{
    console.log('connected')
})