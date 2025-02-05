import { ITask } from "./tasksTypes";

export interface IUser {
  id: number;
  wallet: string;
  role: "admin" | "user";
  points: number;
  tasks?: ITask[];
}