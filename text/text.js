
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

}

module.exports = Text;
