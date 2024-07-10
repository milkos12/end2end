describe('Form App', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3001/')
    })

    /*beforeEach(() => {
        cy.visit('https://es.wikipedia.org/wiki/Wikipedia:Portada')
    })*/

    /*it('Function button buscar', ()=> {
        cy.contains('Buscar')
    })**/
    
    it('Fill inputs', ()=> {
        cy.get('[placeholder="First name"]').type('firts name')
        cy.get('[placeholder="Last name"]').type('Last name')
        cy.get('[placeholder="Username"]').type('Username')
        cy.get('[placeholder="Email"]').type('Email')
        cy.get('[placeholder="Password"]').type('Password')
        
    })

    it('Submit button', ()=> {
        cy.contains('Submit').click()
    })

    it('test Login ', )
})