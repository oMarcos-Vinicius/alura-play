<p align="center"> <img src="https://imgur.com/J3hD21O.png" alt="Javascript: criando requisições"> </p>

<hr>

<p align="center"> <img src="https://github.com/MonicaHillman/aluraplay-requisicoes/blob/main/img/logo.png" alt="Logo da Alura"> </p>
<p align="center">Página inicial e formulário de cadastro de vídeos da AluraPlay, uma plataforma de compartilhamento de vídeos.</p>

## Tecnologias utilizadas durante o curso
* Javascript
* NodeJS
* Json-server

## Tecnologias utilizadas no projeto
* HTML
* CSS

## Screenshots
![Screenshot da tela inicial do AluraPlay](https://imgur.com/aymxEsh.png)
![Screenshot da tela do formulário do AluraPlay](https://imgur.com/ShNADf2.png)

<h1>Módulo 01 - Simulando uma API</h1>

<h2>06. Json-server</h2>

<p>[00:00] Pronto, nós instalamos o Node e estamos preparados para iniciar um servidor local com o json-server. Mas primeiro, vamos descobrir onde estão os dados que serão usados nesse servidor local. Eu coloquei eles lá naquele projeto que está na atividade preparando o ambiente, então se você não baixou ainda, volta lá rápido, baixa e bota no seu computador.</p>

<p>[00:20] Eu estou com ele aberto no Visual Studio Code, e se nós dermos uma olhada na esquerda, que tem um explorador de arquivos, nós temos um arquivo com o nome db.json. Vamos abrir ele. Eu abri o arquivo db.json, e ele possui toda uma estrutura que nós vamos usar na lista.</p>

<p>[00:37] Lembra que cada vídeo tem um título, tem uma descrição, que é a quantidade de visualizações, tem a URL do próprio vídeo, e tem uma imagem de quem publicou.</p>

<p>[00:47] Essa é uma estrutura que vamos usar para adquirir todos os dados que nós temos dentro da categoria vídeos. Esse arquivo json, ele significa JavaScript object notation, é um tipo de formato de texto que ajuda a transferir dados de um sistema para o outro.</p>

<p>[01:04] E para iniciarmos o json-server baseado nesse db.json, nós vamos abrir o terminal do VSCode. Então no topo do programa, na sétima opção no canto inferior direito da tela, vai ter a opção terminal. Clica em terminal, e vai ter a opção novo terminal do lado superior direito.</p>

<p>[01:19] Assim, já abriu o terminal do Visual Studio Code. Então eu vou dar dois comandos, primeiro npm init. Ele vai perguntar várias opções para configurar esse pacote, e eu vou dar Enter em todas, no package name Enter, na version Enter, descrição Enter. E Enter.</p>

[01:39] Terminei de dar o npm init, Eu vou dar o comando npm install json-server. A gente vai esperar um pouquinho para ele terminar.

<p>[01:48] Terminamos a instalação do json-server e vamos entender o que é que eu acabei de fazer aqui. O npm init inicializou o npm dentro do projeto. Npm significa node package manager.</p>

<p>[01:59] E npm serve para duas coisas. Primeiro, ele é um repositório de projetos feitos em Node e que são open source, como o json-server. E segundo, ele é uma ferramenta de linha de comando que permite a instalação de outros pacotes, bibliotecas como a gente acabou de fazer.</p>

<p>[02:16] E também para o final, a gente deu o comando npm install json-server, que assim como sua tradução, nós estamos pedindo para o npm instalar o json-server para possibilitar o uso dele aqui nesse projeto.</p>

<p>[02:29] Mas então vamos iniciar o servidor. Para isso, ainda no terminal, você vai botar json-server --watch db.json. Ele deu um problema, mas vamos entender ainda primeiro o comando. Eu usei o comando json-server, que é o próprio nome do pacote, eu botei o--watch, que fazer ele ficar olhando se tem alguma alteração.</p>

<p>[02:55] Isso tudo, ele vai fazer dentro do arquivo db.json que foi o terceiro parâmetro que eu botei nesse comando. Mas vamos arrumar esse problema que deu aqui.</p>

<p>[03:04] O meu sistema não está possibilitando a execução de scripts, então para ajustar isso nós vamos abrir o Windows PowerShell no nosso computador. E a gente precisa executar ele como administrador, é bem importante se atentar nisso. Estou abrindo ele no meu computador e a gente vai botar o comando Set-ExecutionPolicy RemoteSigned.</p>

<p>[03:38] Vai perguntar se eu quero ajustar para todos, e digitamos a e clica no botão Enter, é para todos os sistemas que tivermos aqui.</p>

<p>[03:45] Voltamos para o visual Studio Code, e no terminal vamos colocar a mesma coisa que tínhamos colocado antes, json-server --watch db.json. Dei Enter, e agora ele iniciou meu servidor local na porta 3.000. Quando eu quiser acessar o URL vai ser localhost:3000/videos.</p>

<p>[04:03] Esse erro tinha dado antes, porque no meu computador estava configurado para não aceitar script de origem externa nenhuma.</p>

<p>[04:11] E agora botamos ali e através do Set-ExecutionPolicy RemoteSigned, permitimos que todos os pacotes, extensões, essas coisas externas, que forem verificadas vão ser possíveis instalar elas no computador. Isso vai funcionar até para outros projetos que você fizer.</p>

<p>[04:30] Então já arrumamos erros, já começamos o nosso servidor local, e já podemos partir para o código. Então no próximo vídeo, ou na próxima aula eu te vejo lá para dar continuidade. Até lá.</p>

<h1>Módulo 02: Exibindo elementos</h1>

<h2>02. Requisição GET</h2>

<p>[00:00] Criamos um servidor local, um server, ou seja, agora temos a nossa API para consumir. Mas antes de consumir ela, quero deixar dois recados. A URL da nossa API é aquela URL, que aparece no terminal depois de rodarmos o comando para iniciar o json-server. No meu caso, é o localhost:3000/videos. Pode ser que a porta no seu computador não seja 3000, então é importante focar no terminal para ver isso, para você poder adaptar o seu código para a porta que está o seu json-server.</p>

<p>[00:31] Também temos que reparar que o servidor local está rodando no terminal interno do VS Code. Então, se você fechar o VS Code e depois abrir novamente, você precisa de novo rodar o comando json-server --watch db.json.</p>

<p>[00:47] Sabendo isso, já podemos começar a codar. Dentro da pasta do projeto, vou criar outra pasta chamada js. Dentro da pasta "js", eu vou criar o arquivo conectaApi.js. Antes de escrever o código eu vou importar lá no index.html. Na linha 82, onde tem o fechamento da ul vou dar um Enter, e vou criar tag < script scrc="". Entre as aspas eu vou botar o diretório daquele arquivo que nós recém criamos. Então, ele é ./js/conectaApi.js. E vou fechar essa tag.</p>

<p>[01:26] Tendo isso, já vou conseguir testar os meus códigos direto no navegador. Então eu vou lá no arquivo conectaApi e vou criar minha primeira função do projeto inteiro. Eu vou começar escrevendo async function listaVídeos() {}. Dentro das chaves, eu vou criar uma variável const conexao = await fetch("http://localhost:3000/videos");. Depois eu vou dar um console.log(conexao);e vou chamar essa função listaVideos();lá na linha seis.</p>

<p>[02:16] Tendo isso, vamos entender primeiro o que eu estou escrevendo. Eu defini essa função como assíncrona, quando eu inseri o termo async antes da definição dela. Por padrão o JavaScript é síncrono, então ele vai ler linha por linha, e não vai esperar nada ser resolvido. Como eu declarei como assíncrona quando eu botei o termo aysnc na criação da função, e depois eu vou ter aquele await fetch ele vai esperar o fetch terminal o que ele precisa fazer para retornar o resultado da requisição. É bem como se fosse a tradução, ele está declarando que essa função vai ser assíncrona, e está mandando esperar o fetch.</p>

<p>[02:50] O fetch em si muito, vamos entender como é que ele funciona. O fetch ele já é um método assíncrono, que ele tem como o único parâmetro obrigatório dele a URL da Api, e quando pedimos ele o fetch para API ele vai retornar uma promessa. E é por isso que ele é um método assíncrono, porque ele não está retornando já o resultado, ele está retornando uma promessa, e as promessas funcionam prometendo que algo vai acontecer alguma hora, e também essa promessa pode ser resolvida, ou ela pode ser rejeitada.</p>

<p>[03:20] Ele está prometendo, mas pode ser que esteja errado, a conexão com Api pode dar um 404, ela pode nem existir, a rama URL vai retornar um erro. Ou também pode ser resolvida que vai retornar ao que nós queremos.</p>

<p>[03:31] Também, quando não botamos mais nenhum parâmetro, já que eu falei que o único obrigatório é a URL, estamos fazendo uma requisição GET, que é o que estamos fazendo agora. Uma requisição GET estamos solicitando para a API retornar vários dados para nós, mas não estamos querendo que salve nada, não queremos fazer nada com ela, só queremos receber aqueles valores.</p>

<p>[03:51] Como se fosse uma lista de e-comerce, até da AluraBooks que nós já vimos o projeto lá na primeira aula, que mostra todos os livros, quando queremos ver uma lista de produtos, quando queremos ver uma lista de usuários cadastrados, nós sempre faz uma requisição GET.</p>

<p>[04:05] Voltando no código agora, assimilando o conhecimento sobre assincronicidade, e assimilando o conhecimento do fetch que retorna uma Promise. Nós vamos conseguir o acesso dessa promessa resolvida ou rejeitada, mandando aguardar isso ser resolvido. Por isso que botamos esse await antes do fetch. Vamos testar no navegador para ver como é que está retornando?</p>

[04:25] Para isso, eu vou usar a extensão Live Server, que é uma extensão do VS Code, se você ainda não tem instalado, pode tirar um tempo para instalar que é bem legal. Nós conseguimos fazer alterações no código sem precisar ter que ficar recarregando a página.

<p>[04:39] Então para ativar a extensão eu vou no botão inferior direito, que vai ter opção Go live. Cliquei no botão Go Live, ele vai abrir no navegador o projeto e nós já temos acesso. Eu vou apertar F12 para olhar o console.</p>

<p>[04:52] A primeira linha, ele está falando Live reload enabled, isso pode ignorar que é do Live Server, não é do nosso código. A segunda linha já é aquele console.log que eu tinha pedido, ele retornou uma resposta. Viu, como eu falei que ele não ia retornar uma promessa porque aguardamos a promessa ser resolvida, ele resolveu e trouxe a resposta para nós.</p>

<p>[05:13] Mas aqui, temos vários dados, temos body, bodyUsed, headers, nenhum deles é um valor que tinha no db.json, não conseguimos acessar ainda o valor para usar na tela. Para isso, vamos abrir o Visual Studio Code de novo, na conectaApi.js e depois da declaração da função conexão, vamos declarar outra função do tipo constante const conexaoConvertida = awit conexao.json();. Dentro do console.logque tínhamos a conexão, vamos colocar a conexão convertida console.log(conexaoConvertida);. E vamos clicar no botão salvar e vamos ver o que mudou.</p>

<p>[05:55] Salvei, atualizei e nem precisava ter atualizado de novo, que já estava no Chrome mostrando o resultado. Já pode ver no canto inferior direito da tela, que tem uma lista gigante, um array, com vários objetos que agora tem todas as informações do db.json, que é a descrição, o ID, a imagem, o título, a URL.</p>

<p>[06:14] O que esse método json faz? Ele pega todos aqueles dados em formato de bytes, que estávamos recebendo antes e transforma em um json bonito. E lembra que um json, ele parece um objeto? Até que o nome dele em JavaScript é object notation? Na tela, ele transformou em um objeto para conseguirmos ter acesso a todos os valores lá dentro.</p>

<p>[06:33] E agora já tendo acesso a esses valores, como é que vamos acessar em outros lugares essa função, essa requisição que acabamos de fazer? Nós vamos importar esse valor. Então para isso, precisamos dar um retorno no valor, não precisamos mais desse console.log, vamos dar um return conexaoConvertida;. Quando chamar essa função ele vai retornar aquela lista cheia de coisas do db.json para onde for chamada.</p>

<p>[06:58] E para conseguirmos importar em outro arquivo, porque vamos fazer bem separado, nesse arquivo vão ser só coisas da conexão Api.</p>

<p>[07:05] Nós vamos dar um export const conecatApi ={} listaVideos. Agora bem como a sua tradução, às vezes é bom até trazermos o nome dessas funções para entender porque funciona.</p>

<p>[07:25] O return estamos pedindo, retornar conexão convertida, ele vai fazer tudo lá dentro da função e depois vai retornar o valor da variável conexão convertida. E também no final, botamos um export que ele vai exportar o que estamos pedindo ali, ele vai exportar uma variável chamada conectaApi, que vai receber um objeto cheio de funções. Nós conseguimos passar tudo ali dentro e usar só o que quisermos.</p>

<p>[07:50] Você vai ver melhor como é que vamos usar isso, quando formos imprimir na tela, que é o que vamos fazer no próximo vídeo. Então, até lá.</p>