import env from "react-dotenv";
import { config } from "dotenv";
config();

export const CONNECTION = process.env.CONNECTION;
console.log(CONNECTION);
