import express from 'express'
import * as indexController from '../controllers/indexController.js'

const router = express.Router();

/* GET home page. */
router.get('/', indexController.home);

router.get('/status', indexController.status);

export { router };
