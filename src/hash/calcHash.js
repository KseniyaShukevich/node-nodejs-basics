import crypto from 'crypto';

const calculateHash = async (toHash) => {
    // encode as UTF-8
    const msgBuffer = new TextEncoder().encode(toHash);                    

    // hash the message
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);

    // convert ArrayBuffer to Array
    const hashArray = Array.from(new Uint8Array(hashBuffer));

    // convert bytes to hex string                  
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

    // log hashHex;
    console.log(hashHex)
};

await calculateHash('Hello world!');
