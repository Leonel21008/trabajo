module.exports = {
	globDirectory: 'img/',
	globPatterns: [
		'**/*.{jpg,jpeg,png}'
	],
	swDest: 'img/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};