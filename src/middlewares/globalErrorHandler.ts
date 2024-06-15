
import express,{NextFunction,Request,Response} from 'express';
import createHttpError, { HttpError } from 'http-errors';
import { config } from '../config/config';

const globalErrorHandler=
(err:HttpError,req:Request,res:Response,next:NextFunction)=>
    {
        const statusCode=err.statusCode||500;

        return res.status(statusCode).json({
            message:err.message,
            errorStack: config.env==='development'?err.stack:"",   //in production we dont need to send this but in development we need to e=send so to do so make variabble in NODE_ENV in config and mofdify
        });// in production errorStack wont be shown 
    };


export default globalErrorHandler;