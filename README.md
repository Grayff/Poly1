## POLY1 Project

This project aims to create an NFT collection and store the items on IPFS using pinata.cloud, deploy an ERC721 contract to the Goerli Ethereum Testnet, and perform various operations on the collection.


## Contract Information

The provided contract code `RR.sol` defines an ERC721 contract named "Grayff" with the symbol "gyf". It extends the OpenZeppelin ERC721 and Ownable contracts.

The contract includes the following features:

- Minting of tokens by the owner using the `Minting` function.
- A constant `uri` pointing to the IPFS URI for token metadata.
- A constant `prompt` containing the prompt description.
- A `promptDescription` function to retrieve the prompt description.

## Installation and Usage

1. Clone this repository:

   ```bash
   git clone https://github.com/Grayff/Poly1.git
   cd Poly1

2. Install dependencies (if not done already):

    ```bash
   npm install

3. Deploy the contract to the Goerli Ethereum Testnet by running this command :

   
      ```bash
      npx hardhat run scripts/deploy.js --network goerli.
4. For minting token and producing description, run this command :
     

   ```bash
   npx hardhat run scripts/mint.js --network goerli.
5. Run these commands next in the terminal :
   
       
       npx hardhat run scripts/approveDeposite.js --network goerli

       npx hardhat run scripts/getBalance.js --network goerli
                                   
   
6. Interact with the contract on the Goerli Testnet using your preferred Ethereum wallet or scripting.


## Contributing

If you find a bug or have a suggestion, feel free to open an issue or submit a pull request.  


## License

This smart contract is released under the MIT License. 
