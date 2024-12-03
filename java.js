// Seleciona o formulário
const form = document.querySelector('form');

// Adiciona o evento de submissão
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Previne o envio padrão do formulário

    // Captura os valores dos campos
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const date = form.date.value;
    const time = form.time.value;
    const guests = form.guests.value;

    // Cria um objeto com os dados da reserva
    const reservation = {
        name,
        email,
        phone,
        date,
        time,
        guests
    };

    // Salva os dados no Local Storage
    localStorage.setItem('reservation', JSON.stringify(reservation));

    // Exibe uma mensagem de confirmação
    alert(`Reserva confirmada para ${name} no dia ${date} às ${time} para ${guests} pessoas.`);

    // Opcional: Redirecionar para outra página
    // window.location.href = 'thankyou.html';
});
