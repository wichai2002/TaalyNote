import mongoose from "mongoose";
import dotenv from 'dotenv'

import User from "./models/User"
import Note from "./models/Note"
import Files from "./models/Files";

dotenv.config();
const DBHOST = process.env.DBHOST || ""

mongoose.connect(DBHOST)
    .then(() => {
        console.log('MongoDB connected');
        // Find all users without an email field
        User.find()
            .then(users => {console.log('Migration User model completed');})
            .catch(err => console.error('User model error:', err));
        Note.find()
        .then(users => {console.log('Migration Note model completed');})
        .catch(err => console.error('Note model error:', err));

        Files.find()
        .then(users => {console.log('Migration Files model completed');})
        .catch(err => console.error('File model error:', err));

    })
    .catch(err => console.error('MongoDB connection error:', err));
