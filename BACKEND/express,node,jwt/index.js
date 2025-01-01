import 'dotenv/config'
import express from 'express';
import morgan from "morgan"

const app = express();

//middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

//routes
app.use('/', publicRouter)
app.use('/api/v1/users', userRouter)
app.use('/api/v1/pets', petRouter)



//port
app.listen(() => {
    console.log(`Server is running on port ${process.env.PORT} , http://localhost:${process.env.PORT}`);
})