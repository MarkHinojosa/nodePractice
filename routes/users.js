import express from "express";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();

const users = [];

router.get("/users", (req, res) => {
    console.log(users);
    res.send(users);
});

router.post("/users", (req, res) => {
    const user = req.body;
    const uniqueUserId = uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
    let userObjectWithId = { ...user, id: uniqueUserId };

    users.push(userObjectWithId);
    console.log(userObjectWithId);
    res.send(
        `User with the name ${userObjectWithId.firstName} added to the database!`
    );
});

export default router;
