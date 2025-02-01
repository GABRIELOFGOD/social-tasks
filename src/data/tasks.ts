import { ITask } from "@/model/tasksTypes";

export const tasks: ITask[] = [
  // {
  //   id: 1,
  //   type: "General",
  //   title: "Connect Wallet",
  //   description: "Connect your wallet to our platform",
  //   points: 1000,
  //   action: "Connect",
  //   url: "https://www.socialtasks.com/connect-wallet",
  //   expires: "2025-12-31T23:59:59Z",
  //   mandatory: true
  // },
  // {
  //   id: 2,
  //   type: "General",
  //   title: "Daily Login",
  //   description: "Daily login",
  //   points: 100,
  //   action: "claim",
  //   url: "https://www.socialtasks.com/login",
  //   expires: "2025-12-31T23:59:59Z",
  //   mandatory: true
  // },
  {
    id: 6,
    type: "Telegram",
    title: "Join",
    description: "Join Telegram group",
    points: 300,
    action: "Join",
    url: "https://t.me/socialtasks",
    expires: "2025-12-31T23:59:59Z",
    mandatory: true
  },
  {
    id: 2,
    type: "Telegram",
    title: "Join",
    description: "Join Telegram community",
    points: 300,
    action: "Join",
    url: "https://t.me/socialtasks",
    expires: "2025-12-31T23:59:59Z",
    mandatory: true
  },
  {
    id: 1,
    type: "X",
    title: "Follow",
    description: "Follow X",
    points: 300,
    action: "Follow",
    url: "https://t.me/socialtasks",
    expires: "2025-12-31T23:59:59Z",
    mandatory: true
  },
  {
    id: 4,
    type: "Facebook",
    title: "Join",
    description: "Join Facebook community",
    points: 200,
    action: "Join",
    url: "https://www.instagram.com/socialtasks",
    expires: "2025-12-31T23:59:59Z",
    mandatory: false
  },
  {
    id: 3,
    type: "Medium",
    title: "Join",
    description: "Join Medium",
    points: 500,
    action: "Join",
    url: "https://medium.com/@socialtasks",
    expires: "2025-12-31T23:59:59Z",
    mandatory: false
  },
  {
    id: 7,
    type: "Discord",
    title: "Join",
    description: "Join Discord",
    points: 300,
    action: "Join",
    url: "https://discord.gg/socialtasks",
    expires: "2025-12-31T23:59:59Z",
    mandatory: true
  },
  {
    id: 5,
    type: "Referral",
    title: "Refer a Friend",
    description: "Refer friends",
    points: 800,
    action: "Refer",
    url: "https://www.socialtasks.com/referral",
    expires: "2025-12-31T23:59:59Z",
    mandatory: false
  },
];