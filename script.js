document.getElementById('ingresso-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const tipo = document.getElementById('tipo').value;

    // Mostrar modal com mensagem de confirmação
    const modal = document.getElementById('modal');
    const modalMensagem = document.getElementById('modal-mensagem');
    modalMensagem.innerHTML = `Obrigado, ${nome}! Seu ingresso (${tipo}) foi comprado com sucesso. Um e-mail de confirmação foi enviado para ${email}.`;
    modal.style.display = "block";
    
    // Limpar o formulário
    document.getElementById('ingresso-form').reset();
});

// Fechar modal
function fecharModal() {
    const modal = document.getElementById('modal');
    modal.style.display = "none";
}

// Feedback form
document.getElementById('feedback-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const feedbackNome = document.getElementById('feedback-nome').value;
    const feedbackMensagem = document.getElementById('feedback-mensagem').value;

    const feedbackDiv = document.getElementById('feedback-mensagem');
    feedbackDiv.innerHTML = `<p>Obrigado, ${feedbackNome}! Seu feedback foi enviado com sucesso.</p>`;

    // Limpar o formulário
    document.getElementById('feedback-form').reset();
});
