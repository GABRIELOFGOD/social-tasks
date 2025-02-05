import { JSX, ReactNode } from "react";

export interface IDashboardCard {
  icon: JSX.Element;
  value: number;
  description: string;
  title: string;
}

export interface IDashboardSideBar {
  icon: JSX.Element;
  title: string;
  path: string;
}