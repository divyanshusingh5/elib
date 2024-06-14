import { config as conf } from 'dotenv';
conf();

const _config = {
    port: process.env.PORT,
    // in future whatever you wan to change chage here like apikey etc
    databaseURL:process.env.MONGO_CONNECTION_STRING,
};

export const config = Object.freeze(_config);
