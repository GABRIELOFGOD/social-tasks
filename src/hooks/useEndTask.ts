"use client";

import { BASEURL } from "@/utils/constants";
import { useState } from "react";

interface IAuthState {
  loading: boolean;
  error: string | null;
}

export const useEndTask = () => {
  const [state, setState] = useState<IAuthState>({
    loading: false,
    error: null
  });

  const endTask = async (taskId: number) => {
    setState({
      error: null,
      loading: true
    });
    try {
      const request = await fetch(`${BASEURL}/end`);
      const response = await request.json();
      if (!request.ok) {
        setState({
          loading: false,
          error: response.message
        });
      }

      if (response.status != "success") {
        setState({
          loading: false,
          error: response.message
        });
      }

      setState({
        loading: false,
        error: null
      });
    } catch (error: any) {
      setState({
        loading: false,
        error: error.message
      });
    }
  }

  return {
    ...state, endTask
  }
  
}