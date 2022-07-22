import App from "./app";
import UserController from "./controllers/user.controller";
// import UserController from "./controllers/user.controller";

const port: number | string = process.env.PORT || 3000;
const mongo_url = process.env.MONGO_URL || "mongodb://localhost:27017/Kern";

const app = new App(
    [
        new UserController(),
    ],
    port,
    mongo_url
)
app.listen()