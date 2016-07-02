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
		else if ( result > 12 )
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
		if ('undefined' !== typeof relationship)
			return this._modulate( x, relationship )
		else
			return x
	}
	getRelationship(a, b) {
		var x = this.tones[a] - this.tones[b]
		if ( x > 12 ) {
			x -= 12
		} else if ( 0 > x ) {
			x += 12
		}
		return x;
	}

	getRow(tones, relationship) {
		var x = []
		tones.forEach((v, k) => {
			x[k] = this.getAlphaTone(v, relationship)
		})
		return x
	}

	getRowInversion(tones, relationship) {
		var x = []
		tones.forEach((v, k) => {
			var y = this.getTone(tones[k]) - this.getTone(tones[k+1])
			y -= this.getTone(tones[k])
			if (y > 12) {
				y -= 12
			} else if (0 > y) {
				y += 12
			}
			x.push(this.tones[y])
		})
		return x
	}

}

module.exports = new Tones
