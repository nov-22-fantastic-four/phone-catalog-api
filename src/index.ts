import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import phonesRouter from './routers/phones.router';

const app = express();

app.use(cors());
app.use(express.static('public'));

app.use('/phones', phonesRouter);

app.listen(process.env.PORT || 5000);
