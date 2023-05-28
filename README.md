
# MediBloc

 Blockchain-based medical record storage for patients and insurance companies
 
## 📄Index

- [About](#about-the-project)
  - [Built With](#built-with)
- [Setting up the Project](#setting-up-the-project)
  - [Pre-Requisites](#prerequisites)
  - [Running the Project](#running-the-project)


 ## About The Project

MediBloc is designed to revolutionize the way patients and insurance providers manage and access medical records. 
By leveraging the power of blockchain technology, we provide a secure and transparent platform for storing and sharing medical data

### Built With

Following technologies and libraries are used for the development of this project.

- [React](https://reactjs.org/)
- [Solidity](https://soliditylang.org/)
- [Tailwind](https://tailwindcss.com/)
- [Truffle](https://trufflesuite.com/)
- [Infura](https://www.infura.io/)
- [Mocha](https://mochajs.org/)
- [Chai](https://www.chaijs.com/)

## Setting up the Project

Follow the steps below to setup the project

### Prerequisites

- Install and Setup Metamask extension in your browser
- Install and Setup Ganache in you local system 

### Running the project


1. **Fork** and **clone** the project to your local system
2.  Install Truffle

```
npm i -g truffle
```

3. Run the following commands to install the dependencies
```
npm run client:install
npm run truffle:install
```
4. Create new API key, choose IPFS network from Infura dashboard.

5. Obtain Infura API Key, API Secret and create a dedicated gateway for your project. Create a .env file in client.

```
REACT_APP_INFURA_PROJECT_ID = <Your API key>
REACT_APP_INFURA_API_KEY_SECRET = <Your API Secret>
REACT_APP_INFURA_DEDICATED_GATEWAY = <Your dedicated gateway URL>
```
6. Run the following commands to Deploy the Smart Contract and Start the project
```
npm run truffle:migrate
npm run client:start
```
7. Connect Metamask to Ganache by adding a new network and configuring it to connect to localhost:7545
8. Now import acccounts from Ganache to Metamask wallet'
9. Project is successfully running at http://localhost:3000/ 








 

 
