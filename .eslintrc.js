module.exports = {
    "parser": "babel-eslint",
    "env": {
      "browser": true,
      "es6": true,
      "node":true
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

      'no-console': 'warn',
      'no-alert': 'off',
      'no-confirm': 'off',
      'no-unused-vars': 'error',
      'no-underscore-dangle': 'off', // underscore 를 쓸거고 private 변수 앞에서 쓸거임
      

      "arrow-body-style": 'off', // arrow body 쓸수있도록 
      "indent": ["error", 2], // 들여쓰기
      "linebreak-style": ["error", "unix"],
      "quotes": ["off", "single", "double"], // 콤마 관련에러 끄기
      "semi": ["error", "always"], // 세미콜론 안붙이면 에러

      'react/jsx-filename-extension': 'off', // jsx는 따로 확장자명을 두고 써라
      'react/no-render-return-value': 'off', // { }없으면 그냥 리턴인데 자꾸 리턴하라해서 끔
    }
  };