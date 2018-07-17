module.exports = {
    "parser": "babel-eslint",
    "env": {
        "browser": true,
        "es6": true,
        "amd": true  // require 사용
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
        "arrow-body-style": 'off', // arrow body 쓸수있도록 
        "indent": ["error", 4], // 들여쓰기
        "linebreak-style": ["error", "unix"],
        "quotes": ["off", "single", "double"], // 콤마 관련에러 끄기
        "semi": ["error", "always"] // 세미콜론 안붙이면 에러
    }
};