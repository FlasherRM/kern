import IController from "../interface/controller.interface";
import * as express from 'express'
import UserService from "../services/user.service";

export default class UserController implements IController {
    public path: string = '/auth/';
    public router = express.Router();
    public service = new UserService;
    constructor() {
        this.intializeRoutes();
        console.log('USER CONTROLLER WORKS!')
    }
    public intializeRoutes() {
        this.router.post(this.path + 'register', this.register)
    }

    register = async (request: express.Request, response: express.Response) => {
        console.log(request.body)
        const userData = {
            name: request.body.name,
            password: await this.service.hashPassword(request.body.password),
        }
        // // Create token
        // const token = jwt.sign(
        //     { user_id: userDAta._id},
        //     process.env.TOKEN_KEY,
        //     {
        //         expiresIn: "2h",
        //     }
        // );
        // // save user token
        // user.token = token;
        //
        // // return new user
        // res.status(201).json(user);
        response.send(await this.service.register(userData.name, userData.password))
    }

}