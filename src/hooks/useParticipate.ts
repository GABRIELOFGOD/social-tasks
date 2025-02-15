"use client";

import { BASEURL } from "@/utils/constants";
import { useState } from "react";

interface IUseParticipate {
  message: string | null;
  loading: boolean;
  error: string | null;
  taskSuccess: boolean;
}

export const useParticipate = () => {
  const [state, setState] = useState<IUseParticipate>({
    message: null,
    loading: false,
    error: null,
    taskSuccess: false,
  });

  const participate = async (taskId: number, username: string, wallet: string) => {
    
    try {
      setState({ loading: true, error: null, message: null, taskSuccess: false });
      const request = await fetch(`${BASEURL}/tasks/participate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          taskId,
          username,
          wallet: wallet,
        }),
      });

      const response = await request.json();
      console.log('response', response);
      if (!request.ok) {
        throw new Error(response.message);
      }
      if (response.status !== 'success') throw new Error(response.message);
      setState({ ...state, error: null, message: 'Task added successfully', taskSuccess: true });
    } catch (error) {
      setState({ loading: false, error: (error as Error).message, message: null, taskSuccess: false });
    }
  };

  return { state, participate };
};