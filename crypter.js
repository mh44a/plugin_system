// Node.js ile örnek AES-256 şifreleme
const crypto = require('crypto');
const fs = require('fs');

const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32); // 256 bit anahtar
const iv = crypto.randomBytes(16); // 128 bit iv

// Plugin dosyasını okuyun
const pluginCode = fs.readFileSync('testPlugin.js', 'utf8');

// Şifreleme işlemi
const cipher = crypto.createCipheriv(algorithm, key, iv);
let encrypted = cipher.update(pluginCode, 'utf8', 'base64');
encrypted += cipher.final('base64');

// Şifreli veriyi ve anahtarı kaydedin
fs.writeFileSync('encryptedPlugin.js.enc', encrypted);
fs.writeFileSync('pluginKey.json', JSON.stringify({ key: key.toString('base64'), iv: iv.toString('base64') }));
