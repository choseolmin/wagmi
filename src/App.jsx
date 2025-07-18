import { useAccount } from 'wagmi';
import Profile from './components/Profile';
import Header from './components/Header';
import Tipping from './components/Tipping';
import SendKaia from './components/SendKaia';

function App() {
  const { isConnected } = useAccount();

  return (
    <div className="app-center-layout" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <h1 style={{marginBottom:32}}>Wagmi 데모</h1>
      <Header />
      {isConnected && (
        <main style={{width:'100%', display:'flex', flexDirection:'column', alignItems:'center'}}>
          <Profile />
          <SendKaia />
          <Tipping />
        </main>
      )}
    </div>
  );
}

export default App;