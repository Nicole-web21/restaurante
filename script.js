// Seleciona o formulário
const form = document.querySelector('form');

// Função para salvar os dados no Local Storage
function saveToLocalStorage(participant) {
    const participants = JSON.parse(localStorage.getItem('participants')) || [];
    participants.push(participant);
    localStorage.setItem('participants', JSON.stringify(participants));
}

// Função para exibir uma mensagem de confirmação
function showConfirmationMessage(name) {
    alert(`Obrigado, ${name}! Sua participação foi registrada com sucesso.`);
}

// Evento de submissão do formulário
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Captura os valores dos campos
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const phone = form.phone.value.trim();
    const source = form.source.value;

    // Valida os campos obrigatórios
    if (!name || !email || !phone || !source) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }

    // Cria um objeto com os dados do participante
    const participant = {
        name,
        email,
        phone,
        source,
        date: new Date().toLocaleString() // Registra a data de inscrição
    };

    // Salva os dados no Local Storage
    saveToLocalStorage(participant);

    // Exibe a mensagem de confirmação
    showConfirmationMessage(name);

    // Limpa o formulário após o envio
    form.reset();
});
