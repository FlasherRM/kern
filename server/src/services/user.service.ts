import { UserModel } from '../models/user.model';
import * as bcrypt from 'bcrypt'

export default class UserService {
    async hashPassword(password: string) {
        // generate salt to hash password
        const salt = await bcrypt.genSalt(10);
        // now we set user password to hashed password
        return await bcrypt.hash(password, salt);
    }
    register = async (name: string, password: string) => {
        const user = new UserModel({
            name,
            password
        })
        await user.save();
        return {
            "message": "success"
        }
    }
}