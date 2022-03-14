describe('End-2-End test', () => {
    beforeEach(() => {
        cy.visit('http://192.168.250.1:5500/')
    })

    it('should reject connection with wrong login/password', () => {
        cy.get('#user-email').type('peanuts@facadia.com')
        cy.get('[data-testid="user-email-error-msg"]').should('have.class', 'hidden')
        cy.contains('Se connecter').click()
        cy.get('[data-testid="user-email-error-msg"]').should('not.have.class', 'hidden')
        cy.get('#user-email').clear().type('thomas@facadia.com')
        cy.get('#user-password').type('hello')
        cy.contains('Se connecter').click()
        cy.get('[data-testid="user-password-error-msg"]').should('not.have.class', 'hidden')
    })

    it('should correctly display HP with good login/password', () => {
        cy.get('#user-email').type('thomas@facadia.com')
        cy.get('#user-password').type('azerty')
        cy.contains('Se connecter').click()
        cy.contains('Vos capteurs').should('be.visible')
    })

    describe('Being connected to HP, user', () => {
        beforeEach(() => {
            // connect to HP
            cy.get('#user-email').type('thomas@facadia.com')
            cy.get('#user-password').type('azerty')
            cy.contains('Se connecter').click()
            cy.contains('Vos capteurs').should('be.visible')
        })

        it('should display clicked card', () => {
            cy.contains('Voir les détails').click()
            cy.contains('Détails du capteur').should('be.visible')
            cy.get('.data-table').should('be.visible')
        })

        it('should display add captor page', () => {
            cy.contains('Ajouter un capteur').click()
            cy.url('should.include', '#/add-sensor')
            cy.get('h2').should('contain', 'Ajout d\'un nouveau capteur')
        })
    })
})