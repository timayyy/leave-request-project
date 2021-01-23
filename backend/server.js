import express from 'express'
import dotenv from 'dotenv'

import connectDB from "./config/db.js";
import colors from "colors";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config()

connectDB();

import leaveRequestRoutes from "./routes/leaveRequestRoutes.js";
import userRoutes from "./routes/userRoutes.js";

const app = express()

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Api running....')
})

app.use('/api/leaverequest', leaveRequestRoutes)
app.use('/api/users', userRoutes)


app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT || 5555

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold))