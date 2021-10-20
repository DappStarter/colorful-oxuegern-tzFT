require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kiwi bridge tooth guard render remember upper install clinic sun tornado'; 
let testAccounts = [
"0x0db9343d9eb2d3190832958862f4e4e86d1239cc67ef3518da84b7907942b49f",
"0x35c0a358ee973f4612a93b3f0983787018268e95ed060f433fa23fdaab389fda",
"0xb66f323605698291ec1b3661c5ff6fb913c1f1e073fb0d8063aba7c31c98ca79",
"0x4d79089141e39e42ac3b939ad8a57959cf9398d799a2d515b3dd4d4227059238",
"0x27ca82f1c6dfa278b2cd7ee3bb5a3f30f8241a7b06e602108f1b84157bc21d1f",
"0x697634b7b74f44f5bb2720f36ac71319900a7d9ca4cd143cb17655c71b17ec03",
"0x30238085168f397f94cb233b31b1dd63a9e3b9543d507bc040a2c90556e4ce22",
"0xb14029440e84842a5a779bdbc577a704fc0587b39afbf195bd0b9b071b6034ba",
"0x68dbcc3676a2f8c7f7ee7a42ae5990a1899bb8970635f49b19a1fc43b056ff0a",
"0x8d67bcc0332fcac7941101e1ac3276f7082f73e465361d0c3b21a6d802958e3c"
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

