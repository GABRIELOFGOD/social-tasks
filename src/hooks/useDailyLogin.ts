"use client";

import { BASEURL } from "@/utils/constants";
import { useEffect, useState } from "react"

export interface DailyLoginState {
  loading: boolean;
  error: string | null;
  hasLoggedIn: boolean;
}

export const useDailyLogin = (wallet: string) => {
  const [state, setState] = useState<DailyLoginState>({
    loading: false,
    error: null,
    hasLoggedIn: false,
  });
  
  useEffect(() => {
    const checkDailyLogin = async () => {
      setState({ ...state, loading: true });
      try {
        const request = await fetch(`${BASEURL}/user/check`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ wallet }),
        });

        const response = await request.json();
        if (!request.ok) {
          setState({ ...state, loading: false, error: response.message });
        }

        if (response.status !== "success") {
          setState({ ...state, loading: false, error: response.message });
        }
        
        setState({ ...state, loading: false, hasLoggedIn: response.checkedLast });
      } catch (error) {
        setState({ ...state, loading: false, error: (error as Error).message });
      }
    }

    checkDailyLogin();
  }, [wallet]);

  const checkInNow = async (userId: number) => {
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