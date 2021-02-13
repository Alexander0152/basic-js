const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(reverse = true) {
    this.reverse = !reverse;
  }

  encrypt(message, key) {
    if(message === undefined || key === undefined) throw new Error;

    var row = 'AABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var table = [];
    table[0] = (" " + row.substring(1)).split("");
    table[1] = (row).split("");
    for (let i = 2; i <= 26; i++) {
      row = row.charAt(2) + row.substring(2) + row.charAt(0);
      table[i] = row.split('');
    }

    var arrMessage = message.split('');
    var arrLongKey = getLongKey(message, key).split('');
    var result = '';

    for (let i = 0; i < arrMessage.length; i++) {
      if (!(/[A-Z]/).test(arrMessage[i].toUpperCase())) {
        result += arrMessage[i];
        continue;
      }
      for (let j = 0; j <= 26; j++) {
        result += (table[j][0] == arrLongKey[i]) ? table[j][table[0].indexOf(arrMessage[i].toUpperCase())] : '';
      }
    }
    return this.reverse ? result.split('').reverse().join('') : result;
  }
  decrypt(message, key) {
    if(message === undefined || key === undefined) throw new Error;

    var row = 'AABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var table = [];
    table[0] = (" " + row.substring(1)).split("");
    table[1] = (row).split("");
    for (let i = 2; i <= 26; i++) {
      row = row.charAt(2) + row.substring(2) + row.charAt(0);
      table[i] = row.split('');
    }

    var arrMessage = message.split('');
    var arrLongKey = getLongKey(message, key).split('');
    var result = '';

    for (let i = 0; i < arrMessage.length; i++) {
      if (!(/[A-Z]/).test(arrMessage[i].toUpperCase())) {
        result += arrMessage[i];
        continue;
      }
      for (let j = 0; j <= 26; j++) {
        if (arrLongKey[i] == table[j][0]) {
          for (let k = 1; k <= 26; k++) {
            result += (table[j][k] == arrMessage[i].toUpperCase()) ? table[0][k] : '';
          }
        }
      }
    }
    return this.reverse ? result.split('').reverse().join('') : result;
  }
}

function getLongKey(message, key) {
  var longKey = "";
  var keyLength = key.length;
  var count = -1;
  for (let i = 0; i < message.length; i++) {
    let ch = message.charAt(i);
    if (ch == ' ') {
      longKey += ' ';
      continue;
    }
    count++;
    if (count == keyLength) {
      count = 0;
    }
    let ch1 = key.charAt(count);
    if (ch1 == ' ') {
      count++;
    }
    if (count == keyLength) {
      count = -1;
    }
    longKey += key.charAt(count);
  }
  return longKey.toUpperCase();
};


module.exports = VigenereCipheringMachine;
