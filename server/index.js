import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import { connectDb } from './Database/db.js';
import Razorpay from 'razorpay';
import cors from 'cors';

export const instance=new Razorpay({
    key_id:process.env.Razorpay_key,
    key_secret:process.env.Razorpay_secret,
})

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("Server is Working");
});

app.use("/uploads",express.static("uploads"));

//importing routes
import userRoutes from "./routes/user.js";
import courseRoutes from "./routes/course.js";
import adminRoutes from "./routes/admin.js";

//using routes
app.use("/api",userRoutes);
app.use("/api",courseRoutes);
app.use("/api",adminRoutes);


const startServer = async () => {
    await connectDb();

    app.listen(port, () => {
        console.log(`✅ Server is running at: http://127.0.0.1:${port}`);

    });
};
startServer();

