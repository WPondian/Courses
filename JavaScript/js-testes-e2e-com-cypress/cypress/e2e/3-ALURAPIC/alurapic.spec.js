describe('Usabilidade tela inicial ', () => {

    beforeEach(() => {
      cy.visit('https://alura-fotos.herokuapp.com')
    })

    /* novos casos de teste */
    it('verifica mensagens tela inicial', () => {
        cy.contains('ap-vmessage', 'User name is required!').should('be.visible');
        cy.contains('ap-vmessage', 'Password is required!').should('be.visible');
        cy.get('button[type="submit"]').should('be.disabled');
 
    })

    it('verifica botao habilitado na tela inicial', () => {
        cy.get('input[formcontrolname="userName"]').type('willian');
        cy.get('input[formcontrolname="password"]').type('1234');
        cy.get('button[type="submit"]').should('be.enabled');
    })

    it('verifica nome da aplicação na tela inicial', () => {
        cy.contains('a' ,' ALURAPIC ').should('be.visible');
    })

    it('verifica menu clicavel tela inicial', () => {
        cy.get('.navbar-brand > .fa').click();
        cy.get('.menu-bar > .fa').should('be.visible');
    })
    
})