export const fetchTodos = async (thunkApi: any) => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const result = await response.json();
    return result.splice(0, 10);
  } catch (error) {
    console.log(error);
    return thunkApi.rejectWithValue({
      message: error
    });
  }
};
