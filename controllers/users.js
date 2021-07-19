var users = [];
import { v4 as uuidv4 } from "uuid";

export const getUsers = (req, res) => {
    res.send(users);
};

export const generateUUID = (req, res) => {
    const user = req.body;
    const uniqueUserId = uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
    let userObjectWithId = { ...user, id: uniqueUserId };

    users.push(userObjectWithId);
    console.log(userObjectWithId);
    res.send(
        `User with the name ${userObjectWithId.firstName} added to the database!`
    );
};

export const deleteUser = (req, res) => {
    console.log(req.params.id, " delete request for id ");
    const { id } = req.params;
    console.log(`trying to find user ${id}`);
    const newUsersObject = users.filter((user) => user.id != id);
    users = newUsersObject;
    console.log(users, "new user object");
    res.send(users);
};

export const patchUser = (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;
    let user = users.find((user) => user.id == id);
    firstName ? (user.firstName = firstName) : null;
    lastName ? (user.lastName = lastName) : null;
    age ? (user.age = age) : null;
    console.log(users);
    res.send(users);
};
