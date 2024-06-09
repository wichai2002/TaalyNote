import { JwtPayload } from "jsonwebtoken";
import RequestMiddleWare from "../interfaces/request.with.user";
import { Request } from "express";

const middleware = async (request: Request): Promise<string | JwtPayload> => {
    const request_middleware = (request as RequestMiddleWare).payload
    return request_middleware
}

export default {middleware}