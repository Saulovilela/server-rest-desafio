/// <reference types="cypress"/>
import LoginElements from "../elements/login_elements"; 

const loginElements = new LoginElements();
const url = Cypress.config('baseUrl');

class LoginPage {
    acessLogin() {
        cy.visit(url);
    }

    preencheLogin(usuario, senha) {
        cy.get(loginElements.inputUsuario()).type(usuario);
        cy.get(loginElements.inputSenha()).type(senha);
    }
    
    clicaLogin() {
        cy.get(loginElements.btnLogin()).click();
    }

    clicaCadastre() {
        cy.contains(loginElements.btnCadastrese()).click();
    }

    validaMensagem(resultado) { 
        cy.contains(resultado).should('be.visible'); 
    }

    validaMensagemCadastro(mensagem){
        cy.contains(mensagem).should('be.visible');
    }

    preencheCadastro(nome, usuario, senha) {
        cy.get(loginElements.inputNome()).type(nome);
        cy.get(loginElements.inputUsuario()).type(usuario);
        cy.get(loginElements.inputSenha()).type(senha);
    }

    clicaCadastrar(){
        cy.get(loginElements.btnCadastrar()).click();
    }
}

export default LoginPage;
