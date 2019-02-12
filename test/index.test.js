const expect = require('chai').expect
const {
    sleep
} = require('../index')
describe('siwi-sleep', () => {
    it('show console 1 after 1 s', async () => {
        await sleep(1000)
        console.log(1111)
    });
});