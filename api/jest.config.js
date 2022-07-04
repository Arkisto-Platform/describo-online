export default {
    roots: ["src"],
    verbose: true,
    testMatch: ["**/*.spec.js"],
    testPathIgnorePatterns: ["node_modules"],
    watchPathIgnorePatterns: ["\\**/.*(?<!spec).js"],
    moduleNameMapper: {
        "^lodash-es$": "lodash",
    },
};
