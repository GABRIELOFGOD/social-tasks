"use client"; 

import { ITask } from "@/model/tasksTypes";
import { BASEURL } from "@/utils/constants";
import { useEffect, useState } from "react"

interface IUseFetchTasks {
  data: ITask[] | null;
  loading: boolean;
  error: string | null;
}

export const useFetchTasks = () => {
  const [state, setState] = useState<IUseFetchTasks>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchTask = async () => {
      try {
        setState((prev) => ({ ...prev, loading: true }));
        const request = await fetch(`${BASEURL}/tasks`);
        const response = await request.json();
        if (!request.ok) {
          throw new Error(response.message);
        }
        if (response.status !== "success") throw new Error(response.message);
        setState({
          loading: false,
          error: null,
          data: response.tasks
        });
      } catch (error) {
        setState({ data: null, loading: false, error: (error as Error).message });
      }
    }

    fetchTask();
  }, []);

  return state;

}