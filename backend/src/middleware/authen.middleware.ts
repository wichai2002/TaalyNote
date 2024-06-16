import { NextFunction, Response, Request} from "express"
import token from "../utility/token"
import RequestMiddleWare from "../interfaces/request.with.user";
import { JwtPayload } from "jsonwebtoken";

// export interface RequestMiddleWare extends Request {
//     token: string | JwtPayload;
// }

const authentication = async (request: Request, response: Response, next: NextFunction) => {
    try {
        const authorization = request.headers.authorization

        if (!authorization) {
            return response.status(401).json({message: "You are not logged in now"})
        }

        const decoded = await token.decode(authorization);
        (request as RequestMiddleWare).payload = decoded;
        next()
    } catch (error) {
        console.log("Error at aunten-middleware");
        response.status(401).json({message: `${error}`})
    }
}

export default { authentication }