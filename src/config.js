import {config} from "dotenv";

config();

export default {
    host : process.env.HOST,
    database : process.env.DATABASE,
    user : process.env.DB_USER,
    password : process.env.PASSWORD,
    port : process.env.DB_PORT,
    jwtSecret : process.env.JWT_SECRET,
    jwtExpiresIn : process.env.JWT_EXPIRES_IN,
    agentSecret: process.env.AGENT_SECRET
}
