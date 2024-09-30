/// <reference types="cypress"/>
import LoginPage from "../pages/login_page";
const loginPage = new LoginPage

Given(/^que eu acesse a pagina de login$/, () => {
	loginPage.acessLogin();
});


When(/^eu digitar o usuario "([^"]*)" e senha "([^"]*)"$/, (usuario,senha) => {
    loginPage.preencheLogin(usuario,senha);
});


When(/^clicar no botão entrar$/, () => {
    loginPage.clicaLogin();
});

Then(/^terei meu acesso com o resultado "([^"]*)"$/, (resultado) => {
    loginPage.validaMensagem(resultado);
});


When(/^eu clicar em Cadastre-se$/, () => {
	loginPage.clicaCadastre();
});

When(/^preencher "([^"]*)", "([^"]*)" e "([^"]*)"$/, (nome,usuario,senha) => {
    loginPage.preencheCadastro(nome, usuario, senha);
});

When(/^clicar em Cadastrar$/, () => {
	loginPage.clicaCadastrar();
});

Then(/^terei a mensagem "([^"]*)"$/, (mensagem) => {
	loginPage.validaMensagemCadastro(mensagem);
});

