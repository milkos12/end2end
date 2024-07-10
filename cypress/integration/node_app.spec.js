describe('Form App', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3001/')
    })

    it('front page can be open', ()=> {
        cy.contains('First name')
    })

})