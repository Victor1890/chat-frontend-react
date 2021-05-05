import env from "dotenv";
env.config();

export const CONNECTION = process.env.ENDPOINT;
console.log(process.env.ENDPOINT);
