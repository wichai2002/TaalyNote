import { ref, required } from "joi";
import mongoose, {Schema, Document} from "mongoose";

export interface IFiles {
    path: string,
    name: string,
    note: string
}


export interface IFileModel extends Document {}

const FileSchema: Schema = new Schema(
    {
        path: {type: String, required: true, maxlength: 255},
        name: {type: String, required: true, maxlength: 150},
        note: {type: Schema.ObjectId, required: true, ref: "Note"}
    },{
        timestamps: true
    }
)

export default mongoose.model<IFileModel>("Files", FileSchema)
