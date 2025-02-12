"use client";
import { BASEURL } from "@/utils/constants";
import { useState } from "react";

export interface StartBotState {
  loading: boolean;
  error: string | null;
}

export const useStartBot = () => {
  const [state, setState] = useState<StartBotState>({
    loading: false,
    error: null,
  });
  
  const start = async (id: number) => {
    try {
      const request = await fetch(`${BASEURL}/bot/${id}`);
      const response = await request.json();
      if (!request.ok) {
        setState({ loading: false, error: response.message });
        return;
      }

      if (response.status !== "success") {
        setState({ loading: false, error: response.message });
      }
    } catch (error) {
      setState({ loading: false, error: (error as Error).message });
    }
  }

  return { start, ...state };

}