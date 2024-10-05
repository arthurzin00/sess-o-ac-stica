// Feedback form
document.getElementById('feedback-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const feedbackNome = document.getElementById('feedback-nome').value;
    const feedbackMensagem = document.getElementById('feedback-mensagem').value;

    const respostaDiv = document.getElementById('feedback-resposta');
    respostaDiv.innerHTML = `<p>Obrigado, ${feedbackNome}! Seu feedback foi enviado com sucesso.</p>`;

    // Limpar o formulário
    document.getElementById('feedback-form').reset();
});
