// Contato form
document.getElementById('contato-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const contatoNome = document.getElementById('contato-nome').value;
    const contatoEmail = document.getElementById('contato-email').value;
    const contatoMensagem = document.getElementById('contato-mensagem').value;

    const respostaDiv = document.getElementById('contato-resposta');
    respostaDiv.innerHTML = `<p>Obrigado, ${contatoNome}! Sua mensagem foi enviada com sucesso.</p>`;

    // Limpar o formulário
    document.getElementById('contato-form').reset();
});
