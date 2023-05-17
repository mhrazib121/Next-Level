import { Request, Response } from "express";
import { createUserToDB, getUserFromDB } from "./user.service";

export const createUser = async (req: Request, res: Response) => {

    const data = req.body;
    const user = await createUserToDB(data);
    res.status(200).json({
        status: "Success",
        data: user,
    });

}
export const getUsers = async (req: Request, res: Response) => {

    const user = await getUserFromDB();
    res.status(200).json({
        status: "Success",
        data: user,
    });

}