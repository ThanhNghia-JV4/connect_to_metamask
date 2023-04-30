import { useState } from 'react';
import './App.css';
import { ethers } from 'ethers';

function App() {
  //properties
  const [walletAddress, setWalletAddress] = useState('');
  // Helper Functions

  // Requests access to the user's META MASK WALLET
  // https://metamask.io
  async function requestAccount(){
    console.log('requesting account...');
    // ❌ Check if Meta Mask Extension exists 
    if(window.ethereum){
      console.log('detected');
      try {
        const account = await window.ethereum.request({
          method: 'eth_requestAccounts',
        });
        setWalletAddress(account[0]);
        // console.log(account);
      } catch (error) {
        console.error('Error connecting...');
      }
    }
    else{
      alert('Metamask not detected');
    }
  }
  
  async function connectWallet(){
    if(typeof window.ethereum !== 'undefined'){ //kiem tra metamask cos ton taij hay ko 
      await requestAccount();

      // const provider = new ethers.providers.Web3Provider(window.ethereum);

    }
  }



  return (
    <div className="App">
      <header className="App-header">
        <button onClick={requestAccount}>Connect Wallet</button>
        <h3>Wallet address: {walletAddress}</h3>
      </header>
    </div>
  );
}

export default App;
