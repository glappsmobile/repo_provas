import './setup.ts';
import express, { Request, Response } from 'express';
import cors from 'cors';
import serverError from './middlewares/serverError.middleware';

const app = express();
app.use(express.json());
app.use(cors());

app.get('/status', async (req: Request, res: Response) => {
  res.send("I'm alive");
});

app.use(serverError);

export default app;
