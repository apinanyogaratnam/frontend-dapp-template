import { useEthers } from '@usedapp/core';

export const Header = () => {
    const { account, activateBrowserWallet } = useEthers();
    const isConnected = account !== undefined;

    return (
        <div>
            {
                isConnected ? 
                <button>Connected!</button> :
                <button onClick={activateBrowserWallet}>Connect</button>
            }
        </div>
    );
};