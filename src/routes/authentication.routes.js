import express from "express";
import {
  loginUserAuth,
  registerUserAuth,
} from "../controllers/authentication.controller.js";

const router = express.Router();

router.post("/registerUser", registerUserAuth);
router.post("/loginUser", loginUserAuth);

export default router;
