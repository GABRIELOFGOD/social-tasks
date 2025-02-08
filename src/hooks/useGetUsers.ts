"use client";

import { IUser } from "@/model/userTypes";
import { BASEURL } from "@/utils/constants";
import { useEffect, useState } from "react";

interface IUseGetUsers {
  users: IUser[];
  loading: boolean;
  error: string | null;
}

export const useGetUsers = (wallet: string) => {
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
            "wallet": wallet,
          },
        });
        const response = await request.json();
        setState({ users: response.users, error: null, loading: false });
      } catch (error) {
        setState({ loading: false, error: (error as Error).message, users: [] });
      }
    };
    getUsers();
  }, []);

  return state;
}