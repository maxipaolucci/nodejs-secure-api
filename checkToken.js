import { users, userTokens } from './db.js'

const checkToken = (req, res, next) => {
    const authHeader = req.headers.authorization;
    const { username } = req.body;

    if (userTokens[username] != authHeader.substring(7, authHeader.length)) {
        res.status(401).send('Invalid token');
        return;
    }

    console.log('valid token');
    next();
};

export { checkToken };