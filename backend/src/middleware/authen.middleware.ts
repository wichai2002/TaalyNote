import { NextFunction, Response, Request} from "express"
import token from "../utility/token"
import RequestMiddleWare from "../interfaces/request.with.user";
import { JwtPayload } from "jsonwebtoken";

// export interface RequestMiddleWare extends Request {
//     token: string | JwtPayload;
// }

const authentication = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const authorization = req.headers.authorization

        if (!authorization) {
            return res.status(401).json({message: "You are not logged in now"})
        }
        const decoded = await token.decode(authorization);
        (req as RequestMiddleWare).payload = decoded;
        next()
    } catch (error) {
        console.log("Error at aunten-middleware");
        res.status(401).json({message: `${error}`})
    }
}

export default { authentication }