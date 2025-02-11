import { IUser } from "./userTypes";

export interface IParticipant {
  id: number;
  username: string;
  completed: "pending" | "completed";
  user: IUser;
}

export enum TaskStatus {
  PENDING = "pending",
  IN_PROGRESS = "in_progress",
  COMPLETED = "completed",
  AVAILABLE = "available",
}

export interface ITask {
  id: number;
  // type: "Instagram" | "Telegram" | "TikTok" | "X" | "Facebook" | "Discord" | "General" | "Medium" | "Referral" | "Youtube";
  type: TaskType;
  description?: string;
  points: number;
  action: string;
  url?: string;
  status?: TaskStatus;
  mandatory?: boolean;
  username?: string;
  participants: IParticipant[];
  primaryTask: boolean;
}

export enum TaskType {
  INSTAGRAM = "instagram",
  FACEBOOK = "facebook",
  X = "x",
  DISCORD = "discord",
  YOUTUBE = "youtube",
  TIKTOK = "tiktok",
  TELEGRAM = "telegram",
  MEDIUM = "medium",
  REFERRAL = "referral",
}