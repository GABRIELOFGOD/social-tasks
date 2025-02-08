"use client";

import { useGlobalContext } from "@/context/GlobalContext";
import { BASEURL } from "@/utils/constants";
import { useState } from "react";

interface IUseParticipate {
  message: string | null;
  loading: boolean;
  error: string | null;
}

export const useParticipate = () => {
  const [state, setState] = useState<IUseParticipate>({
    message: null,
    loading: false,
    error: null,
  });

  const participate = async (taskId: number, username: string, wallet: string) => {
    
    try {
      setState({ loading: true, error: null, message: null });
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
      setState({ loading: false, error: null, message: 'Task added successfully' });
      location.reload();
    } catch (error: any) {
      setState({ loading: false, error: (error as Error).message, message: null });
    }
  };

  return { state, participate };
};