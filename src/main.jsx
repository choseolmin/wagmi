import React from 'react';
import ReactDOM from 'react-dom/client';
import { WagmiProvider, createConfig, http } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RainbowKitProvider, getDefaultWallets } from '@rainbow-me/rainbowkit';
import App from './App';
import './index.css';
import { kairosChain } from './kairosChain';

const chains = [kairosChain];

const { connectors } = getDefaultWallets({
  appName: 'Wagmi Tutorial',
  projectId: 'fc152f5e4126aab8a36eca60c0f2d9f6',
  chains,
});

const wagmiConfig = createConfig({
  connectors,
  publicClient: http('https://public-en-kairos.node.kaia.io'),
  chains, 
});

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <WagmiProvider config={wagmiConfig}>
    <QueryClientProvider client={queryClient}>
      <RainbowKitProvider chains={chains}>
        <App />
      </RainbowKitProvider>
    </QueryClientProvider>
  </WagmiProvider>
);
