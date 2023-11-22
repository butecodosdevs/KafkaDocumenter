# Apache Kafka fluxo de trabalho | Kafka Pub-Sub Mensagens

No nosso último  **tutorial Kafta**, nos discutimos **Kafka Docker.** Hoje, nos vamos discutir o fluxo de trabalho do Kafka. Também iremos cobrir o fluxo de trabalho do Pub-Sub Mensagens juntamente com o fluxo de trabalho de trabalho de fila de mensagens / Grupo consumidor in detalhes. Além disso iremos ver a função de Guarda de zoologico no Apache Kafka.

Então, Vamos começar com o fluxo de trabalho do Kafka.

# O que é o fluxo de trabalho do Kafka?

No Fluxo de trabalho do Kafka, Kafka é uma coleção de tópicos os quais são separados em uma ou mais partições, as partições são sequências de mensagens, onde o index indica qual mensagem (também chama um offset). Porém, dentro de um **Kafka cluster**, todos os dados são desmembrados das partições.

As mensagens recebidas estão presentes no final de uma, por isso o consumidor (consumer) pode lê-las. Além de, por replicar a mensagem para diferentes agentes(brokers) ela mantém durabilidade.

De maneira bem rápida, persistente, segura, com tolerância a falhas e zero tempo de inatividade Kafka oferece a Pub-sub e um sistema de mensagens em fila. Além disso, produtores enviam a mensagem para um tópico e o consumidor pode selecionar qualquer uma dessas mensagens como bem desejar.

# Workflow of Pub-Sub Messaging

No Apache Kafka, o fluxo de trabalho gradual do Pub-Sub Messaging é:

- Em intervalos regulares, **Kafka Producers** envia uma mensagem para um tópico.
- **Kafka Brokers** armazena todas as mensagens em partições configuradas para esse particular tópico, garantindo distribuição igual dessas mensagens entre todas as partições. Por exemplo, Kafka irá guardar uma mensagem na primeira partição a segunda mensagem na segunda partição se existirem 2 partições.
- Além disso, **Kafka Consumer** se inscreve para um tópico específico.
- quando o consumidor (consumer) estiver inscrito em um tópico, Kafka oferece o atual offset do tópico para o consumer (consumidor) e salva o offset no conjunto Zookeeper.
- Também, o consumidor vai chamar o Kafka em intervalos regulares por novas mensagens (tipo 100 Ms).
- Kafka enviará as mensagens para o consumer(consumidor) assim que receber dos producer(produtores).
- O consumer(consumidor) irá receber a mensagem e processá-la.
- Então Kafka broker recebe a resposta da mensagem processada.
- Avançando, o offset muda e se atualiza para os novos valores assim que o Kafta recebe o conhecimento. Mesmo durante during condição de falha ou desencronizaçao dos broker do servidor, o consumer(consumidor) pode ler as mensagens corretamente, por causa do ZooKeeper mantendo o offsets.
- Porém, até que o consumer pare as requisições, o processo repete.
- Como benefício, o consumidor pode voltar ou pular qualquer offset de qualquer topico a qualquer tempo e tambem pode ler todas as mensaguem subsequentes que desejar.

# Workflow do Kafka Fila de Mensagem/Grupo Consumidor

Um grupo de consumidores Kafka tendo o mesmo grupo ID pode se subescrever para um topico, no lugar de apenas um consumidor, numa sistema de mensagens em fila.

No entanto, com o mesmo grupo id todos os consumidores, aqueles que estão inscritos no mesmo topico são considerados como um grupo que compartilha as mensagens. O workflow desse sistema:

- Em intervalos regulares, Kafka Producers envia mensagens para um Kafka topic.
- Semelhante ao cenário  anterior, aqui o Kafta também  quarda todas as mensagens nas partições configuradas desse topico.
- Além disso, um único consumidor no Kafka se increve a um topico especifico.
- Da mesma maneira do Pub-Sub Mensagens, Kafka interage com o consumidor até um novo consumidor se inscrever para o mesmo topico.
- Assim que o novo consumidor chega, o modo de compartilhamento começa nas operações e compartilha as informações entre os dois Kafka consumers. Além disso, até o numero de consumidores Kafka se iqualse ao numero de partiçoes configuradas para o topico em particular, o compartilhamento continua.
- Embora, o novo consumidor no Kafka não vai receber mais nenhuma mensagem, uma vez que o numero de consumidores Kafka excede o numero de partiçoes. Isso acontece até que um consumidor existente se desiscreva. Esse cenario chega porque no Kafka existe uma condição que cada consumidor Kafka vai ter um minimo de uma partição e se nenhuma partição fica em branco, ai novos consumidores terão de esperar.
- Em adição, nos tambem chamamos de Grupo Consumidor Kafka. Por isso, Apache Kafka ira oferecer o melhor dos sistemas de maneira simples e eficiente.

# Atribuições do ZooKeeper no Apache Kafka

Apache Zookeeper servidor como uma interface de coordenação entre o Kafka broker and consumers. Também, Also, we can say it is a distributed configuration and synchronization service.

**Tecnologia esta evoluindo rapidamente!**
***Fique por dentro com o DataFlair no WhatsApp!!***

Basicamente, os cluster do ZooKeeper compartilha as informações com os servidoress Kafka. Além disso, Kafka guarda informação basica dos metadados no ZooKeeper Kafka, como os topicos, brokers, consumers offsets (fila de leitores) e por ai vai.

Além disso, falhas no Kafka Zookeeper/broker não afeta o Kafka cluster. Isso é porque as informações criticas que são armazenadas do ZooKeeper é replicada em seus conjuntos. Então Kafka restaura o estado enquanto ZooKeeper reinicia, levando a zero o tempo de inatividade do Kafka.

Porém, Zookeeper também realiza a eleição de lider entre os Kafka brokers, nos casos de falha de liderança.

Portanto, tudo se tratava do fluxo de trabalho do Apache Kafka. Espero que você goste de nossa explicação.

# Conclusão

Consequentemente, vimos o conceito do fluxo de trabalho do Apache Kafka. Além disso, neste tutorial do Kafka WorkFlow, discutimos o fluxo de trabalho do sistema de mensagens Pub-Sub, bem como o fluxo de trabalho do sistema de mensagens do **Kafka Queue**(fila do Kafka).

Finalmente, Nos vimos o papel do Zookeeper no Apache Kafka. Ainda assim, se surgir alguma dúvida em relação ao fluxo do trabalho do Kafka, fique a vontade para perguntar na seção de comentários.




