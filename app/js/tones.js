/**
 * Tones Class
 */
class Tones {
	constructor () {
		this.tones = [
			'c',
			'd-',
			'd',
			'e-',
			'e',
			'f',
			'g-',
			'g',
			'a-',
			'a',
			'b-',
			'b'
		]

	}

	_modulate( x, y ) {
		var result = x - y
		if ( result < 0 )
			result += 12
		else if ( result > 0 )
			result -= 12
		return result
	}

	getAlphaTone(tone, relationship) {
		return this.tones[ this.getTone( tone, relationship ) ]
	}

	getTone(tone, relationship) {
		var x = 0
		this.tones.forEach((v, k) => {
			if (tone === v)
				x = k
		})
		return this._modulate( x, relationship )
	}

}

module.exports = new Tones
