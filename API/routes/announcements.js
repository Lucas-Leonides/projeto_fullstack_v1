import express from "express";
import Announcement from "../models/Announcement.js";

const router = express.Router();

router.get("/", async (req, res) => {
    const announcements = await Announcement.find();
    res.status(200).json(announcements);
});

router.post("/", async (req, res) => {
    const newAnnouncement = await Announcement.create(req.body);
    res.status(201).json(newAnnouncement);
});

export default router;
