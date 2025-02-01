import { ITask } from "@/model/tasksTypes";

export const tasks: ITask[] = [
  {
    id: 1,
    type: "General",
    title: "Connect Wallet",
    description: "Connect your wallet to our platform",
    points: 1000,
    action: "Connect",
    url: "https://www.socialtasks.com/connect-wallet",
    expires: "2025-12-31T23:59:59Z",
    mandatory: true
  },
  {
    id: 2,
    type: "General",
    title: "Daily Login",
    description: "Daily login",
    points: 100,
    action: "claim",
    url: "https://www.socialtasks.com/login",
    expires: "2025-12-31T23:59:59Z",
    mandatory: true
  },
  {
    id: 3,
    type: "Medium",
    title: "Follow",
    description: "Follow us on Medium",
    points: 500,
    action: "Follow",
    url: "https://medium.com/@socialtasks",
    expires: "2025-12-31T23:59:59Z",
    mandatory: false
  },
  {
    id: 4,
    type: "Instagram",
    title: "Like",
    description: "Like our latest Instagram post",
    points: 200,
    action: "Like",
    url: "https://www.instagram.com/socialtasks",
    expires: "2025-12-31T23:59:59Z",
    mandatory: false
  },
  {
    id: 5,
    type: "Referral",
    title: "Refer a Friend",
    description: "Refer a friend to join our platform",
    points: 800,
    action: "Refer",
    url: "https://www.socialtasks.com/referral",
    expires: "2025-12-31T23:59:59Z",
    mandatory: false
  },
  {
    id: 6,
    type: "Telegram",
    title: "Join",
    description: "Join our Telegram group",
    points: 300,
    action: "Join",
    url: "https://t.me/socialtasks",
    expires: "2025-12-31T23:59:59Z",
    mandatory: true
  },
  {
    id: 7,
    type: "Discord",
    title: "Join",
    description: "Join our Discord server",
    points: 300,
    action: "Join",
    url: "https://discord.gg/socialtasks",
    expires: "2025-12-31T23:59:59Z",
    mandatory: true
  }
];