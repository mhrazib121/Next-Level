
import app from "./app"
import mongoose from "mongoose";


const port: number = 5000;


async function bootstrap() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/first-time-mongoose');
        console.log("database connected");
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}`)
        })
    } catch (error) {
        console.log(error, "database failed to connect");
    }

    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

bootstrap();