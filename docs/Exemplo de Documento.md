# Exemplo de Documento

Esse documento é um exemplo do que você pode construir com a nossa aplicação utilizando os arquivos markdown como base.

## Títulos

Todos os títulos são marcados como <h1> e são centralizados no meio do documento contendo uma margem de **5rem** para todos os lados.

## Subtítulos

Todos os subtítulos são marcados com <h2> e não são centralizados no meio do documento. Além disso, todos os subtítulos apresentam uma margem de **5rem** para todos os lados.

## Parágrafo

Os parágrafos apresentam uma identação na primeira linha de **1rem**. Além disso, eles são representados pela tag <p> e, caso você não adicione nenhum tipo de estilo para palavras, não será adicionado nenhum outro. Alguns exemplos de estilo já foram utilizados, como o **bold**, e ainda há outros, como o ***itálico***. Outro ponto que pode ser utilizado é o famoso <pre>. Esse elemento tem uma determinada particularidade onde, em dispositivos com telas menores, o conteúdo perde um pouco de valor, visto que, mesmo quebrando a linha, a sua legibilidade não é preservada. Por conta disso, ele é removido em dispositivos com telas menores que _1200px_ de largura.

```js
const exemplo = "Código JavaScript";


function exemploDois() {
    console.log("Você pode dar o seu exemplo de código da forma que desejar!");
    console.log("Iremos renderizar com um fundo um pouco mais claro, e com as letras levemente avermelhadas");
}
```

Entretanto, códigos que são delimitados com uma linha só: `const exemplo = "dessa forma";` são apresentados dessa forma.

> Isso é um blockquote de exemplo e você pode utilizar como bem entender! Eu, particularmente, gosto de usar esse ponto para comentários adicionais. Isso é um blockquote de exemplo e você pode utilizar como bem entender! Eu, particularmente, gosto de usar esse ponto para comentários adicionais. Isso é um blockquote de exemplo e você pode utilizar como bem entender! Eu, particularmente, gosto de usar esse ponto para comentários adicionais.

## Imagens

Para usar imagens, usamos a sintaxe do próprio markdown, como no exemplo abaixo: ![Linux Pinguim](https://mdg.imgix.net/assets/images/tux.png?auto=format&fit=clip&q=40&w=100) 

Essa imagem foi feita com um link. Entretanto, você pode puxar imagens do nosso próprio servidor: ![Arch Linux Logo](/assets/arch_logo.png)

## Links
 
Se você quiser, pode usar links!  [Arch Linux Logo](/assets/arch_logo).