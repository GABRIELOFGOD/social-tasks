"use client";
import { useGlobalContext } from "@/context/GlobalContext";
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
  const { setGlobalLoading } = useGlobalContext();
  
  const [state, setState] = useState<IAuthState>({
    user: null,
    loading: false,
    error: null,
  });

  const authUser = async () => {
    setState({ ...state, loading: true });
    setGlobalLoading(true);
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
      setGlobalLoading(false);
      return response.user as IUser;
    } catch (error) {
      setState({ loading: false, error: (error as Error).message, user: null });
      setGlobalLoading(false);
    }
  }

  useEffect(() => {
    if (isConnected) {
      authUser();
    }
  }, [isConnected]);

  return state;
  
}