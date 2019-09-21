let Page = require('./basePage');
const locator = require('../utils/locator');
const fake = require('../utils/fakeData');
const rand = require('../utils');

const searchInputSelectorClassName = locator.searchInputSelectorClassName;
const searchButtonSelectorName = locator.searchButtonSelectorName;
const resultConfirmationSelectorId = locator.resultConfirmationId;

const fakeNameKeyword = fake.nameKeyword;

let searchInput, searchButton, resultStat;

Page.prototype.findInputAndButton = async function () {
    searchInput = await this.findByClassName(searchInputSelectorClassName);
    searchButton = await this.findByName(searchButtonSelectorName);

    const result = await this.driver.wait(async function () {
        const searchButtonText = await searchButton[1].getAttribute('value');
        const searchInputEnableFlag = await searchInput.isEnabled();

        return {
            inputEnabled: searchInputEnableFlag,
            buttonText: searchButtonText
        }
    }, 5000);
    return result;
};

Page.prototype.submitKeywordAndGetResult = async function() {
    await this.findInputAndButton();
    await this.write(searchInput, fakeNameKeyword);
    await searchButton[1].click();
    resultStat = await this.findById(resultConfirmationSelectorId);
    return await this.driver.wait(async function () {
        return await resultStat.getText();
    }, 5000);
};

const p1OptionClassName = locator.page1LabelClassName
const p2OptionClassName = locator.page2LabelClassName
const nextButtonClassName = locator.nextButtonClassName
const submitClassName = locator.submitClassName

let options, nextButton, submitButton;

Page.prototype.findOptions = async function (page) {
    options = await this.findByClassName(page);
};

Page.prototype.selectOptionP1 = async function(spec) {
    const answer = rand.getRandAnswer(spec)
    
    await this.findOptions(p1OptionClassName);
    await options[answer].click();
};

Page.prototype.selectOptionP2 = async function(spec) {
    const answer = rand.getRandAnswer(spec)
    
    await this.findOptions(p2OptionClassName);
    await options[answer].click();
};

Page.prototype.clickNextButton = async function(position) {
    nextButton = await this.findByClassName(nextButtonClassName);
    await nextButton[position].click();
};

Page.prototype.submit = async function() {
    submitButton = await this.findByClassName(submitClassName);
    await submitButton[0].click();
};

module.exports = Page;