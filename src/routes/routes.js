import express from "express";
import { EventModel } from "../models/Event.js";
import { RegisterModel } from "../models/Register.js";

const router = express.Router();

router.post("/event", async (req, res) => {
  try {
    const { event, name, regno, branch, feedback } = req.body;

    const newFeedback = new EventModel({
      event,
      name,
      regno,
      branch,
      feedback,
    });

    await newFeedback.save();

    return res.status(201).json({message:"Feedback Submitted"})
  } catch (err) {
    return res.status(400).json({message:err.message});
  }
});

router.post("/register", async (req, res) => {
    try {
      const {  name, regno, branch, skills,reason } = req.body;
  
      const newRegistration = new RegisterModel({  name, regno, branch, skills,reason });
  
      await newRegistration.save();
  
      return res.status(201).json({message:"Registration Complete"})
    } catch (err) {
      return res.status(400).json({message:err.message});
    }
  });

export {router as formRouter}
