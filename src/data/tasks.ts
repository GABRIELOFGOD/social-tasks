import { ITask, TaskType } from "@/model/tasksTypes";

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
    description: "Join Telegram group",
    points: 300,
    action: "Join",
    url: "https://t.me/socialtasks",
    mandatory: true
  },
  {
    id: 2,
    type: "Telegram",
    description: "Join Telegram community",
    points: 300,
    action: "Join",
    url: "https://t.me/socialtasks",
    mandatory: true
  },
  {
    id: 1,
    type: "X",
    description: "Follow X",
    points: 300,
    action: "Follow",
    url: "https://t.me/socialtasks",
    mandatory: true
  },
  {
    id: 4,
    type: "Facebook",
    description: "Join Facebook community",
    points: 200,
    action: "Join",
    url: "https://www.instagram.com/socialtasks",
    mandatory: false
  },
  {
    id: 3,
    type: "Medium",
    description: "Join Medium",
    points: 500,
    action: "Join",
    url: "https://medium.com/@socialtasks",
    mandatory: false
  },
  {
    id: 7,
    type: "Discord",
    description: "Join Discord",
    points: 300,
    action: "Join",
    url: "https://discord.gg/socialtasks",
    mandatory: true
  },
  {
    id: 5,
    type: "Referral",
    description: "Refer friends",
    points: 800,
    action: "Refer",
    url: "https://www.socialtasks.com/referral",
    mandatory: false
  },
];

export const taskTypes = [
  {
    name: TaskType.TELEGRAM,
    actions: ["Join", "Follow"],
  },
  {
    name: TaskType.FACEBOOK,
    actions: ["Join", "Follow", "comment", "Like", "share"],
  },
  {
    name: TaskType.X,
    actions: ["Like", "Follow", "Comment", "Requote", "Repost"],
  },
  {
    name: TaskType.DISCORD,
    actions: ["Join", "Follow"],
  },
  {
    name: TaskType.YOUTUBE,
    actions: ["Subscribe", "Like", "Comment"],
  },
  {
    name: TaskType.TIKTOK,
    actions: ["Follow", "Like", "Comment", "Share"],
  },
  {
    name: TaskType.INSTAGRAM,
    actions: ["Follow", "Like", "Comment", "Share"],
  },
  {
    name: TaskType.MEDIUM,
    actions: ["Follow", "Clap", "Comment"],
  }
];

