// // "use client";

// // import '@rainbow-me/rainbowkit/styles.css';
// // import { getConfig } from "@/utils/wagmi";
// // import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// // import React from "react";
// // import { useState, ReactNode } from "react";
// // import { State, WagmiProvider } from "wagmi";

// // const Providers = (prop: { 
// //   children: ReactNode;
// //   initialState?: State
// //  }) => {
// //   const [config] = useState(getConfig());
// //   const [queryClient] = useState(() => new QueryClient());
  
// //   return (
// //     <WagmiProvider config={config} initialState={prop.initialState}>
// //       <QueryClientProvider client={queryClient}>
// //         {prop.children}
// //       </QueryClientProvider>
// //     </WagmiProvider>
// //   )
// // }

// // export default Providers

// "use client";

// import React, { type ReactNode } from "react";
// // import { useState } from "react";
// import { wagmiAdapter, projectId } from "@/utils/wagmi";
// import { createAppKit } from "@reown/appkit";
// import { bscTestnet } from "@reown/appkit/networks";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { cookieToInitialState, WagmiProvider, type Config } from "wagmi";

// const queryClient = new QueryClient();

// if (!projectId) {
//   throw new Error("Project ID is not set");
// }

// // const metadata = {
// //   name: "UCCCHAIN",
// //   description: "UCCCHAIN",
// //   url: "https://uccchain.com",
// //   icon: "https://uccchain.com/favicon.ico",
// // }

// // const modal = createAppKit({
// //   adapters: [wagmiAdapter],
// //   projectId,
// //   networks: [bscTestnet],
// //   features: {
// //     analytics: false,
// //     email: true,
// //     socials: ["google", "x", "discord", "github"],
// //     emailShowWallets: true
// //   },
// //   themeMode: "light",
// // });

// const Providers = (prop: { 
//   children: ReactNode;
//   cookies: string | null;
//  }) => {
//   const initialState = cookieToInitialState(wagmiAdapter.wagmiConfig as Config, prop.cookies);
  
//   return (
//     <WagmiProvider config={wagmiAdapter.wagmiConfig as Config} initialState={initialState}>
//       <QueryClientProvider client={queryClient}>
//         {prop.children}
//       </QueryClientProvider>
//     </WagmiProvider>
//   )
// }

// export default Providers
