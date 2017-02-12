//The crypto module provides cryptographic functionality that includes a set of wrappers
// for OpenSSL's hash, HMAC, cipher, decipher, sign and verify functions.
//-Node Js

function app(){
  secret = 'Fuad Aji Pratomo';
  //Some secret string

  hash = crypto.createHmac('sha256', secret)
                     .update('Good for Life')
                     .digest('hex');
  //What is Hmac, find it out in Google
  console.log(hash);
}

try {
  crypto = require('crypto');   //Access the crypto module
  app();
} catch (err) {
  console.log('crypto support is disabled!');
}
