import express from 'express';
import cors from 'cors';
import 'dotenv/config';

const app = express();

app.use(cors());

app.use('/', (req, res) => {
  res.send('Hello there');
});

app.listen(process.env.PORT || 3000);
