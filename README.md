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

