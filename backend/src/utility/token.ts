import jwt, { JwtPayload } from "jsonwebtoken"
import User from "../models/User"
import dotenv from "dotenv"

dotenv.config();

const secret_key: string = process.env.SECRETKEY || "secret_key"

const generate_token = async (payload: any): Promise<string> => {
    try {
        const filter_payload = {
            username: payload.username,
            _id: payload._id
        }

        const token = jwt.sign(filter_payload, secret_key, { expiresIn: '6h', algorithm: "HS256" });
        return token;

    } catch (error) {
        throw new Error(`generate token failed: ${error}`);
    }
}

const decode = async (token: string) => {
    try {
        const decoded = jwt.verify(token, secret_key)
        return decoded
    } catch (error) {
        if (error instanceof jwt.TokenExpiredError){
            throw Error(`Token expired: ${error.message}`)
        }else if (error instanceof jwt.JsonWebTokenError) {
            throw Error(`Token decode error ${error.message}`)
        }else{
            throw Error(`Error: ${error}`)
        }
    }
}

export default {decode, generate_token}
