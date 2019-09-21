module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": ["react-app"],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "no-console": "error",
        "default-case": "warn",
        "eqeqeq": "warn",
        "no-unused-labels": "error",
        "no-unused-vars": "error"       
    }   
};