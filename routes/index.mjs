import express from "express";
import {
  deleteUser,
  getUserById,
  getUsers,
  saveUser,
  updateUser,
} from "../controller/UserController.mjs";

const router = express.Router();

// GET
router.get("/", getUsers);

// GET by id
router.get("/:id", getUserById);

// POST
router.post("/", saveUser);

// PATCH
router.patch("/:id", updateUser);

// DELETE by id
router.delete("/:id", deleteUser);

export default router;
