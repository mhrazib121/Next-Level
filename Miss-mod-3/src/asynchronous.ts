const getTodo = async (): Promise<object> => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    // const data = await response.json();
    // console.log(data);
    return await response.json();
};
// getTodo();
// console.log( getTodo());
const getTodoData = async (): Promise<object> => {
    const result = await getTodo();
    // console.log(result);
    return result;
};

// console.log(getTodoData());