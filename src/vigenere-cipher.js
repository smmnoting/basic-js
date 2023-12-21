const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  direct = true;
  constructor(isDirect) {
    if (isDirect !== undefined) {
      this.direct = isDirect;
    }
  }
  encrypt(message, keyword) {
    if (typeof message !== 'string' || typeof keyword !== 'string' ) {
      throw Error('Incorrect arguments!');
    }
    let counter = 0;
    let encrypedMessage = '';
    message = message.toUpperCase();
    keyword = keyword.toUpperCase();
    
    for (let i = 0; i < message.length; i++) {
      if (/^[A-Z]$/.test(message[i])) {
        encrypedMessage += String.fromCharCode((message.charCodeAt(i) - 65 + keyword.charCodeAt((i - counter) % keyword.length) - 65) % 26 + 65)
      } else {
        encrypedMessage += message[i];
        counter += 1;
      }
    }
    if (!this.direct) {
      return encrypedMessage.split("").reverse().join("");
    }
    return encrypedMessage;
  }

  decrypt(message, keyword) {
    if (typeof message !== 'string' || typeof keyword !== 'string' ) {
      throw Error('Incorrect arguments!');
    }
    let decrypedMessage = '';
    let counter = 0;
    keyword = keyword.toUpperCase();
    for (let i = 0; i < message.length; i++) {
      if (/^[A-Z]$/.test(message[i])) {
        const keyWordChar = keyword.charCodeAt((i - counter) % keyword.length);
        const decrypedCharCode = (message.charCodeAt(i) - keyWordChar) % 26
        if (decrypedCharCode < 0) {
          decrypedMessage += String.fromCharCode(decrypedCharCode + 65 + 26)
        } else {
          decrypedMessage += String.fromCharCode(decrypedCharCode + 65);
        }
      } else {
        decrypedMessage += message[i];
        counter += 1;
      }
    }
    if (!this.direct) {
      return decrypedMessage.split("").reverse().join("");
    }
    return decrypedMessage
  }
}

// const machine = new VigenereCipheringMachine(false);
// console.log(machine.encrypt('attack at dawn!', 'alphonse'))

module.exports = {
  VigenereCipheringMachine
};
