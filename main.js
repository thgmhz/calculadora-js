// DESAFIO: corrija o bug
// 1. Faça uma operação qualquer, exemplo: 4*4
// 2. Clique no botão 'igual' para exibir o resultado
// 3. Quando o resultado aparecer, clique no botão 'igual' novamente
// 4. Note que o programa adicionou outro 'igual'... Corrija esse bug!!

//////////////////////////////////////////////////////
// Função genérica para adicionar evento de clique
//////////////////////////////////////////////////////
function adicionarEventoDeClique (elemento, funcao) {
  elemento.onclick = funcao
}

////////////////////////////////////
// Exibe resultado do cálculo
////////////////////////////////////
let exibiuResultado = false
function exibirResultado () {
  const resultado = eval(visor.textContent)
  visor.textContent = '= ' + resultado
  
  exibiuResultado = true
  jaClicouNaOperacao = false // zera a variavel para recomeçar
}

////////////////////////////////////
// Eventos dos botões de Números
////////////////////////////////////
function aoClicarNoNumero () {
  const numeroClicado = this.value
  const valorNoVisor = visor.textContent

  if (exibiuResultado) {
    exibiuResultado = false
    novoValor = numeroClicado
  } else {
    novoValor = valorNoVisor + numeroClicado
  }

  visor.textContent = novoValor
}

const botoesNumeros = document.querySelectorAll('#numeros button')

botoesNumeros.forEach(elemento => 
  adicionarEventoDeClique(elemento, aoClicarNoNumero)
)

////////////////////////////////////
// Eventos dos botões de Operações
////////////////////////////////////
let jaClicouNaOperacao = false

function aoClicarNaOperacao() {
  const operacao = this.value
  
  // se clicou no botão 'igual' deve exibir o resultado
  if (operacao === '=' && !exibiuResultado) {
    exibirResultado()
    return
  }

  // previne escolher duas operaçĩes
  if (jaClicouNaOperacao && exibiuResultado) {
    return
  }

  const valorNoVisor = visor.textContent
  visor.textContent = valorNoVisor + operacao

  jaClicouNaOperacao = true 
}

const botoesOperacoes = document.querySelectorAll('#operacoes button')

botoesOperacoes.forEach(elemento =>
  adicionarEventoDeClique(elemento, aoClicarNaOperacao)
)