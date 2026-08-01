import express from 'express'
import cors from 'cors'
import adminRoutes from './routes/adminRoutes.js';
import appRoutes from './routes/appRoutes.js';
import cookieParser from "cookie-parser";
const app=express()

app.use(
  cors({
    origin: "http://localhost:5173",
     credentials: true,
  })
);
app.use(cookieParser()); 
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/admin',adminRoutes)
app.use('/app',appRoutes)

export default app