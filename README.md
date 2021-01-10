# nodejs_api
Projeto de API em Node.js com Express e PostgreSQL.

#PRÉ-REQUISITOS DE AMBIENTE
São pré-requisitos para utilização desta API e devem estar instalados na máquina que servirá a API:
- PostgreSQL
- Node (npm)

#PARA INICIALIZAÇÃO
1. Realize o clone deste repositório do GitHub
2. Navegue via console até o diretório ~\nodejs_api\restfulapi\
3. Execute o comand: #npm install
4. Na sequência da finalização do comando anterior, execute: #node server.js
5. Verifique a URL exibida no console para saber onde fazer as requisições

#PARA UTILIZAÇÃO
Uma vez que tenha sido executado o passo-a-passo da inicialização da API:
1. Abra o browser de sua preferência;
2. Insira a URL informada: {{urlpath}}/rest/clock/10/30 --> note que 10 e 30 são os parâmetros representando hora e minuto, eles devem ser alterados sempre que necessário;
3. Verifique o retorno diretamente no browser, o mesmo deverá exibir um json com o ângulo entre os ponteiros informados. Exemplo:
{
  "angle": 90
}

Obs.: A API possui documentação com testes de API e está publicada no link: https://documenter.getpostman.com/view/7191226/TVzREHfp
