export const kairosChain = {
  id: 1001,
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
  testnet: true,
}; 