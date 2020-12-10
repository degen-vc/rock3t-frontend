import Web3 from "web3";

/**
 * init and return Web3 object
 */
export const getWeb3 = () => {
  return new Promise(async (resolve, reject) => {
    // Wait for loading completion to avoid race conditions with web3 injection timing.
    // Modern dapp browsers...
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);
      try {
        // Request account access if needed
        await window.ethereum.enable();
        // Acccounts now exposed
        resolve(web3);
      } catch (error) {
        reject(error);
      }
    }
    else if (window.web3) {
      // Use Mist/MetaMask's provider.
      const web3 = window.web3;
      resolve(web3);
    }
  });
};

/**
 * Convert string to Hex
 */
export const toHex = (str) => {
  var x = "";
  for (var i=0;i<str.length;i++) x += ("0" + str.charCodeAt(i).toString(16)).slice(-2);
  return x;
};