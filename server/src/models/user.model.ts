import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const UserModelSchema = new Schema({
    name: String,
    password: String
});

export const UserModel = mongoose.model('UserModel', UserModelSchema); // @ts-ignore