import './App.css';
import { DAppProvider, ChainId } from '@usedapp/core';
import { Header } from './components/Header';

function App() {
  return (
    <DAppProvider config={{
      supportedChains: [ChainId.Mainnet, ChainId.Ropsten, ChainId.Rinkeby, ChainId.Kovan, ChainId.Ganache, ChainId.Localhost, ChainId.Goerli],
    }}>
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
      </div>
    </DAppProvider>
  );
}

export default App;
