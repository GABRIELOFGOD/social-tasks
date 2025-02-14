import { ITask } from "./tasksTypes";

export enum AccountStatus {
  ACTIVE = "active",
  INACTIVE = "inactive",
}

export interface IUser {
  id: number;
  wallet: string;
  role: "admin" | "user";
  points: number;
  tasks?: ITask[];
  lastLogin?: Date;
  referrer?: IUser;
  referrers?: IUser[];
  status: AccountStatus;
  hasStartedBot: boolean;
  refId: number;
}