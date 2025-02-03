// import { bscTestnet } from "viem/chains";
// import { cookieStorage, createConfig, createStorage, http } from "wagmi";
// import { injected, metaMask, coinbaseWallet, walletConnect } from "wagmi/connectors";

// // import { bscTestnet } from "viem/chains";

// export const getConfig = () => {
//   return createConfig({
//     chains: [bscTestnet],
//     transports: {
//       [bscTestnet.id]: http(),
//     },
//     connectors: [
//       injected(),
//       metaMask(),
//       coinbaseWallet(),
//       walletConnect({
//         projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_ID ?? "",
//       }),
//     ],
//     storage: createStorage({
//       storage: cookieStorage,
//     }),
//     ssr: true,
//   });
// };

// declare module "wagmi" {
//   interface Register {
//     config: ReturnType<typeof getConfig>;
//   }
// }

import { cookieStorage, createStorage } from "wagmi";
import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";
import {
  bscTestnet,
} from "@reown/appkit/networks";

export const projectId = process.env.NEXT_PUBLIC_WALLET_CONNECT_ID;

if (!projectId) {
  throw new Error("Project ID is not set");
}

export const networks = [bscTestnet];

export const wagmiAdapter = new WagmiAdapter({
  storage: createStorage({
    storage: cookieStorage,
  }),
  ssr: true,
  networks,
  projectId
});

export const config = wagmiAdapter.wagmiConfig;
