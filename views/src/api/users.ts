import { create } from "zustand";
import { User } from "../definitions";
import axios from "axios";

type CreateUserResponse = {
  success: boolean;
  message?: string;
};

type UserStore = {
  users: User[];
  setUser: (user: User) => void;
  createUser: (newUser: User) => Promise<CreateUserResponse | null>;
};

export const useUser = create<UserStore>((set) => ({
  users: [],

  setUser: (user: User) => set((state) => ({ users: [...state.users, user] })),

  createUser: async (newUser: User): Promise<CreateUserResponse | null> => {
    try {
      const res = await axios.post("/api/users", newUser, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("res", res);

      const { success } = res.data;
      if (success) {
        return await res.data;
      } else {
        return await res.data;
      }
    } catch (error) {
      console.error("Error creating user:", error);
      return {
        success: false,
        message: "",
      };
    }
  },
}));
