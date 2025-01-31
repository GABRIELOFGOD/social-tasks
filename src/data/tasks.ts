import { ITask } from "@/model/tasksTypes";

export const tasks: ITask[] = [
  {
    id: 1,
    type: "Instagram",
    title: "Follow",
    description: "Follow @socialtasks on Instagram",
    points: 5,
    action: "Follow",
    url: "https://www.instagram.com/socialtasks",
    expires: "2025-12-31T23:59:59Z" // past date
  },
  {
    id: 2,
    type: "Instagram",
    title: "Like",
    description: "Like the latest post on @socialtasks",
    points: 5,
    action: "Like",
    url: "https://www.instagram.com/socialtasks",
    expires: "2025-12-31T23:59:59Z" // future date
  },
  {
    id: 3,
    type: "Facebook",
    title: "Share",
    description: "Share our latest post on Facebook",
    points: 10,
    action: "Share",
    url: "https://www.facebook.com/socialtasks",
    expires: "2022-12-31T23:59:59Z" // past date
  },
  {
    id: 4,
    type: "Facebook",
    title: "Like",
    description: "Like our page on Facebook",
    points: 5,
    action: "Like",
    url: "https://www.facebook.com/socialtasks",
    expires: "2024-12-31T23:59:59Z" // future date
  },
  {
    id: 5,
    type: "Telegram",
    title: "Join",
    description: "Join our Telegram group",
    points: 15,
    action: "Join",
    url: "https://t.me/socialtasks",
    expires: "2025-12-31T23:59:59Z" // past date
  },
  {
    id: 6,
    type: "Telegram",
    title: "Share",
    description: "Share our Telegram group",
    points: 10,
    action: "Share",
    url: "https://t.me/socialtasks",
    expires: "2024-12-31T23:59:59Z" // future date
  },
  {
    id: 7,
    type: "Discord",
    title: "Join",
    description: "Join our Discord server",
    points: 15,
    action: "Join",
    url: "https://discord.gg/socialtasks",
    expires: "2022-12-31T23:59:59Z" // past date
  },
  {
    id: 8,
    type: "Discord",
    title: "Invite",
    description: "Invite friends to our Discord server",
    points: 10,
    action: "Invite",
    url: "https://discord.gg/socialtasks",
    expires: "2024-12-31T23:59:59Z" // future date
  },
  {
    id: 9,
    type: "TikTok",
    title: "Follow",
    description: "Follow us on TikTok",
    points: 5,
    action: "Follow",
    url: "https://www.tiktok.com/@socialtasks",
    expires: "2022-12-31T23:59:59Z" // past date
  },
  {
    id: 10,
    type: "TikTok",
    title: "Like",
    description: "Like our latest TikTok video",
    points: 5,
    action: "Like",
    url: "https://www.tiktok.com/@socialtasks",
    expires: "2025-12-31T23:59:59Z" // future date
  },
  {
    id: 11,
    type: "X",
    title: "Follow",
    description: "Follow us on X",
    points: 5,
    action: "Follow",
    url: "https://www.x.com/socialtasks",
    expires: "2022-12-31T23:59:59Z" // past date
  },
  {
    id: 12,
    type: "X",
    title: "Retweet",
    description: "Retweet our latest tweet",
    points: 5,
    action: "Retweet",
    url: "https://www.x.com/socialtasks",
    expires: "2025-12-31T23:59:59Z" // future date
  },
  {
    id: 13,
    type: "Instagram",
    title: "Comment",
    description: "Comment on our latest Instagram post",
    points: 5,
    action: "Comment",
    url: "https://www.instagram.com/socialtasks",
    expires: "2025-12-31T23:59:59Z" // past date
  },
  {
    id: 14,
    type: "Facebook",
    title: "Comment",
    description: "Comment on our latest Facebook post",
    points: 5,
    action: "Comment",
    url: "https://www.facebook.com/socialtasks",
    expires: "2024-12-31T23:59:59Z" // future date
  },
  {
    id: 15,
    type: "Telegram",
    title: "React",
    description: "React to our latest message in Telegram",
    points: 5,
    action: "React",
    url: "https://t.me/socialtasks",
    expires: "2025-12-31T23:59:59Z" // past date
  },
  {
    id: 16,
    type: "Discord",
    title: "React",
    description: "React to our latest message in Discord",
    points: 5,
    action: "React",
    url: "https://discord.gg/socialtasks",
    expires: "2025-12-31T23:59:59Z" // future date
  },
  {
    id: 17,
    type: "TikTok",
    title: "Share",
    description: "Share our latest TikTok video",
    points: 10,
    action: "Share",
    url: "https://www.tiktok.com/@socialtasks",
    expires: "2022-12-31T23:59:59Z" // past date
  },
  {
    id: 18,
    type: "X",
    title: "Like",
    description: "Like our latest tweet",
    points: 5,
    action: "Like",
    url: "https://www.x.com/socialtasks",
    expires: "2025-12-31T23:59:59Z" // future date
  },
  {
    id: 19,
    type: "Instagram",
    title: "Share",
    description: "Share our latest Instagram post",
    points: 10,
    action: "Share",
    url: "https://www.instagram.com/socialtasks",
    expires: "2025-12-31T23:59:59Z" // past date
  },
  {
    id: 20,
    type: "Facebook",
    title: "Invite",
    description: "Invite friends to like our Facebook page",
    points: 10,
    action: "Invite",
    url: "https://www.facebook.com/socialtasks",
    expires: "2024-12-31T23:59:59Z" // future date
  },
  {
    id: 21,
    type: "Telegram",
    title: "Like",
    description: "Like our latest message in Telegram",
    points: 5,
    action: "Like",
    url: "https://t.me/socialtasks",
    expires: "2022-12-31T23:59:59Z" // past date
  },
  {
    id: 22,
    type: "Discord",
    title: "Like",
    description: "Like our latest message in Discord",
    points: 5,
    action: "Like",
    url: "https://discord.gg/socialtasks",
    expires: "2025-12-31T23:59:59Z" // future date
  }
]