function irParaDependente() {
    const nome = document.querySelector('#etapa-responsavel input').value;
  if (nome === "") {
    alert("Por favor, preencha o nome do responsável antes de continuar.");
    return;
  }
    document.getElementById('etapa-responsavel').style.display = 'none';
    document.getElementById('etapa-dependente').style.display = 'block';
}

function irParaResponsavel() {
  document.getElementById('etapa-dependente').style.display = 'none';
  document.getElementById('etapa-responsavel').style.display = 'block';
}