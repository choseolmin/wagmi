import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function Header() {
  return (
    <header style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
      <ConnectButton />
    </header>
  );
}
