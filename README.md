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

<h2>05. Manipulando o DOM</h2>

<p>[00:00] No último vídeo, nós criamos a função que vai fazer a conexão com API. E vai retornar os dados para nós. Nós já aproveitamos e fizemos o export dessa função, para poder ser utilizado em outros arquivos.</p>

<p>[00:10] E para fazer esses dados aparecerem na tela, vamos criar outro arquivo com outras funções. Então dentro da pasta js, vamos criar o arquivo mostrarVideos.js. E antes de escrever qualquer coisa, vamos importar no index.html.</p>

<p>[00:30] Então lá na linha 83, onde antes tinha a conexão com o arquivo conetaApi, vamos só trocar esse nome para o arquivo MostrarVideos.jse vamos colocar type="module".</p>

<p>[00:43] Isso acontece porque quando a gente trabalha com import, export porte para poder usar trechos de código em outro arquivo, estamos trabalhando com o modularização, então precisamos declarar que isso está acontecendo, e para fazer isso é só botar um type"module.</p>

<p>[00:59] Então como é que vamos selecionar o elemento da lista para começar a trabalhar nisso? Porque queremos fazer a lista dinâmica. Vamos lá na linha 37, onde tem o elemento ule l e vai escrever dentro dele data-lista. Depois, vamos lá em mostrarVideos.js e vai finalmente começar a codar.</p>

<p>[01:20] Então eu vou criar uma variável do tipo constante chamada lista const lista = document. querySelector("[data-lista]").</p>

<p>[01:38] Isso que estamos fazendo são data attribute, que servem para individualizar esses elementos e conseguirmos manipular o DOM através deles. a estrutura padrão é um data, hífen e o nome que você quiser, eu botei data, hífen lista, só para ficar bem claro do que nós estamos tratando.</p>

<p>[01:56] Tendo isso, precisamos começar a construir aqueles li's que tem dentro do elemento de listas. Então para isso, vamos criar uma função chamada constroiCard() {}. Dentro das chaves vamos criar uma variável do tipo constante também const video = document.createElemnt("li").</p>

<p>[02:27] No vídeo, na linha cinco vamos colocar video.className = "videos", deixa eu ver se são vídeos. Vou index.html para comparar, ver qual que é a classe que eles usam no li. Fica na linha 38 évideos__item.</p>

<p>[02:46] Então volto no mostrar vídeos, e vou botar no video.className = "videos__item". Salvei.</p>

<p>[02:55] Aqui é bem como se fosse a tradução. Eu estou criando um elemento li e botei a classe vídeos item, e agora eu tenho um elemento e tenho uma classe. E todo aquele HTML que tem dentro dessa li como é que eu boto?</p>

<p>[03:09] Vamos lá no index.html e vamos copiar tudo que tem dentro do primeiro li, da linha 39 a 47, eu dou um Ctrl + C. E novamente no mostrarVídeos.js, embaixo da definição da classe eu vou botar um video.innerHTML =e vou botar duas crases, e dentro dessas crases, eu vou botar esse código que eu copiei</p>.

<p>[03:31] E depois eu vou dar um return video;. Aqui na tela já botei todo o código, e na HTML ele faz, o que dá para entender já é uma frase aqui, ele bota um HTML dentro daquele elemento. Então ele botou um teste de HTML dentro do li, que foi tudo que já tinha lá.</p>

<p>[03:49] E depois eu retornei tudo que eu fiz na tela, então já temos em JavaScript toda a construção daquele primeiro elemento, e tudo o que tem dentro dele. E retornei ele para usar em outro lugar, que precisamos botar várias coisas dentro dele ainda.</p>

<p>[04:04] E uma das coisas, é aquela lista que a gente recebeu, são os valores daquela lista. E para acessar a função que está fazendo essa requisição e trazendo a lista, vamos lá na primeira linha, vai botar um import {conectaApi} from ";/conectaApi.js";. Agora conseguimos usar o conectaApi e as funções que tem dentro dele.</p>

<p>[04:38] E eu vou criar outra função para consumir aquelas funções do conectaApi. Então vou criar uma função assíncrona também, que vai ser async function listaVideo()dentro dela vou criar outra variável constante, const lista = await conectaApi.listaVídeos();. Agora ele vai esperar tudo aquilo se resolver e vai retornar para mim a lista, aquela lista de vídeos que temos no db.jason. E vamos conseguir usar ela para fazer outras coisas, para criar cards para cada um daqueles itens da lista.</p>

<p>[05:17] Então eu digo que isso aqui às vezes é só traduzirmos. Então lá na linha um, o que eu fiz? Eu importei aquela variável que eu estava exportando do conectaApi, e também eu fiz toda aquela questão de assincronicidade quando eu criei a função lista vídeos aqui também. Porque se não aguardarmos as coisas se resolverem, as promessas se resolverem, nunca vamos ter acesso ao valor em si.</p>

<p>[05:40] E se você deseja se aprofundar mais ainda na questão de assincronicidade, eu te recomendo passar lá no curso JavaScript consumindo e tratando dados de uma API, onde eu mesma te abordo sobre todos esses tópicos de requisições, GET, de assincronicidade, de async await, de .then(), de .catch(), várias coisas. Te recomendo fortemente passar lá.</p>

<p>[06:02] E agora como é que eu posso pegar todos esses dados da lista e para cada um deles criar o card específico? Eu chamo de card, mas é cada um dos quadradinhos que aparecem todas as informações dos vídeos.</p>

<p>[06:15] Vamos brincar um pouco com o DOM, um pouco mais, porque aqui já brincamos. Vamos brincar um pouco mais com o DOM e funções nativas do JavaScript. E eu te vejo no próximo vídeo para isso. Até logo.</p>

<h2>06. forEach()</h2>

<p>[00:00] Construímos a função constroiCard que cria outros itens da lista do index.html, e também criamos a função listaVídeos que nos retorna o valor da nossa API, do db.json. Agora precisamos conectar essas duas funcionalidades, para cada item da lista da nossa API, um item da lista do index.html deve ser criado.</p>

<p>[00:23] E agora já olhando aqui meu código, eu já vi que eu botei duas variáveis com o mesmo nome, a da lista da API, e a da lista do index.html, e eu vou trocar o nome da lista da API para ficar mais fácil de entender.</p>

<p>[00:35] Então lá na linha 22, no centro da tela, onde tínhamos declarada const lista, agora será const listaApi. E na linha 22 damos um Enter, para a linha 23 vir limpa, vamos botar listaApi.forEach(), esse método ele significa para cada, então para cada item da lista da API alguma coisa vai acontecer, e eu vou criar uma função ali dentro que vai ser elemento => lista. appenChild()).</p>

<p>[01:14] O que eu fiz aqui dentro? Eu mandei uma função, maior function para o ForEach. Esse elemento que eu declarei antes, ele vai significar cada uma das coisas que estão passando. Então para cada item da lista API, ele vai se chamar elemento e vai acontecer alguma coisa que está aqui dentro, o que vai acontecer é o lista appendChild, que quando falamos de DOM, que estamos mexendo no DOM, é tudo muito família, trabalhamos com pais, trabalhamos com filhos, e aqui não vai ser diferente.</p>

<p>[01:45] A lista do index.html, que é o elemento ul, ela tem vários ali dentro dela, ou seja, ela é o pai desses lis. E os lis são filhos.</p>

<p>[01:53] Então a função, o método appendChild, ele vai anexar outros filhos para ela, outros filhos para o pai que é a lista. Os filhos que ele vai anexar, é que vai voltar lá no nosso constroiCard. Então ele vai construir vários lis para colocar dentro do ul, que é a nossa variável lista.</p>

<p>[02:15] Então eu vou chamar a função ConstrutoiCard dentro da appendChid, e ela vai receber os valores do elemento, que é o elemento.titulo, elemento.descrição, elemento.url. elemento.imagem. Eu vou dar um Enter aqui no constroiCard só para vermos tudo junto na tela, não precisa, pode ficar na mesma linha.</p>

<p>[02:42] Vamos de novo, recapitular que essa parte é muita coisa. Nós, para cada item da lista da API criou um card, que seria uma li, que foi anexada dentro da ul dentro do index.html, que estamos referenciando como lista. Então fazendo isso estamos criando o que queríamos, a conexão das duas funções, para cada item da lista uma li será criada.</p>

<p>[03:10] E já tendo isso, vamos transformar essas lis em dinâmica, porque quando eu construí a função constroiCard, eu só copiei o valor que tinha dentro do primeiro li lá do index.html.</p>

<p>[03:26] Então vou copiar todos esses elemento.titulo, elemento.descrição, elemento.url. elemento.imagem, vou copiar e vou botar lá no parênteses da linha cinco. E vou apagar tudo que diz elemento ponto, eu só quero a outra informação.</p>

<p>[03:41] Agora ele vai esperar receber esses valores, título, descrição, URL e imagem e vamos poder usar em outros lugares ali dentro, que vai ser lá dentro do innerHTML.</p>

<p>[03:52] Então, na linha oito onde tem o link do vídeo, vamos apagar o link, vamos botar um ${url}.Na linha nove, onde tem título, vamos tirar o título que é YouTube video player, e vai botar ${titulo}. Na linha 13, que tem o img src, vamos tirar o diretório do logo e vamos colocar um ${imagem};</p>

<p>[04:33] E na linha 14 também vamos apagar todo o título, botar ${titulo}. No <p>na linha 15 nós vamos colocar ${descricao}.</p>

<p>[04:50] Então agora já temos as coisas dinâmicas, a estrutura que estamos botando aqui, ela se chama Template Strings. Conseguimos botar variadas, através da estrutura que é o cifrão, abre e fecha chaves e o nome da variável, e ela se unirá a toda string que estávamos colocando, como se ela já fizesse parte. Na hora que for imprimir elas não vão aparecer como variáveis, elas vão aparecer como parte da string.</p>

<p>[05:15] E para isso funcionar, por isso que eu botei aquela crase, em vez das aspas duplas, ou aspas simples, lá quando eu atribui qualquer coisa para dentro inner.HTML. As templates strings funcionam. Elas nos ajudam muito a fazer essas coisas dinâmicas.</p>

<p>[05:32] Então, o que falta aqui? Só chamar listaVideos para acontecer. Então vamos na linha 26, dá um Enter a mais, só para ter certeza que está lá no final de tudo. Vamos chamar a listaVídeo();, salvamos e vamos olhar o resultado do navegador.</p>

<p>[05:48] Agora se eu estou indo para baixo, dá para ver que já tem vários vídeos novos que não estavam aparecendo antes. Então, ou seja, está funcionando a nossa conexão, já está listando na tela todos os itens que gostaríamos, mas ainda esses três, quatro primeiros no canto inferior do centro da tela, eles já estavam antes, eles estão fixos não foram frutos da nossa conexão com API.</p>

<p>[06:09] Então vamos tirar o nosso index.html. Vamos tirar lá da linha 38 a linha 81, vou apagar tudo. Salvamos e vamos olhar navegador de novo, não deu erro nenhum, agora a única coisa que fizemos é que agora realmente só vai aparecer coisas dinâmicas na nossa tela.</p>

<p>[06:32] Primeira tarefa que o nosso chefe, líder técnico da Alura pediu concluída. Nossa segunda, era como inserir novos vídeos nessa lista. E no próximo vídeo, nós vamos fazer isso. Até lá.</p>

<h1>Módulo 03. Criando novos elementos.</h1>

<h2>02. Requisição POST</h2>

<p>[00:00] Agora a pouco, nós vimos como fazer manualmente a inserção de novos vídeos na nossa lista do AluraPlay. Eu também falei de vários problemas que poderiam acontecer fazendo dessa maneira. Então nessa aula nós vamos criar outro tipo de requisição, que faz com que seja possível salvar novos dados no db.json.</p>

<p>[00:18] Então para isso. Vamos lá no conectaApi.j e na linha seis, onde fecha a listaVideos, vamos dar dois Enters e vamos criar outra função, vai ser async function criaVideo() {}. Dentro das chaves nós vamos criar outra conexão const conexao = await fetch(""http://localhost:3000/videos",)} fechas e vamos fazer outra chaves. Vamos colocar method:"POST",.</p>

<p>[01:11] Lembra que quando eu falei que quando fazíamos o fetch, o único parâmetro obrigatório era URL. E se não especificássemos mais nada, o método que estávamos usando, a requisição que estávamos fazendo era GET? Para declarar outros tipos de requisições, é assim, vamos colocar várias outras configurações entre chaves. Inclusive, qual que vai ser o tipo de requisição, que é o método.</p>

<p>[01:37] No nosso caso, agora vamos criar uma requisição POST. Mas não para por aí, temos outras coisas para colocar aqui dentro, como bota uma vírgula depois do POST, dá um Enter e vamos vai colocar headers: {} e abre e fecha chaves, porque também vai ter um conjunto de configurações que poderiam ser feitas, mas vamos botar um só, que é "Content-type":application/json".</p>

<p>[02:15] O Content-type que está dentro do headers ele serve para especificar que tipo de arquivo que está sendo enviado, ou recebido. Então quando estamos enviando, ou quando estamos recebendo um arquivo de json, especificamos o tipo do conteúdo, que é o Content-type, como application/json.</p>

<p>[02:33] E agora Mônica tem mais coisa para colocar aqui? Tem. Então depois então do fechamento das chaves do headers, vamos botar uma vírgula, dá um Enter para ficar embaixo, vamos botar body:JSON.stringify({}). Aqui dentro, vamos enviar os dados que queremos cadastrar nesta requisição, que é título, descrição, URL e imagem. Então vamos botar título = título, que vamos receber uma variável chamada título, não declaramos ainda, mas vamos. Depois vírgula embaixo, descricao =. Onde estou falando igual são dois pontos,url: url, imagem: imagem.</p>

<p>[03:30] Então, o que estamos fazendo aqui? Estamos enviando um body, que como a tradução diz, ele é o corpo da requisição, e quando colocamos as chaves com essas coisas ali dentro no lado superior esquerdo da tela, estamos enviando um objeto de variáveis, de valores, indiferentes, pode ser um número, pode ser uma letra, estamos enviando um objeto de valor.</p>

<p>[03:49] Só que para enviar uma requisição, precisamos enviar uma string. Então esse JSON.stringify ele vai transformar em uma string tudo aquilo ali que a gente estamos enviando. Assim, vai ser possível criar solicitação POST, a requisição POST.</p>

<p>[04:03] Agora precisamos fazer alguns ajustes. Como eu disse, quando botei titulo: título é porque esse segundo título que está sendo atribuído, era para recebermos como variável, para fazer isso, vamos lá na linha oito e dentro dos parênteses, vamos botar esses valores título, descrição, URL, vírgula imagem.</p>

<p>[04:22] Agora vamos conseguir enviar para a variável, enviar para a função criarVideo esses valores, e esses valores vão ser atribuídos a essas propriedades do body.</p>

<p>[04:34] Também, vou ajustar um negócio aqui. Lembra que a descrição ela era tantas mil visualizações. Se eu conseguir colocar manualmente esse número de visualizações não faz sentido, porque quando vamos em outras plataformas de compartilhamento de vídeo isso não é do controle do usuário, isso é de acordo com os cliques. Como ainda não vamos implementar uma função que tem um contador, vamos fazer um número tais visualizações.</p>

<p>[05:05] Então vamos criar uma string dentro da descrição. Na linha 16 vamos botar descricao entre crases, vamos apagar a palavra descrição, vai botar ${descricao}. Depois do fechamento das chaves do cifrão, lembra que isso é uma template strings? Então cifrão, chaves, a variável, chaves e a frase que quisermos, vai ser mil visualizações.</p>

<p>[05:35] E como eu disse, é o template string que vimos antes, então vamos botar uma variável que vai se transformar uma string junto com o resto da frase, não vai aparecer que foi uma variável colocada ali. Dependendo do número, 5.000 visualizações, 10.000 visualizações, vai ficar bem variável e não vai ter influência do usuário, vai ser sempre tantas mil visualizações.</p>

<p>[05:59] Como é que vamos retornar o resultado dessa conexão para o usuário? Primeiro vamos também fazer uma conexão convertida aqui, então lá na linha 21 dá um Enter, e cria outra variável com o nome conexaoConvertida = await conexao.json();.</p>

<p>[06:19] E aqui é o mesmo esquema, quando fazemos as aquisições, o fetch sendo assíncrono ele vai retornar uma promessa, e vamos esperar o resultado dela.</p>

<p>[06:27] Então demos um await, transformou o retorno em json, para conseguirmos visualizar, e vamos retornar para o usuário essa resposta através de um return conexaoConvertida;. Depois que pegamos as manhas da assíncrona, reutilizamos em vários locais.</p>

<p>[06:45] E por fim, na linha 28, onde estávamos importando listaVideos, vai botar uma vírgula no final e vai importar a outra função que criamos agora, CriaVideo. Dessa maneira, criamos toda a estrutura de uma função assíncrona, que faz uma conexão com a API e cria uma requisição POST, que é a de cadastrar novas coisas lá na nossa API, no nosso db.json.</p>

<p>[07:12] E também exportamos junto com a listaVideos, para poder se utilizar em outros arquivos, porque quando criarmos o arquivo de inserir novos vídeos, vamos poder utilizar.</p>

<p>[07:24] E no próximo vídeo é o que vamos fazer, vamos captar aquele formulário para conseguir usar essa requisição que acabamos de criar, e conseguir efetivamente fazer essa segunda solicitação do nosso chefe. E até lá.</p>

<h2>04. Captando eventos</h2>

<p>[00:00] No último vídeo nós construímos a nossa primeira requisição POST, inclusive, meus parabéns, isso que você acabou de aprender agora vai te acompanhar durante toda essa carreira do desenvolvimento Fron-End, meus parabéns mesmo. E agora precisamos conectar essa função de criação de vídeo onde ela faz a requisição POST, com o nosso formulário do enviarvideo.html.</p>

<p>[00:22] Para começar, vamos colocar uns data attribute no arquivo HTML, como na linha 34 dentro da tag de formulário, que vai ser data-formulario. Na linha 39 que temos o input de URL, vamos botar data-url. Na linha 46, que temos o input de título, vai ter data-titulo. Na linha 52, que é o de imagem, vamos ter data-imagem.</p>

<p>[00:55] Por enquanto é só. Vamos dentro da pasta js, criar o arquivo criarVideo.js, e já vamos aproveitar para importar lá na linha 59 do enviar vídeo, esse arquivo. Então vamos botar script src="..//js/criarVideo.js". E botamos type-"module" também. Salvei, e agora fizemos várias coisas que já tínhamos feito antes, botamos data attribute nos inputs, nos elementos que queríamos, que é aquela estrutura do data hífen e o nome que queremos. Também importamos um arquivo Javascript dentro do arquivo html para ser possível utilizar aqueles scripts dentro dali.</p>

<p>[01:52] Vamos começar a selecionar as coisas dentro do criarVideo.js. Primeiro, eu vou criar uma variável chamada formulário que vai ser constante, const formulario = document.querySelector("{data-formulario}". As outras seleções, eu vou fazer dentro da função, a função vai ser function criarVideo(){}. Dentro nós vamos selecionar os outros data attributes que já tinhamos feito.</p>

<p>[02:32] Então const imagem - document.quersyselector("{data.imagem}");. Nós temos também o const url = document.querySelector("{data-url}").. Por fim, const titulo =document.querySelector ("{data-titulo}");.</p>

<p>[03:20] Aqui seguimos o padrão de todos, definimos uma variável e atribuiu a ela um seletor de elemento, de acordo com o data attributes e selecionamos certinho cada um deles. Só que aqui, estamos selecionando o elemento inteiro, e como ele é um campo de digitação, o que queremos é o que o usuário vai digitar, queremos o valor daquele campo.</p>

<p>[03:43] E para isso, colocamos .value, na linha quatro depois do data imagem, na linha cinco depois do data-url, vamos colocar .value. e a mesma coisa na linha seis. E esse value é literalmente a tradução dele, é valor, valor daquele campo que acabamos de selecionar.</p>

<p>[04:02] Agora a questão da descrição, a descrição do nosso vídeo era o número de visualizações. Eu até já trouxe a problemática de que isso não poderia ser do controle do usuário, e como não temos um contador a gente precisava definir um número.</p>

<p>[04:15] Para isso, vamos criar uma variável chamada descrição do tipo const const descricao = Math.floor(Math.ramdon()*10).toString();.</p>

<p>[04:40] O que eu botei tanta coisa com matemática? Não se assuste, usamos map Math.random e ele traz o número aleatório entre zero e um. Para transformar em um número inteiro, fizemos vezes dez, e ele retornou um número inteiro. O Math.floor ele tenta pegar o menor número entre os valores que estiverem dentro do parênteses dele. Nós tendo finalmente um número, transformamos em string para conseguir depois passar para a nossa requisição, não podia ser um número aqui para transformar na frase, precisávamos de uma string.</p>

<p>[05:19] Então já temos aqui todos os campos que a gente precisava, a imagem, a URL, o título e um número aleatório para descrição. E tendo todos esses valores eu quero que eles sejam captados depois de eu apertar no botão para enviar o formulário, porque se eles captarem já no início não faria muito sentido. Primeiro, porque não teria nada escrito, agora eu quero que ele seja depois que estiver tudo completo, ou seja, depois de clicar no botão.</p>

<p>[05:45] Então, eu vou pegar o formulário eu vou botar um formulario.addEventListener("submit", evento => criarVideo(evento)). O que eu fiz? Eu botei como diz a tradução do addEventListener, um ouvinte de ouvinte, é um fofoqueiro. Ele vê quando enviamos o formulário, que é quando enviamos o submit daquele formulário e quando isso acontece ele conta a fofoca, ele manda ali o evento, o que aconteceu para a função criarVideo.</p>

<p>[06:35] Quando ele enviasse isso, e ele atualizar minha página, não é o que eu quero, que é a atitude padrão quando ele recebe o ato de enviar. Então eu vou botar lá na function criarVideo, na linha três para receber esse evento. O que acontece quando eu clico? Dentro das chaves vou colocar um evento function criarVideo(evento){evento preventDefault();. Com isso, vou prevenir que a ação padrão do envio de formulário aconteça, que é esse recarregamento, porque não vou conseguir ver nada, ele vai atualizar a página.</p>

<p>[07:09] E o que mais acontece aqui? O que eu preciso fazer? Já preenchi tudo, já detectei para ele só captar os valores depois de eu preencher. Eu acredito que só falta enviar para a função, aquela função POST, nossa requisição.</p>

<p>[07:25] E já que fizemos bastante coisa aqui, já interagimos bastante com o DOM, já olhamos um fofoqueiro com a add.EventListener, eu vou deixar para o próximo vídeo para fazer esse envio. Então até daqui a pouco.</p>

<h2>06. Enviar vídeos</h2>

<p>[00:00] Nós construímos uma função que fazia a conexão com API possibilitando a inserção de novos dados. Também criamos outra função que captava os dados que o usuário digitava no formulário da AluraPlay, e agora que falta? Unir essas duas funções. Queremos captar os dados e mandar para API.</p>

<p>[00:18] Então para fazer isso. Eu quero que você abra o Visual Studio Code, lá no criaVideo.js, no canto inferior esquerdo da tela, vamos importar lá na linha um, você pode dar um Enter porque estávamos criando a variável formulário. Na linha um, você vai digitar import {conectaApi} from "/conectaApi.js";.</p>

<p>[00:51] Dentro da função criarVideo vamos ter que colocar conectaApi.criaVideo(titulo, descricao, url, imagem);. Isso que fizemos, nós importamos a constante conectaApi que nos trazia tudo que a gente tinha colocado para trazer para outros arquivos, que é tanto a função criarVídeo, quanto a listaVideo, mas dessa vez queriamos usar a criaVideo.</p>

<p>[01:24] Essas funções que são conectadas com a nossa API, elas são assíncronas e elas são declaradas pelo async await, então elas retornam uma promise. Então nós não conseguiríamos acesso aqui até a promise nesse ser resolvida, e o que temos que fazer então? Transformar essa função em assíncrona também. Então lá na linha quatro, no canto superior esquerdo da tela, antes de declarar a function, você vai botar a palavra async. E na linha 12 antes, no centro esquerdo da tela, antes do conectaApi, você vai colocar um await.</p>

<p>[01:53] É importante também avisar que a ordem do que eu coloquei dentro do criarVideo faz sentido, porque se formos no conectaApi é nessa ordem que ele está esperando receber, é título, descrição, URL e imagem. Se eu colocasse em outra ordem eu poderia sem querer mandar a imagem para o campo que ele está esperando uma URL, isso ia dar vários problemas. Então tem que prestar atenção quando estamos enviando algo para uma função, que também está esperando receber algo.</p>

<p>[02:23] Pronto, declaramos ela como assíncrona, ele vai esperar resultar ali o conectaApi.criarVideo, nós pedimos para esperar, porque pode ser que venha a resposta, venha um erro e queiramos mostrar na tela. Se não esperarmos, nunca vamos saber, nunca vamos passar para o usuário esse status. E se ele conseguiu, é importante dar esse feedback também, não só de erro. E para isso, vamos fazer redirecionar a página quando o envio foi feito com sucesso.</p>

<p>[02:53] E para isso, vamos digitar aqui na linha 14, no lado inferior esquerdo da tela, mas dentro da criarVideo depois da await, é window.location.href = "." e dentro das aspas duplas, vamos colocar o diretório do documento envio-concluido.html. Então para chegar lá vamos dar window.location.href = "../pages/envio-concluido.html". Com isso, conseguimos dar um feedback, de tipo conseguiu fazer esse envio, e aí ele vai ser enviado para página de envio concluído.</p>

<p>[03:32] É muito legal desse feedback por questões de melhorar a experiência do usuário. Ele vai entender o que ele está fazendo.</p>

<p>[03:40] Eu fiz tudo isso, e não testamos se funcionava vamos inserir um vídeo lá. Eu vou pegar o vídeo da nossa Scuba Camis, que é conhecendo NestJS. Eu vou copiar o endereço do vídeo, no canto superior esquerdo da tela, e copiar URL do vídeo e vou colocar em Link embed, na parte superior do centro da tela. Mas lembrando que o link é diferente, ele começa com embed, que é htpps:// www.youtube.com/embede a URL. O título do vídeo vai ser Conhecendo o NestJS. A URL do perfil eu vou botar mesa que eu estava botando nos outros lugares, mas se você quiser usar outra imagem pode procurar no Google e só botar a URL.</p>

<p>[04:32] Vou enviar, ele levou a gente para vídeo cadastrado com sucesso e vamos lá na página inicial para ver se funcionou. Eu vou até lá embaixo da página, está funcionando, já temos mais um vídeo inserido na nossa lista, ou seja, conseguimos completar a segunda tarefa que o nosso chefe nos passou que era de fazer essa inserção de vídeo.</p>

<p>[04:53] Agora só faltou a última que é a pesquisa. Olha aqui em cima da AluraPlay, ele tem uma barra de pesquisa no centro superior da tela, e a gente precisa que seria ali um termo, ele vai procurar na lista qualquer um que contém aquele tema que a gente busca.</p>

<p>[05:06] Eu já vou te mostrar como é que faz isso na próxima aula, então não me abandone aqui e te vejo lá.</p>

<h1>Módulo 04. Buscando Elemento</h1>

<h2>02. Busca de vídeos</h2>

<p>[00:00] Já conseguimos concluir duas das tarefas que recebemos, a de listagem e a de inserção de novos vídeos. Só falta uma, foi bastante trabalho, mas chegamos aqui.</p>

<p>[00:11] Imagine que essa lista que a gente está mostrando no nosso a AluraPlay seja gigante, muito maior do que ela já é, e você quisesse procurar um só vídeo lá dentro, sem uma ferramenta de busca ia ser muito complicado. Imaginem em 100 vídeos você quer um que diga sobre JavaScript. Então para facilitar essa vida, nós vamos implementar uma ferramenta de busca nesse campo de digitação, que tem no meio da tela da na parte superior, da home da AluraPlay.</p>

<p>[00:38] Para isso, vamos olhar o nosso servidor local. Digite aí no seu navegador a URL que você está usando para ele, no meu caso era localhost:3000/vídeos. Se entrarmos aqui, conseguimos acessar todos, a lista inteira de qualquer uma das propriedades de vídeos que tem aqui.</p>

<p>[00:59] Agora olha só se eu botar esta URL localhost:3000/videos?q=memes. Se eu digitar isso vai aparecer o único vídeo da minha lista que tem a palavra memes em alguma das propriedades dele.</p>

<p>[01:23] Nós vamos entender o que eu acabei de fazer com essa URL. A nossa URL padrão era localhost:3000 e a categoria que eu queria, que era vídeos. Em seguida, eu botei um sinal de interrogação, era como se eu perguntasse para esses vídeos se alguma coisa que eu vou botar em seguida existe. Vídeos isso aqui existe? Em seguida, eu vou botei um q que significa query, mas ali no caso ele funciona como se eu fosse pesquisar geral dentro do meu db.json, algum lugar que vai ter tal palavra. Porque se eu botasse ali alguma das propriedades como título, descrição e etc., eu teria que botar exatamente como estivesse na propriedade para achar aquele vídeo.</p>

<p>[02:10] Dessa maneira eu consigo botar uma palavra e procurar em geral, porque às vezes eu posso procurar a palavra memes que eu acabei de colocar e ter vários resultados.</p>

<p>[02:20] Em seguida, eu botei o igual que era para definir que eu queria um que fosse igual o termo que eu vou botar agora em seguida, que foram os memes. Dessa maneira, eu consegui perguntar para os vídeos se existem vídeos com a palavra memes e ele me retornou o único que tinha.</p>

<p>[02:35] Agora, como que eu posso fazer para aplicar isso no meu código? Vamos abrir o Visual Studio Code, e no arquivo conectaApi.js vamos criar outra função assíncrona, aqui na linha 27 eu vou criar ela, que vai ser async function buscaVideo(){}; Lá dentro das chaves vou criar uma const que é uma variável do tipo consante const conexao = await fetch(http://localhost:3000/videos?q=${termoDeBusca}`)`. E já que estou botando algo que vou ter que receber e colocar ali, então lá dentro do parênteses da linha 27, quando eu criei a função, eu também vou colocar um termo de busca lá async function buscaVideo({termoDeBusca){. No final, eu vou colocar um const conexaoConvertida = conexao.json();. Depois, por fim, vou retornar o conexaoConvertida return conexaoConvertida;.</p>

<p>[04:03] Olha só, que parecido que é com o listaVideos, é muito parecido, porque declaramos como uma função assíncrona, criamos a variável conexão, que ela vai receber um fetch, depois a gente vamos converter o emaranhado de informações que traz em bytes para json, e depois vamos retornar esse valor para usar na tela.</p>

<p>[04:24] Super semelhante, só que dessa vez nós temos uma diferença na URL, que são os parâmetros aqui para dizer que eu estou pesquisando alguma coisa que é interrogação, Q e o igual e o termo de busca que eu usei de maneira como uma template string. Porque aí, eu posso enviar para essa função quando eu for chamar ela, e ela vai se adaptar e no lugar do fetch vai ficar ali meu termo de busca direito, e vai ser como a URL que eu pesquisei no meu navegador, e vai retornar o vídeo que tenha só o que eu quero.</p>

<p>[04:55] Agora só falta exportar que nem os outros. Então lá na linha 36, no centro esquerdo da tela, onde estávamos exportando o criarVideo, nós vamos colocar uma vírgula e em seguida vamos colocar o buscaVideo.</p>

<p>[05:07] Agora tendo isso já conseguimos fazer essa busca dinâmica, vamos aplicar isso direto no nosso HTML, brincar um pouco com o DOM, eu te vejo no próximo vídeo para dar continuidade a essa etapa.</p>

<h2>05. Reutilizar funções</h2>

<p>[00:00] Já fizemos uma função que consegue buscar no nosso servidor local algum termo, e também já testamos a associação com ela e o nosso campo de pesquisa. Testamos no console.log e está funcionando normal.</p>

<p>[00:12] Agora se vermos o retorno que é uma lista de itens do nosso servidor local, é super semelhante ao que tínhamos feito no mostrarVideos. Então temos duas opções, reutilizar o código que estava lá, ou repetir o código. Eu vou optar por reutilizar, então vem comigo para ver como podemos reutilizar funções.</p>

<p>[00:34] Abre o Visual Studio Code, com o projeto aberto e no mostrarVideos.js, na linha cinco, no centro superior esquerdo da tela, onde construímos o card, vamos colocar um export default function constroiCard, nós só vamos colocar aquele export default no início.</p>

<p>[00:49] Agora lá em buscarVideos.js, vamos fazer um import na linha dois, no lado superior esquerdo da tela, que vai importar import constroiCard from "./mostrarVideos.js";.</p>

<p>[01:05] Agora estamos, ao invés de importando uma variável que fornecia várias funções, estamos importando exatamente a função que queríamos, que é a constroiCard, que está dentro do mostrarVideos.</p>

<p>[01:20] E agora para usar ela vai ser bem semelhante ao que tínhamos feito. Precisa ir no index.html pegar qual que é o data attributes da lista, que é data-lista e dentro do buscarVideo, onde tinha o console.log, na linha nove, no centro superior esquerdo da tela, já podemos apagar ele. Agora ali, na linha nove, vamos criar outra variável constante que vai ser a lista.</p>

<p>[01:41]Aí ela vai receber um const lista = document.querySelector("[data-lista]");. Agora embaixo disso, já conseguimos usar o busca.forEach(). Aí, cada item da lista que retornar da busca, vai acontecer alguma coisa. Então vamos colocar um elemento aqui para ser considerado cada item da lista busca.forEach(elemento => lista.appendChild()).</p>

<p>[02:17] Aí agora é a mesma lógica do que tínhamos feito antes, para cada item da lista vai acontecer alguma coisa, e essa alguma coisa vai ser um filho que vai ser anexado dentro da lista.</p>

<p>[02:29] Então o que tínhamos feito aqui, quando fizemos o mostrar vídeos? Chamamos a função constroiCard, busca.forEach(elemento => lista.appendChild(constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)). Novamente, lá no constroiCard vou dar um Enter, só para ficar melhor a visualização do projeto.</p>

<p>[02:51] Agora criamos um card para cada elemento da lista, e cada um que foi criado foi anexado ao pai, que é o elemento ul.</p>

<p>[03:00] Então, salvei, vamos olhar na tela, se eu pesquisar o que acontece. Nosso último vídeo, no canto inferior direito da tela, é o Conhecendo NestJS. Então vou pesquisar memes na barra de pesquisa, no centro superior da tela, e vou clicar no botão de pesquisar.</p>

<p>[03:14] Agora lá embaixo, no canto inferior direito da tela, ele aplicou outro vídeo que tenha o nome de memes, que já tinha na lista antes. Porque ele está pesquisando, e está criando um filho, e está inserindo lá no final.</p>

<p>[03:28] Precisaríamos que fosse apagada toda a lista geral e aparecesse só o da busca. Então para fazer isso eu vou te mostrar no próximo vídeo então não deixe de conferir lá.</p>

<h2>06. Lista filtrada</h2>

<p>[00:00] Acabamos de implementar a busca no Alura Play de acordo com o termo que inserimos no campo de pesquisa. Só que ao testar deu um problema, ao invés da lista inteira desaparecer e aparecer só aquele item que queríamos, ele apareceu toda a lista, inclusive o item que queríamos. Nós precisamos fazer uma maneira que remova todos os outros itens da lista, que já estavam na tela antes de imprimirmos esse da busca.</p>

<p>[00:25] Então para isso. Volta lá no Visual Studio Code comigo. Antes do forEach que está fazendo essa impressão, vamos fazer um while (lista.firstChild){lista.removeChild(lista.firstChild.};. Salvei, vamos ver o resultado, já estou ansiosa.</p>

<p>[00:49] Botei aqui no campo de pesquisa, no centro superior da tela, no navegador e cliquei no botão de pesquisa. Agora corretamente ele só está aparecendo o vídeo que eu pesquisei, que foi o memes do JavaScript.</p>

<p>[01:00] O que é que foi que fez essa função aqui? Ela faz assim, é um laço de repetição, o enquanto, ele vai fazer alguma coisa enquanto a condição que colocamos for verdadeira, a condição que eu botei foi o lista.firstChild. Então enquanto aquela lista ter um primeiro filho, quer dizer que tem coisa lá dentro, enquanto isso for verdadeiro eu quero remover o primeiro filho da lista, aí ele fica nesse looping até eu apagar todos os filhos que a lista tem. Então vai ficar a lista vazia e depois em seguida, eu vou criar aquela lista de itens que eu quero pesquisar, só dos itens que estão de acordo com o termo que eu pesquisei.</p>

<p>[01:43] Então é bem legal ver essa maneira de remover filhos de um pai, do container, porque são algumas situações que podem acontecer em várias outras ocasiões, em vários outros projetos seus. Então já fica a dica aqui de como remover vários itens filhos de itens pais.</p>

<p>[02:02] Agora já temos a ferramenta de busca, já temos a inserção de vídeo, já temos a listagem de vídeo inteira na nossa página. Ou seja, concluímos todos os pedidos do nosso líder técnico.</p>

<p>[02:15] Mas que tal darmos uma impressão melhor? Vamos colocar coisas a mais nesse projeto, que tal fazer tratamento de erros?</p>

<p>[02:22] Na próxima aula. Vamos ver só sobre isso. E eu te vejo por lá.</p>

