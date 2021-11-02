import logo from './logo.svg';
import './App.css';
import { useEthers, DAppProvider, ChainId } from '@usedapp/core';

function App() {
  const { account, accessBrowserWallet } = useEthers();
  const isConnected = account !== undefined;

  return (
    <DAppProvider config={{
      supportedChains: [ChainId.Mainnet]
    }}>
      <div className="App">
        <header className="App-header">
          {isConnected ? <button>Connected!</button> : <button onClick={accessBrowserWallet}>Connect</button>}
        </header>
      </div>
    </DAppProvider>
  );
}

export default App;
