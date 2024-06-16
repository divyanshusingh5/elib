import { config as conf } from 'dotenv';
import { env } from 'process';
conf();

const _config = {
    port: process.env.PORT,
    // in future whatever you wan to change chage here like apikey etc
    databaseURL:process.env.MONGO_CONNECTION_STRING,

    env:process.env.NODE_ENV,
    jwtSecret: process.env.JWT_SECRET,
};

export const config = Object.freeze(_config);
