## **Arquitetura do Kafka  – Apis do Apache Kafka**

A arquitetura do Kafka possui 4 Apis principais: a Producer API, Consumer API, Steams API e a Connector API.
### **a) Producer API**

A fim de publicar um Fluxo (Stream) de registros para um ou mais tópicos do Kafka, a Producer API dá permissão a uma aplicação.
### **b) Consumer API**

Essa API permite uma aplicação se inscrever para um ou mais tópicos e de processar o fluxo de registros por eles.

### **c) Streams API**

Além disso, agir como processador de fluxos, consumindo um fluxo de entradas de um ou mais tópicos e produzindo um fluxo para um ou mais tópicos de saída: efetivamente transformando o fluxo de entrada em um fluxo de saída, a Streams API permite habilita uma aplicação.

### **c) Arquitetura do Apache Kafka – Cluster**

A imagem abaixo apresenta o diagrama do Cluster no Apach Kafka:
![[Kafka-Architecture 1.webp]]

Eis abaixo a descrição de cada componente da Arquitetura do Kafka demonstrada acima:

### **a) Kafka Broker**

Para balancear a carga, o Kafka Cluster geralmente se consiste de múltiplos brokers. Contudo, eles são stateless, assim para manter o estado do Cluster se usa o ZooKeeper. Contudo, uma instância do Kafka Broker pode suportar centenas de dezenas de leituras e inscrições por segundo.

Enquanto que, sem uma performace de impacto, cada broker consegue suportar Terabytes de mensagens. Inclusive, tenha certeza de performar a eleição de um Broker Leader.


### **a) Kafka – ZooKeeper**

No intuito de manejar e coordenar os dados, o broker do Kafka usa Zookeeper. Inclusive, é usado para notificar o produtor e o consumidor sobre a presença de qualquer novo broker no Kafka ou falha do broker no sistema Kafka.

Desde que o Zookeeper envie uma notificação acerca/quanto a da presença ou falha do broker, então o produtor e o consumidor tomam a decisão e começam a coordenar suas tarefas com outro broker.
### **b) Kafka Producers

Além disso, os Producers no Kafka inserem dados aos Brokers. Todos os produtores varrem, buscam e enviam uma mensagem para o novo broker, precisamente quando o broker é inicializado.

Atenção, tenha em mente que o produtor Kafka envia mensagens tão rápido quanto o broker consegue suportar, e não espera por confirmações do broker.
### **a) Kafka Consumers**

Via deslocamento de partição (partition offset) o Kafka Consumer mantém quantas mensagens foram consumidas, pois os Kafka brokers são stateless. Além disso, você consegue garantir que o consumidor consumiu todas as mensagens anteriores uma vez que o consumidor confirme um conjunto de mensagens.

Afim de se um buffer de bytes pronto para o consumo, o Consumidor emite uma chamada assíncrona para o Broker. Ao fornecer um valor deslocado (offset), os Consumidores podem rever ou pular à qualquer ponto da partição.
O ZooKeeper notifica ao Consumidor o valor deslocado.
## **Arquitetura do Kafka - Conceitos fundamentais**

### **a) Kafka Topics**

O Tópico (Topic) é um canal lógico donde os Produtores publicam mensagens e os Consumidores as recebem.

1. O Tópico define o fluxo de um tipo de dado/classificação.
2. Nos Tópicos, mensagens são estruturadas ou organizadas. Um tipo específico de mensagem é publicada em um Tópico específico.
3. Inicialmente, os Produtores escrevem suas mensagens para os Tópicos e, então, os Consumidores lêem estas mensagens dos Tópicos.
4. Num Cluster Kafka, o Tópico é identificado por seu nome e deve ser único.
5. Não há limite para quantos Tópicos possam existir.
6. Não é possível modificar ou atualizar qualquer tipo de dado no momento que for publicado.

Eis abaixo uma imagem que demonstra o relacionamento entra os Tópicos Kafka e as Partições.


### **b) Partitions no Kafka **

Num Cluster Kafka os Tópicos são divididos em Partições (Partitions) e replicadas entre os Brokers.

1. Contudo, não há garantia para qual partição em específico será a mensagem será escrita.
2. É-se possível adicionar uma chave de referência a uma mensagem. Isto garante que todas estas mensagens, com a mesma chave, serão distribuídas na mesma partição  se o Produtor publica uma mensagem com uma chave. Dada esta funcionalidade, o Kafka oferece uma garantia de mensagens sequenciais. 
   Logicamente, tal acontece APENAS quando uma chave é adicionada.
3. Em uma partição as mensagens são armazenadas de forma sequencial.
4. Em uma partição, cada mensagem é assinalada com um ID incremental, também conhecido como offset (deslocado).
5. Contudo, apenas dentro destas partições que os valores offset são significativos. 
   Inclusive, em um Tópico, este valor possuem nenhum valor entre partições.
6. Não há limite para o número de Partições existentes.

### **c) Fator de Replicação de Tópicos no Kafka**

Ao projetar um sistema Kafka, uma das melhores decisões a se serem tomadas é a de fatorar a replicação de Tópicos. Por exemplo, as cópias dos tópicos de um broker podem solucionar a crise de outro broker, caso este falhe.

Por exemplo, temos aqui 3 brokers e 3 topics:

Broker1 tem o Topic1 e a Partition0, sua réplica está no Broker2 e assim em diante.
Ele possui um fator de replicação de 2, o que significa que terá uma cópia adicional além da principal.![[kafka-topic-replication.webp]]
Alguns pontos chave:

1. A replicação ocorre APENAS no plano de replicação.
2. Dada uma partição, apenas um broker pode ser o lider, por vez.
3. Não é possível ter um fator de replicação maior do que o número de brokers disponíveis.
### **d) Consumer Group**

1. Pode-se existir múltiplas instâncias de Consumidores rodando.
2. Cada grupo Consumidor terá um único Id_de_grupo.
3. Exatamente uma instância consumidora lê os dados de uma partição em um grupo Consumidor, no momento de leitura.
4. Sim, quando há mais de um grupo de consumidores, neste caso, uma instância de cada um desses grupos pode ler de uma única partição.
5. Contudo, haverão Consumidores inativos, se o número de Consumidores for maior que o de Partições. Tomemos como exemplo: se houverem 8 Consumidores e 6 Partições em um único grupo Consumidor, isso significa que haverão 2 Consumidores inativos.

E esse foi o resumo sobre a arquitetura do Kafka.
