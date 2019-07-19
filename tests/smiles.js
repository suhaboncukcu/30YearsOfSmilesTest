let smiles = {

    'Demo test Google' : function (browser) {
      browser
        .url('https://www.30yearsofsmiles.com/tr/cekilisler/30-milyon-mil/cekilise-katilin-30-yilda-siz-de-kazanin/')
        //.resizeWindow(1920, 1080)
        .waitForElementVisible('body')
        .execute(function() {
            document.getElementById('member-number').scrollIntoView();
        }, [])
        .waitForElementVisible('#member-number')
        .setValue('input[name=MemberNumber]', process.env.MemberNumber)
        .waitForElementVisible('#name')
        .setValue('input[name=FullName]', process.env.FullName)
        .waitForElementVisible('label[for="privacy-policy"]')
        .execute(function() {
            document.querySelector('label[for="privacy-policy"]>a').remove();
            document.querySelector('label[for="privacy-policy"]>a').remove();
        }, [])
        .click('label[for="privacy-policy"]')
        .execute(function() {
            let labelFor = document.querySelector('input[name=question][value=True]').id;
            document.querySelector('label[for="'+labelFor+'"]').click();
        }, [])
        .execute(function() {
            document.querySelector('.btn-form-submit').scrollIntoView();
        }, [])
        .waitForElementVisible('.btn-form-submit')
        .click('.btn-form-submit')
        .pause(45000)
        .saveScreenshot('./screenshots/' + (new Date()).getDay() + '.jpg')
        .end();
    }
    
}
module.exports = smiles;