require('./jquery-3.1.0.min.js');

describe('Create draftForm via json', function() {
	beforeEach(function() {
      return browser.ignoreSynchronization = true;
    });

	it('create form', function() {
	   browser.get('http://localhost:3030/');
	   expect(element(by.css('body')).getText()).toEqual("Hello Protracting World!");
	});

 // it('greets Protractor',function(){
 //   browser.get('');
 //   element(by.model('yourName')).sendKeys("Protractor");
 //   expect(element(by.binding('yourName')).getText()).toEqual("Hello Protractor!");
 // });
});