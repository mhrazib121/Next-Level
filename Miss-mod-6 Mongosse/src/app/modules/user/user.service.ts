import User from "./user.model";

export const createUserToDB = async () => {
    const data = new User({
        id: "776",
        name: {
            firstName: "Test 2",
            lastName: "Test"
        },
        email: "test121@gmail.com",
        password: "abcde",
        confirmPassword: "abcde",
        gender: "male",
        dateOfBirth: "20/08/1998"

    });

    await data.save();
    return data;
};
