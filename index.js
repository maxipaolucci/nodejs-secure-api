import express from 'express'
import dotenv from 'dotenv'
import bodyparser from 'body-parser';

import cors from 'cors';


import { router as indexRouter } from './routes/index.js';
import { router as usersRouter } from './routes/users.js';
import { router as resourcesRouter } from './routes/resources.js';
// const usersRouter = require('./routes/users');

dotenv.config({ path: '.env'});

const PORT = process.env.PORT || 8888;

const app = express();

app.use(bodyparser.json());
app.use(cors());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/resources', resourcesRouter);



app.get("*", (req, res) => {
    res.sendStatus(404);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});