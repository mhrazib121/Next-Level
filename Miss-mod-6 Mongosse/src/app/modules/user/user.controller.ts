import { Request, Response } from "express";
import { createUserToDB, getSingleUserFromDB, getUsersFromDB } from "./user.service";

export const createUser = async (req: Request, res: Response) => {

    const data = req.body;
    const user = await createUserToDB(data);
    res.status(200).json({
        status: "Success",
        data: user,
    });

}
export const getUsers = async (req: Request, res: Response) => {

    const user = await getUsersFromDB();
    res.status(200).json({
        status: "Success",
        data: user,
    });

}
export const getSingleUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const user = await getSingleUserFromDB(id);
    res.status(200).json({
        status: "Success",
        data: user,
    });

}