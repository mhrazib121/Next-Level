import express, { Response, Request, Application } from "express";
import cors from "cors";
import { Schema, model } from "mongoose";

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
*/




app.use('/', useRouters)

export default app;