/* eslint-env jest */

const config = require('../Misc/Config.json');
const { Blizzard } = require('../../src/index');

describe('Blizzard Options', () => {
    const blizzard = new Blizzard(config);
    it('Warcraft options should be instance of Object', () => {
        expect(blizzard.wow.options instanceof Object).toBeTruthy();
    })
});
