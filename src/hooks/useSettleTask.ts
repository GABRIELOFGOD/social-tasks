"use client";

import { BASEURL } from "@/utils/constants";
import { useState } from "react";

interface ISettleTaskState {
  message: string | null;
  loading: boolean;
  error: string | null;
}

export const useSettleTask = () => {
  const [state, setState] = useState<ISettleTaskState>({
    message: null,
    loading: false,
    error: null,
  });

  const settleTask = async (taskId: number, participantId: number, status: "completed" | "decline", wallet: string) => {
    setState({ ...state, loading: true });
    try {
      const request = await fetch(`${BASEURL}/settle`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "wallet": wallet,
        },
        body: JSON.stringify({ taskId, participantId, status }),
      });
      const response = await request.json();
      console.log('response', response);
      setState({ error: null, message: response.message, loading: false });
      location.reload();
    } catch (error) {
      setState({ loading: false, error: (error as Error).message, message: null });
    }
  };

  return { settleTask, state };
}