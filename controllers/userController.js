import jwt from 'jsonwebtoken';
import { users, userTokens } from '../db.js'

const addUser = (req, res) => {
    const {id, username, password} = req.body;
    if (!id || !username || !password) {
        res.status(401).send('You must provide id, username and password');
        return;
    }

    if (users.some((u) => u.id == id || u.username == username)) {
        res.status(401).send('Already exist a user with that id or username.')
        return;
    }

    users.push({id, username, password});
    console.log(users);
    res.status(201).send('User successfully added');
};

const login = (req, res) => {
    if (!req.body.password || !req.body.username) {
        res.status(400).send('You need a username and password');
        return;
    }
  
    const user = users.find((u) => u.username === req.body.username);
    if (!user) {
        res.status(401).send('User not found with that username');
        return;
    } else if (user.password !== req.body.password) {
        res.status(404).send('User not found with that password');
        return;
    }
  
    const token = jwt.sign({
        sub: user.id,
        username: user.username
    }, "mysupersecretkey", { expiresIn: "3 hours"});
  
    userTokens[user.username] = token;
    console.log(userTokens);
    res.status(200).json({ access_token: token });
};

const logout = (req, res) => {
    const { username } = req.body;
  
    userTokens[username] = ""
    console.log(userTokens);
    res.status(200).send('User logout successfully');
};

export { addUser, login, logout };