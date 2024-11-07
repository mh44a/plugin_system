const crypto = require('crypto');
const fs = require('fs');

const algorithm = 'aes-256-ctr';
const password = 'e7G8NcL7-b9a1-4J9S-8C5C-fP29L10GbbN3';

const encrypt = (data) => {
  const cipher = crypto.createCipher(algorithm, password);
  let encrypted = cipher.update(data, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
};

const pluginData = fs.readFileSync('testPlugin.js', 'utf8');
const encryptedData = encrypt(pluginData);

fs.writeFileSync('encryptedPlugin.js', encryptedData);
console.log("Plugin şifrelendi.");
