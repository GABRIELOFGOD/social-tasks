// id: 1,
//     type: "Instagram",
//     title: "Follow",
//     description: "Follow @socialtasks on Instagram",
//     points: 5,
//     action: "Follow",
//     url: "https://www.instagram.com/socialtasks",
//     expires: "2023-12-31T23:59:59Z"

export interface ITask {
  id: number;
  type: "Instagram" | "Telegram" | "TikTok" | "X" | "Facebook" | "Discord";
  title: string;
  description?: string;
  points: number;
  action: string;
  url?: string;
  expires: string;
  status?: "pending" | "expired" | "available" | "claimed";
}