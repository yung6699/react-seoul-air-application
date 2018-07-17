module.exports = {
    "parser": "babel-eslint",
    "env": {
        "browser": true,
        "es6": true,
        "amd": true
    },
    "extends": [
        "eslint:recommended", "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": ["react"],
    "rules": {
        "arrow-body-style": 'off', // arrow body 쓸거임
        "indent": ["error", 4],
        "linebreak-style": ["error", "unix"],
        "quotes": ["off", "single", "double"],
        "semi": ["error", "always"]
    }
};