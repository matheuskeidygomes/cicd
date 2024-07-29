import express from "express";
import cors from "cors";
import routes from "./routes";
import { config } from "dotenv";
config();

const server = express();

server.use(cors());
server.use(express.json());
server.use(routes);
server.listen(process.env.PORT);