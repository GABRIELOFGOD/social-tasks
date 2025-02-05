"use client";

import { BASEURL } from "@/utils/constants";
import { useEffect, useState } from "react";

interface IUseAddTasks {
  message: string | null;
  loading: boolean;
  error: string | null;
}

export interface IAddTask {
  taskType: string;
  taskAction: string;
  taskDescription: string;
  taskPoints: number;
  taskUsername: string;
  taskUrl: string;
  mandatoryTask: boolean;
  wallet: string;
}

export const useAddTask = () => {
  const [state, setState] = useState<IUseAddTasks>({
    message: null,
    loading: false,
    error: null,
  });

  // useEffect(() => {
  const addTask = async (prop: IAddTask) => {
    try {
      setState({ loading: true, error: null, message: null });
      const request = await fetch(`${BASEURL}/tasks`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: prop.taskType,
          description: prop.taskDescription,
          url: prop.taskUrl,
          username: prop.taskUsername,
          wallet: prop.wallet,
          points: prop.taskPoints,
          action: prop.taskAction,
          mandatory: prop.mandatoryTask,
        }),
      });

      const response = await request.json();
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

    // addTask();
  // }, []);

  return {state, addTask};  
};