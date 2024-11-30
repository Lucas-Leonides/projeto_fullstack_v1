import express from "express";
import GeneralNotice from "../models/GeneralNotice.js";

const router = express.Router();

router.get("/", async (req, res) => {
    const notices = await GeneralNotice.find();
    res.status(200).json(notices);
});

router.post("/", async (req, res) => {
    const newNotice = await GeneralNotice.create(req.body);
    res.status(201).json(newNotice);
});

export default router;
