Feature: Login
    Funcionalidade de login na plataforma do serverRest

    Scenario Outline: "TC""<cenario>"
        Given que eu acesse a pagina de login
        When eu digitar o usuario "<usuario>" e senha "<senha>"
        And clicar no botão entrar
        Then terei meu acesso com o resultado "<resultado>"

        Examples:
            | TC   | cenario                          | usuario            | senha | resultado                  |
            | 0001 | Login com sucesso                | beltrano@qa.com.br | teste | Bem Vindo Fulano da Silva  |
            | 0002 | Login com credenciais incorretas | Teste@qa.com.br    | 123   | Email e/ou senha inválidos |

    Scenario Outline: "TC""<cenario>"
        Given que eu acesse a pagina de login
        When eu clicar em Cadastre-se
        And preencher "<nome>", "<usuario>" e "<senha>"
        And clicar em Cadastrar
        Then terei a mensagem "<mensagem>"

        Examples:
            | TC   | cenario                          | nome | usuario                 | senha   | mensagem                       |
            | 0003 | Cadastro com email já cadastrado | José | josepaulo@teste.com.py  | 12345rt | Este email já está sendo usado |
            | 0004 | Cadastro com sucesso             | José | josepaulo134@teste.com.py | 12345rt | Cadastro realizado com sucesso |