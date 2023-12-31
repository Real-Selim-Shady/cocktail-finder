
// eslint-disable-next-line no-undef
module.exports = {
	preset: "ts-jest",
	testEnvironment: "jsdom",
	moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node", "css"],
	moduleNameMapper: {
		"\\.css$": "identity-obj-proxy",
		//"axios": "axios/dist/axios.cjs",
	},
	transformIgnorePatterns: ["node_modules/ (?!axios)"],
};