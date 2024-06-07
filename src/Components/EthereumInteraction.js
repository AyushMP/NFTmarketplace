import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import NFTContract from "../Contracts/NFT.json"; // Import your NFT contract ABI

function EthereumInteraction() {
  const [web3, setWeb3] = useState(null);
  const [nftContract, setNFTContract] = useState(null);
  const [accounts, setAccounts] = useState([]);
  const [nftOwner, setNFTOwner] = useState('');

  useEffect(() => {
    async function connectToMetaMask() {
      if (window.ethereum) {
        try {
          // Initialize Web3
          const web3Instance = new Web3(window.ethereum);
          setWeb3(web3Instance);

          // Request account access
          const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
          setAccounts(accounts);

          // Initialize NFT contract
          const networkId = await web3Instance.eth.net.getId();
          const deployedNetwork = NFTContract.networks[networkId];
          const contract = new web3Instance.eth.Contract(
            NFTContract.abi,
            deployedNetwork && deployedNetwork.address
          );
          setNFTContract(contract);

          // Get owner of NFT
          if (contract) {
            const owner = await contract.methods.owner().call();
            setNFTOwner(owner);
          }
        } catch (error) {
          console.error('Error connecting to MetaMask:', error);
        }
      } else {
        console.error('MetaMask is not installed');
      }
    }
    connectToMetaMask();
  }, []);

  return (
    <div>
      <h2>Ethereum Interaction</h2>
      {web3 ? (
        <p>Connected to Ethereum network</p>
      ) : (
        <p>Not connected to Ethereum network</p>
      )}

      {accounts.length > 0 ? (
        <p>Connected account: {accounts[0]}</p>
      ) : (
        <p>No accounts connected</p>
      )}

      {nftContract && (
        <div>
          <p>NFT Contract Address: {nftContract._address}</p>
          <p>Owner of NFT Contract: {nftOwner}</p>
        </div>
      )}
    </div>
  );
}

export default EthereumInteraction;