import express from 'express'

import expressjwt from 'express-jwt';
import { checkToken } from '../checkToken.js';
import * as userController from '../controllers/userController.js'

const jwtCheck = expressjwt({
  secret: "mysupersecretkey"
});
const router = express.Router();

router.post('/user', userController.addUser);

router.post("/login", userController.login);

router.post('/logout', jwtCheck, checkToken, userController.logout);

export { router };
