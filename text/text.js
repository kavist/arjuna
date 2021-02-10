
const slugify = require('slugify');

class Text 
{

  static random(length = 1)
  {
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
		let regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
		let match = url.match(regExp);
		return (match && match[2].length == 11);
	}

	static getYoutubeVideoId(url)
	{
		let regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
		let match = url.match(regExp);
		if (!(match && match[2].length == 11)) {
			throw new Error("Invalid youtube url");
		}
		return match[2];
	}

	static slugify(text)
	{
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
