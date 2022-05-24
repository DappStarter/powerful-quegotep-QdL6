require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea knife sun tooth guard render remind concert grace derive tackle skirt'; 
let testAccounts = [
"0x0f6b13b43e8d958b211e8d7e268167a0b99ad4e0f3e3230daa256a69f06b1b9f",
"0x1ce7bb958c3701f2e08efb0cbc461d632416f97cdc643c260fb09b8efde4aed2",
"0x34cb52509b964c60e065f7eacdd1a0f741f76e722ef734276bc011028414dea7",
"0x9cf1c14067cffedb9fb237d2b7d9e26b81f7083d61ad8af8cf11b39fc60b3914",
"0xe4c73bab7610246a58708b52e93ac9efb152ecbdca6198faaf0a675fa60c365d",
"0x61cfdc3f71c20d11108d8072986bf79e5d0a769c38f5c1b53f6f915b7c6db559",
"0x2918367ba5731824e56faa69fdf20a8c8049546d8c4f5fd52df24a79dcf69ea7",
"0x7b2af03c4214cf6a0bb8974b52df96209c786ce7dcf664a93f2784192d8fa87c",
"0xfe648f113e61c6941d03cf9c7869f8a084252ee0cbe8f22b12730629e4a83ff0",
"0xef5d4711b8a905e8df769362d752ca934e44f56304a0274085044809d6a2fee6"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

