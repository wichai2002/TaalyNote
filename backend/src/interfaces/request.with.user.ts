import { Request } from 'express';
import {JwtPayload } from 'jsonwebtoken';

export default interface RequestMiddleWare extends Request {
    payload: string | JwtPayload;
}