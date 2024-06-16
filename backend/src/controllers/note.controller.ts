import { Request, Response, NextFunction } from "express"
import RequestMiddleWare from "../interfaces/request.with.user"
import PayloadMiddleware from "../utility/request.payload.midleware"
import mongoose from "mongoose"
import Note from "../models/Note"


const fetchAll = async (request: Request, response: Response, next: NextFunction) => {
    const request_middleware: any = await PayloadMiddleware.middleware(request);
    
    const notes = await Note.find({ user: request_middleware._id });
    if (notes.length === 0){
        return response.status(404).json({ msg: 'No items found for this user' });
    }
    return response.status(200).json({ notes })
}

const fetchById = async (request: Request, response: Response, next: NextFunction) => {
    const _id = request.params.id
    return Note.findById({ _id: _id })
        .then((note) => {
            response.status(200).json({ note })
        })
        .catch((error) => {
            console.log(error);
            response.status(500).json({ error })
        })
}

const fetchByDateCreate = async (request: Request, response: Response, next: NextFunction) => {
    return response.status(200).send(200)
}

const fetchByLastestCreated = async (request: Request, response: Response, next: NextFunction) => {
    
    const request_middleware: any = await PayloadMiddleware.middleware(request);
    console.log(request_middleware);
    try {
    // .sort({ createdAt: -1 }
        const note = await Note.findOne({ user: request_middleware._id }).sort({createdAt: -1});
        
        if (!note){
            return response.status(404).json({ msg: 'No items found for this user' });
        }

        return response.status(200).json({ note })

    } catch (err: any) {
        return response.status(500).json({ message: err.message });
    }
}

const createNote = async (request: Request, response: Response, next: NextFunction) => {
    const { title, todo_list, expect_list } = request.body
    const request_middleware: any = await PayloadMiddleware.middleware(request);
    const user = request_middleware._id

    try {
        const new_note = new Note({
            _id: new mongoose.Types.ObjectId(),
            user,
            title,
            todo_list,
            expect_list
        });

        await new_note.save();
        response.status(201).json({ note: new_note })
    } catch (error) {
        console.error("Error creating note:", error);
        response.status(500).json({ message: `Failed to create note: ${error}` });
    }
}

const updateNote = async (request: Request, response: Response, next: NextFunction) => {
    const _id = request.params.id
    const request_middleware: any = (request as RequestMiddleWare).payload
    try {
        const note = await Note.findById(_id)
        if (note) {

            if (note.user == request_middleware._id) {
                note.set(request.body);
                await note.save()
                return response.status(201).json({ note })
            } else { response.status(403).json({ message: `you can do action update with only your note.` }) }

        } else {
            { response.status(404).json({ message: `note dose not exist.` }) }
        }

    } catch (error) {
        console.log("Update error:", error);
        response.status(500).json({ message: `Failed to update note: ${error}` });
    }
}

const deleteNote = async (request: Request, response: Response, next: NextFunction) => {
    const _id = request.params.id
    const middleware_request: any = (request as RequestMiddleWare).payload


    // bug จะเอาไอดีของ note มาเทียบกับ id ของ user ?
    if (_id != middleware_request._id) {
        response.status(403).json({ message: "You can do action delete with only you note!" })
    }
    return Note.findByIdAndDelete(_id)
        .then((note) => (note ? response.status(201).json({ note, message: 'Deleted' }) : response.status(404).json({ message: 'not found' })))
        .catch((error) => response.status(500).json({ error }));
}


export default { fetchAll, fetchById, createNote, updateNote, deleteNote, fetchByLastestCreated }