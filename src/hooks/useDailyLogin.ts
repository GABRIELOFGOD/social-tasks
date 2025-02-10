"use client";

import { IUser } from "@/model/userTypes";
import { BASEURL } from "@/utils/constants";
import { useEffect, useState } from "react"

export interface DailyLoginState {
  loading: boolean;
  error: string | null;
  hasLoggedIn: boolean;
}

export const useDailyLogin = (user: IUser | null) => {
  const [state, setState] = useState<DailyLoginState>({
    loading: false,
    error: null,
    hasLoggedIn: false,
  });
  
  useEffect(() => {
    const checkDailyLogin = async () => {
      if (!user) return;

      if (!user.lastLogin) {
        setState({ ...state, hasLoggedIn: false });
        return;
      }

      const lastLoggedIn = new Date(user.lastLogin);
      const now = new Date();
      const diff = now.getTime() - lastLoggedIn.getTime();
      const hoursDiff = diff / (1000 * 60 * 60);

      if (hoursDiff < 24) {
        setState({ ...state, hasLoggedIn: true });
      } else {
        setState({ ...state, hasLoggedIn: false });
      }
    }

    checkDailyLogin();
  }, [user]);

  const checkInNow = async (userId: number) => {
    if (!user) return;

    setState({ ...state, loading: true });
    try {
      const request = await fetch(`${BASEURL}/check-in`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId }),
      });

      const response = await request.json();
      if (!request.ok) {
        setState({ ...state, loading: false, error: response.message });
      }

      if (response.status !== "success") {
        setState({ ...state, loading: false, error: response.message });
      }
      
      setState({ ...state, loading: false, hasLoggedIn: true });
    } catch (error) {
      setState({ ...state, loading: false, error: (error as Error).message });
    }
  }

  return {...state, checkInNow};
}