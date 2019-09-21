const { describe, it, after, before } = require('mocha');
const Page = require('../lib/homePage');

const chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

process.on('unhandledRejection', () => {});

(async function example() {
    try {
        describe ('Google search automated testing', async function () {
            this.timeout(50000);
            let driver, page;

            beforeEach (async () => {
                page = new Page();
                driver = page.driver;
                await page.visit('https://docs.google.com/forms/d/e/1FAIpQLSelWnYTKeynaRZRh0v1ndlCSFRcFiHW6A0qMSPTuJsUqQcwTg/viewform');
            });

            afterEach (async () => {
                // await page.quit();
            });

            it ('find the input box and google search button', async () => {
                const q1 = await page.selectOptionP1({
                    0: 0,
                    1: 1
                });
                const q2 = await page.selectOptionP1({
                    2: 0,
                    3: 0.5,
                    4: 0.5,
                    5: 0,
                });
                await page.clickNextButton(0)

                const q3 = await page.selectOptionP2({
                    0: 0.2,
                    1: 0.2,
                    2: 0.2,
                    3: 0.2,
                    4: 0.2
                })

                const q4 = await page.selectOptionP2({
                    5: 0.2,
                    6: 0.2,
                    7: 0.2,
                    8: 0.2,
                    9: 0.2
                })

                const q5 = await page.selectOptionP2({
                    10: 0.2,
                    11: 0.2,
                    12: 0.2,
                    13: 0.2,
                    14: 0.2
                })

                const q6 = await page.selectOptionP2({
                    15: 0.2,
                    16: 0.2,
                    17: 0.2,
                    18: 0.2,
                    19: 0.2
                })

                const q7 = await page.selectOptionP2({
                    20: 0.2,
                    21: 0.2,
                    22: 0.2,
                    23: 0.2,
                    24: 0.2
                })

                const q8 = await page.selectOptionP2({
                    25: 0.2,
                    26: 0.2,
                    27: 0.2,
                    28: 0.2,
                    29: 0.2
                })

                const q9 = await page.selectOptionP2({
                    30: 0.2,
                    31: 0.2,
                    32: 0.2,
                    33: 0.2,
                    34: 0.2
                })

                const q10 = await page.selectOptionP2({
                    35: 0.2,
                    36: 0.2,
                    37: 0.2,
                    38: 0.2,
                    39: 0.2
                })

                const q11 = await page.selectOptionP2({
                    40: 0.2,
                    41: 0.2,
                    42: 0.2,
                    43: 0.2,
                    44: 0.2
                })

                const q12 = await page.selectOptionP2({
                    45: 0.2,
                    46: 0.2,
                    47: 0.2,
                    48: 0.2,
                    49: 0.2
                })

                const q13 = await page.selectOptionP2({
                    50: 0.2,
                    51: 0.2,
                    52: 0.2,
                    53: 0.2,
                    54: 0.2
                })

                const q14 = await page.selectOptionP2({
                    55: 0.2,
                    56: 0.2,
                    57: 0.2,
                    58: 0.2,
                    59: 0.2
                })

                const q15 = await page.selectOptionP2({
                    60: 0.2,
                    61: 0.2,
                    62: 0.2,
                    63: 0.2,
                    64: 0.2
                })

                const q16 = await page.selectOptionP2({
                    65: 0.2,
                    66: 0.2,
                    67: 0.2,
                    68: 0.2,
                    69: 0.2
                })

                const q17 = await page.selectOptionP2({
                    70: 0.2,
                    71: 0.2,
                    72: 0.2,
                    73: 0.2,
                    74: 0.2
                })

                const q18 = await page.selectOptionP2({
                    75: 0.2,
                    76: 0.2,
                    77: 0.2,
                    78: 0.2,
                    79: 0.2
                })

                const q19 = await page.selectOptionP2({
                    80: 0.2,
                    81: 0.2,
                    82: 0.2,
                    83: 0.2,
                    84: 0.2
                })

                const q20 = await page.selectOptionP2({
                    85: 0.2,
                    86: 0.2,
                    87: 0.2,
                    88: 0.2,
                    89: 0.2
                })

                const q21 = await page.selectOptionP2({
                    90: 0.2,
                    91: 0.2,
                    92: 0.2,
                    93: 0.2,
                    94: 0.2
                })

                const q22 = await page.selectOptionP2({
                    95: 0.2,
                    96: 0.2,
                    97: 0.2,
                    98: 0.2,
                    99: 0.2
                })

                const q23 = await page.selectOptionP2({
                    100: 0.2,
                    101: 0.2,
                    102: 0.2,
                    103: 0.2,
                    104: 0.2
                })

                const q24 = await page.selectOptionP2({
                    105: 0.2,
                    106: 0.2,
                    107: 0.2,
                    108: 0.2,
                    109: 0.2
                })

                await page.clickNextButton(1)

                const q25 = await page.selectOptionP1({
                    0: 0,
                    1: 0.5,
                    2: 0.5
                });

                const q26 = await page.selectOptionP1({
                    0: 0,
                    1: 0.5,
                    2: 0.5
                });

                const q27 = await page.selectOptionP1({
                    3: 0.2,
                    4: 0.2,
                    5: 0.2,
                    6: 0.2,
                    7: 0.2
                });

                const q28 = await page.selectOptionP1({
                    8: 0.25,
                    9: 0.25,
                    10: 0.25,
                    11: 0.25
                });
                // expect(result.inputEnabled).to.equal(true);
                // expect(result.buttonText).to.include('Google');
            });

            // it ('put keyword in search box and click search button', async () => {
            //     const result = await page.submitKeywordAndGetResult();
            //     expect(result.length).to.be.above(10);
            // });
        });
    } catch (ex) {
        console.log (new Error(ex.message));
    } finally {

    }
})();