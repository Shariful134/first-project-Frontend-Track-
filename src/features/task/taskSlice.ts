import { RootState } from "@/redux/store";
import { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  tasks: ITask[];
  filter: "all" | "High" | "Medium" | "Low";
}

const initialState: InitialState = {
  tasks: [
    {
      id: "dsjkfhkxzcsjsal",
      tiitle: "initialize fronted",
      desciption: "Create Home page and Routing",
      dueDate: "2025-11",
      isCompleted: false,
      priority: "High",
    },
    {
      id: "dsjkfhkszxxcvjsal",
      tiitle: "inti github fronted",
      desciption: "Create-2 Home page and Routing-2",
      dueDate: "2025-11",
      isCompleted: false,
      priority: "Mideum",
    },
  ],
  filter: "all",
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});

export const selectTask = (state: RootState) => {
  return state.todo.tasks;
};
export const selectFilter = (state: RootState) => {
  return state.todo.filter;
};

export default taskSlice.reducer;
