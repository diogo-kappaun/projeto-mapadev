/*

  OBJETIVO - quando clicarmos na aba temos que mostrar o conteudo da aba que foi clicada pelo usuario e esconder o conteudo da aba anterior

  - passo 1 - dar um jeito de pegar os elementos que representam as abas no HTML

  - passo 2 - dar um jeito de identificar o clique no elemento da aba

  - passo 3 - quando o usuario clicar, desmarcar a aba selecionada

  - passo 4 - marcar a aba clicada como selecionado

  - passo 5 - esconder o conteudo anterior
  
  - passo 6 - mostrar o conteudo da aba selecionada

*/

// passo 1 - dar um jeito de pegar os elementos que representam as abas no HTML
const tabs = document.querySelectorAll(".tab");

tabs.forEach(tab => {
  // passo 2 - dar um jeito de identificar o clique no elemento da aba
  tab.addEventListener("click", function() {

    if(tab.classList.contains("selecionado")) {
      return;
    }

    selecionarAba(tab)
    mostrarInfo(tab)
  }) 
})

function selecionarAba(tab) {
  // passo 3 - quando o usuario clicar, desmarcar a aba selecionada
  const tabSelecionado = document.querySelector(".tab.selecionado");
  tabSelecionado.classList.remove("selecionado");
  
  // passo 4 - marcar a aba clicada como selecionado
  tab.classList.add("selecionado");
}

function mostrarInfo(tab) {
  // passo 5 - esconder o conteudo anterior
  const infoSelecionado = document.querySelector(".info.selecionado");
  infoSelecionado.classList.remove("selecionado")

  // passo 6 - mostrar o conteudo da aba selecionada
  const idDoElementoDeInfoDaAba = `info-${tab.id}`

  const infoAserMostrada = document.getElementById(idDoElementoDeInfoDaAba)
  infoAserMostrada.classList.add("selecionado")
}