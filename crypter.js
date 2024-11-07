const crypto = require('crypto');
const fs = require('fs');
const Cryptify = require('cryptify');

const algorithm = 'aes-256-ctr';
const password = 'e7G8NcL7-b9a1-4J9S-8C5C-fP29L10GbbN3';

const instance = new Cryptify('testPlugin.js', password);
instance
  .encrypt()
  .then((files) => {
    fs.writeFileSync('testPlugin_encoded.js', files[0]);
    console.log('Encryption successful');
  })
  .then(() => instance.decrypt())
  .then((files) => {
    console.log(files[0])
  })
  .catch((e) => console.error(e));