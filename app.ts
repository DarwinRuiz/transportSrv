import dotenv from "dotenv";
import { Server } from "./src/models/Server";

dotenv.config();

const server = new Server();

server.listen();