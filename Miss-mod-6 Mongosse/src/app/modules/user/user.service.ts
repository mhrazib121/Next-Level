import { IUser } from "./user.interface";
import User from "./user.model";

export const createUserToDB = async (payload: IUser): Promise<IUser> => {
    // const data = new User({
    //     id: "776",
    //     name: {
    //         firstName: "Test 2",
    //         lastName: "Test"
    //     },
    //     email: "test121@gmail.com",
    //     password: "abcde",
    //     confirmPassword: "abcde",
    //     gender: "male",
    //     dateOfBirth: "20/08/1998"

    // });

    const data = new User(payload);

    await data.save();
    return data;
};
export const getUsersFromDB = async (): Promise<IUser[]> => {

    const data = User.find();

    return data;
};
export const getSingleUserFromDB = async (payload: string): Promise<IUser | null> => {

    const data = User.findOne({ id: payload });

    return data;
};
