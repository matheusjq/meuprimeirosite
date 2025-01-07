// Adiciona o evento de clique no botão
document.getElementById("btn-click").addEventListener("click", function () {
  // Exibe a mensagem de alerta
  alert("Parabéns, você clicou no botão! Clique em OK.");
  
  // Após o clique, o botão desaparecerá
  document.getElementById("btn-click").style.display = "none";

  // Cria um novo botão
  var novoBotao = document.createElement("button");
  novoBotao.textContent = "Isso mesmo, mais um, clica ai.";
  
  // Adiciona um evento de clique no novo botão
  novoBotao.addEventListener("click", function () {
    // Cria uma div de texto para exibir a mensagem
    var divTexto = document.createElement("div");
    divTexto.textContent = "TE AMOOOOOOOOOOOOOOOOOOOOOOOOOOOOO";
    
    // Estiliza a div de texto
    divTexto.style.color = "RED"; // Texto em azul
    divTexto.style.fontSize = "40px"; // Tamanho do texto
    divTexto.style.marginTop = "40px"; // Espaçamento superior
    divTexto.style.textAlign = "center"; // Centraliza o texto

    // Adiciona a div de texto à página
    document.body.appendChild(divTexto);
    
    // Exibe o alerta
    alert("UAU, MAIS UM? QUEM DIRIA. Clica ai");
  });
  
  // Insere o novo botão no corpo da página
  document.body.appendChild(novoBotao);
});
