<p>Basicamente, a arquitetura Kafka contém poucos termos-chave, como tópicos, produtores, consumidores, brokers e muitos mais. Para entender o Apache Kafka em detalhes, devemos primeiro entender esses termos-chave.</p>
<p>Portanto, neste artigo, “Terminologias Kafka”, aprenderemos todas essas terminologias Kafka que nos ajudarão a construir uma base sólida do Conhecimento Kafka.</p>

<h2>Lista de terminologias Kafka</h3>
<p>Abaixo está a lista das terminologias Kafka mais recorrentes que podem ajudá-lo a construir uma base sólida de conhecimento Kafka. </p>

<h2>I. Kafka Broker</h2>
<p>Existem um ou mais servidores disponíveis no cluster Apache Kafka, basicamente, esses servidores (cada um) são o que chamamos de brokers.</p>

<h2>II. Kafka Topics</h2>
Basicamente, Kafka mantém feeds de mensagens em categorias. E as mensagens são armazenadas e publicadas em um nome de categoria/feed que é o que chamamos de tópico. Além disso, todas as mensagens Kafka são geralmente organizadas em tópicos.

<h3>III. Kafka Partitions</h3>
<p>Assim como em qualquer servidos, os brokers do kafka possuem partições. Essas partições Kafka podem ser líderes ou réplicas de um tópico. Por definição, o líder é responsável por todas as gravações e leituras de um tópico, de modo que se o líder falhar, a réplica assume como o novo líder.</p>

<h3>IV. Kafka Producers</h3>
<p>Em palavras simples, os processos que publicam mensagens para Kafka são o que chamamos de Produtores. Além disso, publica dados sobre os temas de sua escolha.</p>

<h3>V. Kafka Consumers</h3>
<p>Os processos que assinam tópicos (subscribers), processam e também leem o feed das mensagens publicadas são o que chamamos de Consumidores.</p>

<h3>VI. Offset em Kafka</h3>
<p>A posição do consumidor no log que é retida para cada consumidor é o que chamamos de Offset, ela diz respeito a quais mensagens em um tópico já foram consumidas por este consumidor. Sendo assim, quando um consumidor solicita a próxima mensagem, o Kafka recebe seu offset e retorna a mensagem que está na "posição lida + 1". Além disso, podemos dizer que são os únicos metadados retidos por consumidor.</p>

<h3>VII. Kafka Consumer Group</h3>
<p>Basicamente, uma abstração do consumidor oferecida por Kafka que generaliza os modelos tradicionais de mensagens de filas e também de publicação-assinatura (produção-consumo) é o que chamamos de grupo de consumidores. Grupos de consumidores podem ser rotulados para melhor organização.</p>

<h3>VIII. Kafka Log Anatomy</h3>
<p>Um log não é nada mais do que uma outra maneira de visualizar uma partição. Basicamente, uma fonte de dados grava mensagens no log. Além disso, um ou mais consumidores leem os dados do log a qualquer momento que desejarem. </p>

<p>Abaixo temos um diagrama ilustrando a dinâmica de leitura e escrita dos logs:</p>

![Anatomia dos Logs em Kafka](https://data-flair.training/blogs/wp-content/uploads/sites/2/2018/05/log-anatomy.png)
<h3>IX. Pedidos de Mensagem em Kafka e Confirmações do cliente</h3>
<p>Em Kafka, a ordem de mensagens entregues por uma certa partição e mensagens recebidas por uma partição é a mesma.</p>

<h3>X. Node em Kafka</h3>
<p>Em um cluster Kafka, um nó é apenas um único computador.</p>

<h3>XI. Kafka Cluster</h3>
<p>Um grupo de computadores que interagem com o objetivo de atingir um propósito em comum é o que entitulamos de cluster. Numa definição mais específica, um cluster Kafka pode ser um grupo de computadores onde cada um possui uma instância de um Kafka Broker.</p>
 
<h3>XII. Kafka Replicas</h3>
<p>Aqui, a palavra réplica se refere a um backup. Sendo assim, a réplica de uma partição ou tópico é um backup da mesma. Replicas são utilizadas apenas com o objetivo de prevenir a perca de dados, elas nunca leem ou escrevem dados.</p>

<h3>XIII. Kafka Message</h3>
<p>Uma mensagem se trata de uma informação que navega de um produtor para um consumidor através do Apache Kafka.</p>
<h3>XIV. Kafka Leader</h3>
<p>Um nó que é responsável por todas a leitura e escrita de dados em uma partição é chamado de Líder em Kafka. Então podemos definir que cada partição consiste de um servidor, que age como líder.</p>
<h3>XV. Follower em Kafka</h3>
<p>De maneira sucinta, podemos dizer que um follower não é nada mais que um nó que segue as instruções de um líder. Na implementação de um follower está o conceito de que caso um líder falhe, algum de seus seguidores se tornará automaticamente um novo líder. Porém geralmente atua como um simples consumidor, recebendo mensagens e atualizando seu próprio armazenamento de dados.</p>
<h3>XVI. Kafka Data Log</h3>
<p>As mensagens são preservadas através do Kafka por um tempo considerável. O que implica na possibilidade dos consumidores terem esses dados disponíveis para leitura conforme for conveniente.</p> 

<p>Como o Kafka é configurado para manter mensagens por 24 horas mas o consumidor muitas vezes pode ficar inativo por períodos maiores que o de mantenimento do Kafka, o consumidor pode perder essas mensagens. Ainda sim, é possível ler a mensagem do último offset, mas apenas se o tempo de inatividade do consumidor for menor que 60 minutos.</p>
<h3>XVII. Kafka Connector API</h3>
<p>A API que permite construir e executar consumidores reutilizável assim como produtores que conectam aplicações ou data systems existentes aos tópicos do Kafka, é a Connector API.</p>

