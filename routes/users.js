import express from "express";
import {
    getUsers,
    generateUUID,
    deleteUser,
    patchUser,
} from "../controllers/users.js";

const router = express.Router();

router.get("/", getUsers);

router.post("/", generateUUID);

router.delete("/:id", deleteUser);

router.patch("/:id", patchUser);

export default router;

// "firstName":"Jane",
// "lastName": "Doe",
// "age": 14
