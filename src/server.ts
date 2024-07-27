import express, { Request, Response } from 'express';
import cors from 'cors';

const server = express();

server.use(cors());
server.use(express.json());
server.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Hello World Update!' });
});
server.listen(3000);