const css = require('glamor')

css.default = css.style
Object.keys(css).forEach(key => {
	if (key !== 'default') {
		css.default[key] = css[key]
	}
})

module.exports = css
