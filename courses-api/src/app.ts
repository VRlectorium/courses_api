import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import { createWriteStream ,access } from 'fs';
import subject from './controllers/SubjectController';
import course from './controllers/CourseController';
import DBException from './dao/impl/DBException';

const app = express();

// Logger setup
const accessLogStream = createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'});
app.use(logger('combined', {stream: accessLogStream}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.use("/courses", course);
app.use("/subjects", subject);
app.use((err, req, res, next) => {
    if (err instanceof DBException) {
        res.status(500).json(err)
    }
})

export default app;