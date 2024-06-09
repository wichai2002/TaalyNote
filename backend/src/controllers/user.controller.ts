import { Request, Response, NextFunction } from "express"
import RequestMiddleWare from "../interfaces/request.with.user";
import mongoose from "mongoose"
import User from "../models/User"
import hash from "../utility/hash.password"
import token from "../utility/token"

const authen = async (request: Request, response: Response, next: NextFunction) => {
    const {username, password} = request.body;
    try {
        const fetch_user = await User.findOne({username})

        if (fetch_user) {
            const compared_password_with_hashed = await hash.compare_password(password, fetch_user.password)
            
            if (compared_password_with_hashed) {
                const token_login = await token.generate_token(fetch_user)
                response.status(200).json({ is_authen: compared_password_with_hashed, token: token_login })
                
            } else { response.status(401).json({ is_authen: compared_password_with_hashed })}

        } else { response.status(404).json({ is_authen: false, message: `username: ${username} dose not exist.`}) }

    } catch (error) {
        console.error("Error authen :", error);
        response.status(500).json({ message: `Failed to authen user: ${error}` });
    }
}

const fetchAll = async (request: Request, response: Response, next: NextFunction) => {
    return User.find().select("-password")
        .then((users) => { response.status(200).json({users}); })
        .catch((error) => { 
            console.log(error); 
            response.status(500).json({error}) 
        })
}

const fetchById = async (request: Request, response: Response, next: NextFunction) => {
    const _id = request.params.id

    return User.findById(_id).select("-password")
        .then((user) => { response.status(200).json({ user: user }) })
        .catch((error) => { 
            console.log(error);
            response.status(500).json({error}) 
        })
}

const createUser = async (request: Request, response: Response, next: NextFunction) => {
    const {
        username, 
        password, 
        email, 
        first_name, 
        last_name, 
        date_of_birth, 
        position, 
        profile
    } = request.body

    try{
        const hashed_password = await hash.hash_password(password);
        const new_user = new User({
            _id: new mongoose.Types.ObjectId(),
            username,
            password: hashed_password,
            email,
            first_name,
            last_name,
            date_of_birth,
            position,
            profile,
        })

        await new_user.save();
        response.status(201).json({user: new_user})

    } catch (error) {
        console.error("Error creating user:", error);
        response.status(500).json({ message: `Failed to create user: ${error}` });
    }
}

const updateUser = async (request: Request, response: Response, next: NextFunction) => {
    const _id = request.params.id
    const middleware_request: any = (request as RequestMiddleWare).payload

    if (_id != middleware_request._id){
        response.status(403).json({ message: "You can do action update with only you account!" })
    }

    try {
        const user = await User.findById(_id)
        if (user) {
            user.set(request.body);
            await user.save()
            return response.status(201).json({ user })
        }else {
            { response.status(400).json({ is_authen: false, message: `user dose not exist.`}) }
        }

    } catch (error) {
        console.log("Update error:", error);
        response.status(500).json({ message: `Failed to update user: ${error}` });
    }
}

const deleteUser = async (request: Request, response: Response, next: NextFunction) => {
    const _id = request.params.id
    const middleware_request: any = (request as RequestMiddleWare).payload

    if (_id != middleware_request._id){
        response.status(403).json({ message: "You can do action delete with only you account!" })
    }
    return User.findByIdAndDelete(_id)
    .then((user) => (user ? response.status(201).json({ user, message: 'Deleted' }) : response.status(404).json({ message: 'not found' })))
    .catch((error) => response.status(500).json({ error }));
}

export default {createUser, fetchAll, fetchById, updateUser, deleteUser, authen}
