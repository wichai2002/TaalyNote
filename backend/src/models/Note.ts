import mongoose, {Schema, Document} from "mongoose";
import INote from "../interfaces/models/interface.note";

export interface INoteModel extends INote, Document {}

const NoteSchema: Schema = new Schema(
    {
        user: {type: Schema.ObjectId, required: true, ref: 'User'},
        title: {type: String, required: true, maxlength: 150},
        todo_list: {
            type: [String], 
            required: true,
            validate: {
                validator: function(ver: any) {
                    return ver.every((todo: any) => todo.length <= 30);
                },
                message: (props: any) => `One or more todo list exceed the maximum length of 30 list`
            }
        },
        expect_list: {
            type: [String], 
            required: true,
            validate: {
                validator: function(ver: any) {
                    return ver.every((expect: any) => expect.length <= 30);
                },
                message: (props: any) => `One or more expect list exceed the maximum length of 30 list`
            }
        }
    },
    {
        timestamps: true
    }
)

export default mongoose.model<INoteModel>('Note', NoteSchema)