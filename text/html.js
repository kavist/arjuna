
const Entities = require('html-entities').XmlEntities;
const { htmlToText } = require('html-to-text');

class Html 
{

  static encode(text)
  {
		if (!text || typeof text !== "string") {
			throw new Error('Invalid params');
		}
		return Entities.encode(text);
	}

	static decode(text)
  {
		if (!text || typeof text !== "string") {
			throw new Error('Invalid params');
		}
		return Entities.decode(text);
	}

	static toText(html)
  {
		if (!html || typeof html !== "string") {
			throw new Error('Invalid params');
		}
		return htmlToText(html);
	}

}

module.exports = Html;
