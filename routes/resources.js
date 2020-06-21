import express from 'express'
import expressjwt from 'express-jwt';
import { checkToken } from '../checkToken.js';
import * as resourceController from '../controllers/resourceController.js'

const jwtCheck = expressjwt({
  secret: "mysupersecretkey"
});
const router = express.Router();

router.get('/resource', resourceController.getResource);

router.get('/resource/private', jwtCheck, checkToken, resourceController.getPrivateResource);

export { router };
