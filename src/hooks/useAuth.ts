"use client";
import { IUser } from "@/model/userTypes";
import { BASEURL } from "@/utils/constants";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";

interface IAuthState {
  user: IUser | null;
  loading: boolean;
  error: string | null;
}

export const useAuth = () => {
  const { isConnected, address } = useAccount();
  
  const [state, setState] = useState<IAuthState>({
    user: null,
    loading: false,
    error: null,
  });

  const authUser = async () => {
    setState({ ...state, loading: true });
    try {
      const request = await fetch(`${BASEURL}/auth`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ wallet: address }),
      });
      const response = await request.json();
      if (!request.ok) {
        throw new Error(response.message);
      }
      if (response.status !== "success") throw new Error(response.message);
      setState({
        user: response.user as IUser,
        loading: false,
        error: null,
      });
      return response.user as IUser;
    } catch (error: any) {
      setState({ ...state, loading: false, error: error.message });
    }
  }

  useEffect(() => {
    if (isConnected) {
      authUser();
    }
  }, [isConnected]);

  return state;
  
}