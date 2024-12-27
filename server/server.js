import express from 'express'






const app = express();
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}))

app.use(express.json())

app.use('/auth',authRoutes);// depends on routes


app.listen(process.env.PORT,()=> {
  console.log(`server is running on port ${process.env.PORT}`)
})