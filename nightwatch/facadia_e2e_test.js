module.exports = {
    phase_1: client => {
        client
            .url('http://127.0.0.1:5500')
            .waitForElementVisible('.sign-in-main-wrapper', 3*1000, 'SignIn form is reached...')
            .setValue('#user-email', 'thomas@facadia.com')
            .setValue('#user-password', 'azerty')
            .click('.submit-btn')
            .assert.visible('.main-header-title')
            .assert.containsText('.main-header-title', 'Façadia', 'SignIn passed & HP reached... SUCCESS!')
    },

    phase_2: client => {
        client
            .assert.visible('.main-header-title', 'loggedIn & on HP...')
            .assert.elementPresent('.section-title', '<h2> present...')
            .assert.containsText('.section-title', 'Vos capteurs', 'SUCCESS!')
    },

    phase3: client => {
        client
            .click('.sensor-info-btn')
            .waitForElementVisible('.section-title', 3*1000, 'Details page reached...')
            .assert.containsText('.section-title', 'Détails du capteur #7', 'Details title page checked... SUCCESS!')


    }
}