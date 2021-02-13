
const Entities = require('html-entities').XmlEntities;
const { fromString } = require('html-to-text');

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
		return fromString(html);
	}

}

module.exports = Html;
