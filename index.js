 // *************variaveis?****************

// elementoResposta vai procurar no CSS o seletor correspondente e fazer as respostas aparecer na tela.
const elementoResposta = document.querySelector("#resposta")
// vai pesquisar dentro do documento cadê o inputPergunta e coloca-lo dentro da variavel (const inputPergunta).
const inputPergunta = document.querySelector("#inputPergunta")
const buttonPerguntar = document.querySelector("#buttonPerguntar")
const respostas = [
  "Certeza!",
  "Não tenho tanta certeza.",
  "É decididamente assim.",
  "Não conte com isso.",
  "Sem dúvidas!",
  "Pergunte novamente mais tarde.",
  "Sim, definitivamente!",
  "Minha resposta é não.",
  "Você pode contar com isso.",
  "Melhor não te dizer agora.",
  "A meu ver, sim.",
  "Minhas fontes dizem não.",
  "Provavelmente.",
  "Não é possível prever agora.",
  "Perspectiva boa.",
  "As perspectivas não são tão boas.",
  "Sim.",
  "Concentre-se e pergunte novamente.",
  "Sinais apontam que sim.",
]

// dados de entrada? 
// clicar em fazer pergunta
function fazerPergunta() {

  if(inputPergunta.value == ""){
  alert("Digite sua pergunta")
  return //toda função que encontra um return ela para imediatamente para que seja digitada a pergunta.
  }

buttonPerguntar.setAttribute("disabled", true)

// vamos transformar em html para que a pergunta apareça na pagina.
const pergunta = "<div>" + inputPergunta.value + "</div>"

// gerar número aleatório
const totalRespostas = respostas.length
const numeroAleatorio = Math.floor(Math.random() * totalRespostas)

//dados de saídas?
// A propriedade innerHTML vai adicionar no h3 (html) as perguntas e respostas através do JS na pagina.
elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio]
elementoResposta.style.opacity = 1;
//sumir a resposta depois de 3 segundos

setTimeout(function() {
  elementoResposta.style.opacity = 0;
buttonPerguntar.removeAttribute("disabled")
}, 3000)


}