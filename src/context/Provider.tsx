"use client";

import { WagmiProvider, State } from "wagmi";
import { getConfig } from "@/utils/wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode, useState } from "react";

export function Providers(prop: {
  children: ReactNode;
  initialState?: State;
}) {
  const [config] = useState(() => getConfig());
  const [queryClient] = useState(() => new QueryClient());

  return (
    <WagmiProvider config={config} initialState={prop.initialState}>
      <QueryClientProvider client={queryClient}>
        {prop.children}
      </QueryClientProvider>
    </WagmiProvider>
  )
}