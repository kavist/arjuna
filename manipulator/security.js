const crypto = require('crypto');

class Security
{

  static createRandomKey()
  {
    return crypto.randomBytes(32);
  }

  static createRandomSecret()
  {
    return crypto.randomBytes(16);
  }

  static encrypt(params)
  {
    if (!params || !params.text || 
      !params.key || !params.secret) {
			throw new Error("Invalid params");
		}
		let cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(params.key), params.secret);
		let encrypted = cipher.update(params.text);
		encrypted = Buffer.concat([encrypted, cipher.final()]);
		return encrypted.toString('hex');
  }

  static decrypt(params)
  {
    if (!params.text || !params.key || !params.secret) {
			throw new Error("Invalid params");
		}
		let secret = Buffer.from(params.secret.toString('hex'), 'hex');
		let encryptedText = Buffer.from(params.text, 'hex');
		let decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(params.key), secret);
		let decrypted = decipher.update(encryptedText);
		decrypted = Buffer.concat([decrypted, decipher.final()]);
		return decrypted.toString();
  }

}

module.exports = Security;
