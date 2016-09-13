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

	_modulate( result ) {
		if ( result < 0 ) {
			result += 12
		} else if ( result >= 12 ) {
			result -= 12
		}
		return result
	}

	getTone(tone) {
		let x = 0
		this.tones.forEach((v, k) => {
			if (tone === v)
				x = k
		})
		return x
	}

	/**
	 * Transform the row into the correct modulation
	 * @param  {int}   key   Current iteration
	 * @param  {array} array Array of tones
	 * @return {array}       Modulated array of tones
	 */
	transformRow( key, array ) {
		// How far we need to module each row
		const primary_key = this._modulate(this.getTone(array[0]) - this.getTone( array[key] ))
		const result = [];
		array.forEach((v, k) => {
			result[k] = this.tones[this._modulate( this.getTone(v) + primary_key )]
		})
		return result;
	}

	transformRowInversion( key, array ) {
		return this.transformRow(key, array).reverse()
	}

}

module.exports = new Tones
