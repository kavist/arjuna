const { isInteger } = require("lodash");
const numeral = require("numeral");

initLocalId();

class Number 
{

  static random(length = 1)
  {
		if (!isInteger(length)) {
			throw new Error("Invalid length");
		}
		let chars = '0123456789';
		let randomNumbers = '';
    for (let i = length; i > 0; --i) {
			randomNumbers += chars[Math.floor(Math.random() * chars.length)];
		}
    return randomNumbers;
	}

	static currency(number, prefix = 'Rp')
	{
		numeral.locale('id');
		return `${prefix}${numeral(number).format('0,00')}`;
	}

}

module.exports = Number;

function initLocalId()
{
	if (numeral.locales['id'] === undefined) {
		numeral.register('locale', 'id', {
			delimiters: {
				thousands: '.',
				decimal: ','
			},
			abbreviations: {
				thousand: 'Rb',
				million: 'Jt',
				billion: 'Mil',
				trillion: 'Tril'
			},
			ordinal: function (number) {
				return number === 1 ? 'er' : 'ème';
			},
			currency: {
				symbol: 'Rp'
			}
		});
	}	
}