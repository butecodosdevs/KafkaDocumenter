# Tutorial Apache Kafka

## O que é Kafka?
Apache Kafka é um sistema de mensagens rápido, escalável e tolerante a falhas que permite a comunicação entre produtores e consumidores usando tópicos baseados em mensagens. Em palavras simples, ele projeta uma plataforma para aplicações distribuídas de última geração e de nova geração.

Além disso, permite um grande número de consumidores permanentes. Um dos melhores recursos do Kafka é que ele é altamente disponível e resiliente a falhas de nós e oferece suporte à recuperação automática de mensagens. Esse recurso torna o Apache Kafka ideal para comunicação e integração entre componentes de sistemas de dados de grande escala em sistemas de dados do mundo real.

Além disso, essa tecnologia substitui corretores de mensagens convencionais como JMS, AMQP, com a capacidade de fornecer maior rendimento, confiabilidade e replicação.

## Sistemas de mensagens em Kafka
A principal tarefa do gerenciamento do sistema é transferir dados de um aplicativo para outro para que os aplicativos possam trabalhar principalmente com os dados sem se preocupar em compartilhá-los. As mensagens distribuídas são baseadas no processo confiável de enfileiramento de mensagens (message queuing). As mensagens são enfileiradas de forma não síncrona entre o sistema de mensagens e os aplicativos cliente.

Existem dois tipos de padrões de mensagens disponíveis:

- Sistema de mensagens ponto a ponto;
- Sistema de mensagens de publicação-assinatura.

## Sistema de mensagens ponto a ponto
Neste sistema de mensagens, as mensagens continuam em uma fila. Mais de um consumidor pode consumir as mensagens na fila, mas apenas um consumidor pode consumir uma mensagem específica. Depois que o consumidor lê a mensagem na fila, a mensagem desaparece dessa fila.

## Sistema de mensagens de publicação-assinatura
Neste sistema de mensagens, as mensagens continuam em um Tópico. Ao contrário do sistema de mensagens ponto a ponto, os consumidores podem pegar mais de um tópico e consumir todas as mensagens desse tópico. Os produtores de mensagens são conhecidos como editores e os consumidores Kafka são conhecidos como assinantes.

## História do Apache Kafka
Anteriormente, o LinkedIn enfrentava o problema da ingestão de baixa latência de uma enorme quantidade de dados do site em uma arquitetura lambda que poderia processar eventos em tempo real. Como solução, o Apache Kafka foi desenvolvido no ano de 2010, já que nenhuma das soluções estava disponível para lidar com esta desvantagem, antes.

No entanto, havia tecnologias disponíveis para processamento em lote, mas os detalhes de implantação dessas tecnologias foram partilhados com os utilizadores a jusante. Conseqüentemente, embora se trate de processamento em tempo real, essas tecnologias não eram suficientemente adequadas. Então, no ano de 2011, Kafka foi tornado público.

## Necessidade de um cluster em Apache Kafka
Como todos sabemos, existe um enorme volume de dados utilizados em Big Data. Para dados, existem dois desafios principais. Uma é como coletar e gerenciar um grande volume de dados e a outra é a análise dos dados coletados. Para lidar com esses desafios, você precisa de um sistema de mensagens.

Existem muitos benefícios do Apache Kafka que justificam o uso do Apache Kafka:

- Rastreamento de atividades na web armazenando/enviando eventos para processos em tempo real;
- Alertando e reportando as métricas operacionais;
- Transformando dados no formato padrão;
- Processamento contínuo de streaming de dados para os tópicos.

## Público-alvo para este tutorial
Profissionais que desejam fazer carreira em Big Data Analytics usando o sistema de mensagens Apache Kafka.

## Pré-requisitos para o Kafka
Você deve ter um bom conhecimento de Java, Scala, sistema de mensagens distribuídas e ambiente Linux antes de prosseguir com este tutorial do Apache Kafka.

## Arquitetura Kafka
Abaixo apresentaremos as quatro APIs principais do Apache Kafka:

### 1. API de Produtor Kafka

Esta API do Kafka Producer permite que um aplicativo publique um fluxo de registros para um ou mais tópicos do Kafka.

### 2. API de Consumidor Kafka

A API Consumer permite que um aplicativo pegue um ou mais tópicos e processe o fluxo contínuo de registros produzidos para eles.

### 3. API de Fluxos Kafka

A API Streams permite que um aplicativo se comporte como um processador de fluxo, consumindo um fluxo de entrada de um ou mais tópicos e gerando um fluxo de saída para um ou mais tópicos de saída, modificando eficientemente os fluxos de entrada em fluxos de saída.

### 4. API do conector Kafka

A API do Connector permite criar e executar produtores ou consumidores reutilizáveis que permitem a conexão entre tópicos Kafka e aplicativos ou sistemas de dados existentes.

## Componentes do Kafka

### 1. Tópico Kafka
Um grupo de mensagens que pertencem a uma categoria específica é conhecido como Tópico. Armazenamentos de dados em tópicos. Além disso, podemos replicar e particionar tópicos. Aqui, replicar refere-se a cópias e partição refere-se à divisão. Além disso, visualize-os como logs nos quais Kafka armazena mensagens. No entanto, esta capacidade de replicar e particionar tópicos é um dos fatores que permitem a tolerância a falhas e escalabilidade do Kafka.

### 2. Produtor Kafka
Os produtores publicam as mensagens sobre um ou mais tópicos Kafka.

### 3. Consumidor Kafka
Os consumidores pegam um ou mais tópicos e consomem mensagens já publicadas através da extração de dados dos corretores.

### 4. Corretor Kafka
São basicamente sistemas que mantêm os dados publicados. Um único broker pode ter zero ou mais partições por tópico.

### 5. Kafka Zookeeper
Com a ajuda do Zookeeper, Kafka fornece aos corretores metadados sobre os processos em execução no sistema e concede verificação de integridade e eleição de liderança do corretor.

## Anatomia de um log
Vemos o log como as partições. Basicamente, uma fonte de dados grava mensagens no log. Uma das vantagens é que a qualquer momento um ou mais consumidores podem ler o log que selecionarem. Aqui, o diagrama abaixo mostra que um log está sendo gravado pela fonte de dados e lido pelos consumidores em diferentes deslocamentos.

## Registro de dados
Pelo Kafka, as mensagens são retidas por um período de tempo considerável. Além disso, os consumidores podem ler conforme sua conveniência. No entanto, se o Kafka estiver configurado para manter mensagens por 24 horas e um cliente ficar inativo por mais de 24 horas, o cliente perderá mensagens.

E as mensagens podem ser lidas a partir do último deslocamento conhecido, se o tempo de inatividade por parte do consumidor for de apenas 60 minutos. Kafka não acompanha o que os consumidores estão lendo em um tópico.

## Partição em Kafka
Existem poucas partições em cada corretor Kafka. Cada partição pode ser um líder ou uma réplica de um tópico. Além disso, juntamente com a atualização das réplicas com novos dados, o Leader é responsável por todas as gravações e leituras de um tópico. A réplica assume o papel de novo líder se de alguma forma o líder falhar.

##  Importância do Java no Apache Kafka
Apache Kafka é escrito em Java puro e também a API nativa do Kafka é java. No entanto, muitas outras linguagens como C++, Python, .Net, Go, etc. também suportam Kafka.

Ainda assim, uma plataforma onde não há necessidade de utilização de biblioteca de terceiros é o Java. Além disso, podemos dizer que escrever código em linguagens diferentes de Java será um pouco trabalhoso.

Além disso, podemos usar a linguagem Java se precisarmos das altas taxas de processamento que são padrão no Kafka. Além disso, Java oferece um bom suporte comunitário para clientes consumidores Kafka. Portanto, é a escolha certa implementar Kafka em Java.

##  Casos de uso do Kafka
Existem vários casos de uso do Kafka que mostram porque realmente usamos o Apache Kafka.

### Mensagens
Kafka é o melhor substituto para os corretores de mensagens tradicionais. Podemos dizer que o Kafka tem melhor rendimento, replicação, tolerância a falhas e particionamento integrado, o que o torna uma solução melhor para aplicativos de processamento de mensagens em grande escala.

### Métricas
Kafka é utilizado principalmente para dados de monitoramento operacional. Inclui a agregação de estatísticas de aplicativos distribuídos para gerar feeds centralizados de dados operacionais.

### Fonte de eventos
Kafka é um ótimo back-end para aplicativos de fornecimento de eventos, pois suporta dados de log armazenados muito grandes.

## Comparações em Kafka
Muitos aplicativos oferecem a mesma funcionalidade do Kafka, como ActiveMQ, RabbitMQ, Apache Flume, Storm e Spark. Então por que você deveria optar pelo Apache Kafka em vez de outros?

Vejamos as comparações abaixo:

### 1. Apache Kafka versus Apache Flume

I. Tipos de ferramenta

Apache Kafka – É uma ferramenta de uso geral para diversos produtores e consumidores.

Apache Flume – Considerando que é uma ferramenta de propósito especial para aplicações específicas.

II. Recurso de replicação

Apache Kafka – Usando pipelines de ingestão, ele replica os eventos.

Apache Flume – Não replica os eventos.

### 2. RabbitMQ x Apache Kafka

Uma das principais alternativas do Apache Kafka é o RabbitMQ.

I. Características

Apache Kafka – É distribuído. Os dados são compartilhados e replicados com durabilidade e disponibilidade garantidas.

RabbitMQ – oferece comparativamente menos suporte para esses recursos.

II. Taxa de desempenho

Apache Kafka – Sua taxa de desempenho é alta, até 100.000 mensagens/segundo.

RabbitMQ – Considerando que a taxa de desempenho do RabbitMQ é de cerca de 20.000 mensagens/segundo.

III. Em processamento

Apache Kafka – permite processamento distribuído de log confiável. Além disso, existe semântica de processamento de stream incorporada aos Kafka Streams.

RabbitMQ – O consumidor é baseado apenas em FIFO, lendo do HEAD e processando sequencialmente.

### 3. Sistemas de filas tradicionais versus Apache Kafka

I. Retenção de mensagens

Sistemas de filas tradicionais – A maioria dos sistemas de filas descarta as mensagens após elas terem sido processadas no final da fila.

Apache Kafka – Aqui, as mensagens persistem mesmo depois de processadas. Eles não são removidos quando os consumidores os recebem.

II. Processamento baseado em lógica

Sistemas de Filas Tradicionais – Não permitem processar lógica baseada em mensagens ou eventos semelhantes.

Apache Kafka – Permite processar lógica baseada em mensagens ou eventos idênticos.
