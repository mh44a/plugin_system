const fs = require('fs');
const crypto = require('crypto');

const filePath = 'testPlugin.js';
const fileContent = fs.readFileSync(filePath, 'utf8');

const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16); 

const cipher = crypto.createCipheriv(algorithm, key, iv);
let encrypted = cipher.update(fileContent, 'utf8', 'hex');
encrypted += cipher.final('hex');

const encryptedData = iv.toString('hex') + ':' + encrypted;
const encodedData = Buffer.from(encryptedData, 'hex').toString('utf8');

fs.writeFileSync('testPlugin_crypted.js', encodedData, 'utf8');

console.log('Dosya başarıyla şifrelendi! Anahtar: ' + key.toString('hex') + ' IV: ' + iv.toString('hex'));
