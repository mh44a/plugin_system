const fs = require('fs');
const CryptoJS = require('crypto-js');

function encryptFile(filePath, password, outputFilePath) {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.error("Dosya okunamadı:", err);
      return;
    }

    const b64_file_content = data.toString('base64');
    const encrypted = CryptoJS.AES.encrypt(b64_file_content, password).toString();

    fs.writeFile(outputFilePath, encrypted, (err) => {
      if (err) {
        console.error("Şifrelenmiş dosya yazılamadı:", err);
      } else {
        console.log(`Şifrelenmiş dosya başarıyla yazıldı: ${outputFilePath}`);
      }
    });
  });
}

const inputFilePath = 'testPlugin.js';
const password = 'your_password';
const outputFilePath = 'plugin.gjs';

encryptFile(inputFilePath, password, outputFilePath);
