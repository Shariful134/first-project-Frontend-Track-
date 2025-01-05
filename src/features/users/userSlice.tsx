import { RootState } from "@/redux/store";
import { IUser } from "@/types";
import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  users: IUser[];
}

const initialState: InitialState = {
  users: [
    {
      id: "gxjmkpYet1cDw3TtdIhix",
      name: "Shariful isalm",
      email: "si608626@gmail.com",
    },
    {
      id: "gxjmkpYet1cDw3TtdIhaix",
      name: "Easha isalm",
      email: "Easha06@gmail.com",
    },
  ],
};

type DraftUser = Pick<IUser, "name" | "email">;

const createUser = (userData: DraftUser) => {
  return { id: nanoid(), ...userData };
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<IUser>) => {
      const userData = createUser(action.payload);
      state.users.push(userData);
    },
    deleteUser: (state, action: PayloadAction<string>) => {
      state.users = state.users.filter((user) => user.id != action.payload);
    },
  },
});

export const { addUser, deleteUser } = userSlice.actions;
export const selectUsers = (state: RootState) => state.user.users;
export default userSlice.reducer;
