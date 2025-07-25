import {instance} from "../index.js";
import TryCatch  from "../middleware/TryCatch.js";
import {Courses} from "../models/Courses.js";
import {Lecture} from '../models/Lecture.js';
import {User} from '../models/User.js';
import crypto from "crypto";
import {Payment} from '../models/Payment.js'


export const getAllCourses=TryCatch(async (req, res) => {
    const courses = await Courses.find();
    res.json({
        courses,
    });
});

export const getSingleCourse = TryCatch(async (req, res) => {
    const course = await Courses.findById(req.params.id)
    res.json({ course });
});


export const getAllLectures=TryCatch(async (req, res) => {
    const lectures=await Lecture.find({course:req.params.id});

    const user=await User.findById(req.user._id)

    if(user.role==="admin"){
        return res.json({lectures});
    }
    if(!user.subscription.includes(req.params.id)){
        return res.status(400).json({
            message:"You have not subscribed to this course",
        });
    }
    res.json({lectures});
});

export const getAllLecture=TryCatch(async (req, res) => {
    const lecture=await Lecture.findById(req.params.id);

    const user=await User.findById(req.user._id)

    if(user.role==="admin"){
        return res.json({lecture});
    }
    if(!user.subscription.includes(lecture.course)){
        return res.status(400).json({
            message:"You have not subscribed to this course",
        });
    }
    res.json({lecture});

});

export const getMyCourses=TryCatch(async (req, res) => {
    const courses=await Courses.find({_id:req.user.subscription});

    res.json({
        courses,
    });
});

export const checkout = TryCatch(async (req, res) => {
    const user=await User.findById(req.user._id);

    const course=await Courses.findById(req.params.id);

    if(user.subscription.includes(course._id)){
        return res.status(400).json({
            message:"You already have this course",
        });
    }
    const options= {
        amount:Number(course.price *100),
        currency:"INR",
    };
    const order=await instance.orders.create(options);

    res.status(201).json({
        order,
        course,
    });
});

export const paymentVerification=TryCatch(async (req, res) => {
    const{razorpay_order_id,
    razorpay_payment_id,
    razorpay_signature} =req.body;

    console.log("💳 Payment details received:", req.body);

    const body=razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSignature=crypto.createHmac("sha256",process.env.RAZORPAY_SECRET)
    .update(body)
    .digest("hex");

    const isAuthentic=expectedSignature === razorpay_signature;

    if(isAuthentic){
        await Payment.create({
            razorpay_order_id, razorpay_payment_id, razorpay_signature,
        });
        const user=await User.findById(req.user._id);

        const course=await Courses.findById(req.params.id);
        user.subscription.push(course._id);

        await user.save();
        res.redirect(`http://localhost:5173/payment-success/${razorpay_payment_id}`);



    }else{
        res.status(400).json({
            message:"Payment Failed",
        })
    }
})
