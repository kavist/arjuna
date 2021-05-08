
const { 
	v1, v4, 
	validate, 
	version 
} = require('uuid');
const slugify = require('slugify');

class Text 
{

  static random(length = 1)
  {
		if (!length || typeof length !== "number") {
			throw new Error('Invalid length');
		}
		let result           = '';
		let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
		let charactersLength = characters.length;
		for ( let i = 0; i < length; i++ ) {
			result += characters.charAt(Math.floor(Math.random() * charactersLength));
		}
		return result;
	}

	static isValidYoutubeUrl(url)
	{
		if (!url || typeof url !== "string") {
			throw new Error('Invalid url');
		}		
		let regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
		let match = url.match(regExp);
		return (match !== null && Array.isArray(match) && 
			match.length > 2 && match[2].length == 11);
	}

	static getYoutubeVideoId(url)
	{
		if (!url || typeof url !== "string") {
			throw new Error('Invalid url');
		}
		let regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
		let match = url.match(regExp);
		if (!(match && match[2].length == 11)) {
			throw new Error("Invalid youtube url");
		}
		return match[2];
	}

	static slugify(text)
	{
		if (!text) {
			throw new Error('Invalid text');
		}
		return slugify(text, {
			replacement: '-',
			remove: undefined,
			lower: true,
			strict: false,
			locale: 'id'
		});
	}

	static uuid(version = 'v4')
	{
		if (!version || typeof version !== "string") {
			throw new Error('Invalid version');
		}
		if (!["v1", "v4"].includes(version)) {
			throw new Error('Unsupported uuid version');
		}
		if (version === "v1") {
			return v1();
		}
		else if (version === "v4") {
			return v4();
		}
	}

	/** @return boolean */
	static isValidUuid(uuid)
	{
		if (!uuid || typeof uuid !== "string") {
			throw new Error('Invalid uuid');
		}
		return validate(uuid);
	}

	/** @return integer */
	static getUuidVersion(uuid)
	{
		if (!uuid || typeof uuid !== "string") {
			throw new Error('Invalid uuid');
		}
		return version(uuid);
	}

	/** @return string */
	static mask(params)
  {
    if (!params || !params.value) {
      throw new Error("Invalid params");
    }    
    if (typeof params.value !== "string") {
      throw new Error("Invalid value");
    }
    if (params.masker !== undefined && 
      typeof params.masker !== "string") {
      throw new Error("Invalid masker");
    }
    const masker = params.masker || "*";
    const formatedText = [...params.value];
    const maskerLength = formatedText.length >= 10 ? 3 : 1;
    return formatedText.map((character, index) => {
			/** 
			 * USE MASKER ON FIRST CHARACTER OF THE WORD AND
			 * USE MASKER IN THE MIDDLE OF THE WORD
			 */
      if (index <= maskerLength || index >= formatedText.length - maskerLength) {
        return masker;
      }
      return character;
    }).join("");
  }

}

module.exports = Text;
