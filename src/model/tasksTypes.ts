import { IUser } from "./userTypes";

export interface IParticipant {
  id: number;
  username: string;
  completed: "pending" | "completed";
  user: IUser;
}

export interface ITask {
  id: number;
  type: "Instagram" | "Telegram" | "TikTok" | "X" | "Facebook" | "Discord" | "General" | "Medium" | "Referral";
  description?: string;
  points: number;
  action: string;
  url?: string;
  status?: "pending" | "expired" | "available" | "claimed";
  mandatory?: boolean;
  username?: string;
  participants: IParticipant[];
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
}