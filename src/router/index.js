import { Router } from "express";

const router = new Router();

router.get("/", (req, res) => {
  res.json({ messsage: "Hi the server is on air" });
});

export default router;
