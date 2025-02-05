"use client";

import { IUser } from "@/model/userTypes";
import { BASEURL } from "@/utils/constants";
import { useEffect, useState } from "react";

interface IUseGetUsers {
  users: IUser[];
  loading: boolean;
  error: string | null;
}

export const useGetUsers = () => {
  const [state, setState] = useState<IUseGetUsers>({
    users: [],
    loading: false,
    error: null,
  });

  useEffect(() => {
    const getUsers = async () => {
      setState({ ...state, loading: true });
      try {
        const request = await fetch(`${BASEURL}/users`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const response = await request.json();
        setState({ users: response.data, error: null, loading: false });
      } catch (error: any) {
        setState({ ...state, loading: false, error });
      }
    };
    getUsers();
  }, []);

  return state;
}