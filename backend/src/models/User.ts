import mongoose, {Schema, Document} from "mongoose";
import IUsers from "../interfaces/models/interface.user"

// export interface IUsers {
//     username: string;
//     password: string;
//     email: string;
//     first_name: string;
//     last_name: string;
//     date_of_birth: Date;
//     position: string;
//     profile: string;
// }

export interface IUserModel extends IUsers, Document {}

const UserSchema: Schema = new Schema(
    {
        username: {type: String, required: true, maxlength: 150, unique: true},
        password: {type: String, required: true},
        email: {
            type: String, 
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Please enter a valid email address'],
            maxlength: 255
        },
        first_name: {type: String, required: true, maxlength: 150},
        last_name: {type: String, required: true, maxlength: 150},
        date_of_birth: {type: Date, required: true},
        position: {type: String, required: true, maxlength: 150},
        profile: {type: String, required: false, maxlength: 255}
    },{
        timestamps: true
    }
)

export default mongoose.model<IUserModel>('User', UserSchema)
