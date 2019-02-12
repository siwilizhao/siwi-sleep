[![Build Status](https://travis-ci.org/siwilizhao/siwi-sleep.svg?branch=master)](https://travis-ci.org/siwilizhao/siwi-sleep)
[![npm](https://img.shields.io/npm/v/siwi-sleep.svg)](https://www.npmjs.com/package/siwi-sleep)
[![npm](https://img.shields.io/npm/dt/siwi-sleep.svg)](https://www.npmjs.com/package/siwi-sleep)
[![Github file size](https://img.shields.io/github/size/siwilizhao/siwi-sleep/dist/index.js.svg)](https://github.com/siwilizhao/siwi-sleep/dist/index.js)

# siwi-sleep
sleep for nodejs
# install

## use npm 

` npm install siwi-sleep`

## use yarn

` yarn add siwi-sleep`

# test

`npm test`

# Example

```js
const sleep = require('siwi-sleep')

class Example {
    constructor() {
        this.init()
    }
    async init () {
        await sleep(10000)
        console.log(1)
    }
}

module.exports = new Example()
```

> console 1 after 10s 