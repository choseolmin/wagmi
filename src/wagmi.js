import { http, createConfig } from 'wagmi';
import { defineChain } from 'viem';
import { injected, metaMask, safe } from 'wagmi/connectors';

// 카이로스 체인 정의
export const kairos = defineChain({
  id: 2425, // 예시: 실제 카이로스 체인 ID로 변경 필요
  name: 'Kairos',
  network: 'kairos',
  nativeCurrency: {
    name: 'Kaia',
    symbol: 'KAIA',
    decimals: 18,
  },
  rpcUrls: {
    default: { http: ['https://public-en-kairos.node.kaia.io'] },
    public: { http: ['https://public-en-kairos.node.kaia.io'] },
  },
  blockExplorers: {
    default: { name: 'Kairos Explorer', url: 'https://explorer.kairos.kaia.io' },
  },
  testnet: false,
});

export const config = createConfig({
  chains: [kairos],
  connectors: [
    injected(),
    metaMask(),
    safe(),
  ],
  transports: {
    [kairos.id]: http('https://public-en-kairos.node.kaia.io'),
  },
});