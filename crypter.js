const crypto = require('crypto');
const fs = require('fs');

const algorithm = 'aes-256-ctr';
const password = 'e7G8NcL7-b9a1-4J9S-8C5C-fP29L10GbbN3';

const encrypt = (data) => {
  const cipher = crypto.createCipher(algorithm, password);
  let encrypted = cipher.update(data, 'utf8', 'base64');
  encrypted += cipher.final('base64');
  return encrypted;
};

const pluginData = fs.readFileSync('testPlugin.js', 'utf8');
const encryptedData = encrypt(pluginData);

// Şifreli veriyi base64 formatında kaydediyoruz
fs.writeFileSync('encryptedPlugin.js', encryptedData);