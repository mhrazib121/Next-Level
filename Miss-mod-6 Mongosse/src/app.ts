import express, { Application } from "express";
import cors from "cors";

// application router
import useRouters from "./app/modules/user/user.routes";
const app: Application = express();

app.use(cors());

// Parsing data
app.use(express.json());
app.use(express.urlencoded());

/*
inserting data to mongodb

    step-1: create interface
    step-2: create schema
    step-3: implement model
    step-4: create service
*/

app.use('/api/v1/user', useRouters);

export default app;