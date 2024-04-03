function solicitarDoacao() {
    const valorDoacao = prompt("Quanto você quer doar?");

    if(valorDoacao !== null) {
        const confirmacao = confirm(`Você deseja doar R$ ${valorDoacao}?`);

        if (confirmacao) {
            alert("Doação enviada com sucesso! Obrigado pela sua contribuição.");
        } else {
            alert("Doação cancelada.");
        }
    }
}

function mostrarAlerta() {
    alert("Você foi cadastrado com sucesso! Agora pode participar do voluntariado do projeto. Obrigado!");
}

const participarButton = document.querySelector('.participar');
const voluntarioButton = document.querySelector('.voluntario');

participarButton.addEventListener('click', () => {
    alert('Parabéns! Você garantiu a vaga para participar do projeto. Iremos mandar mais inforamções no seu e-mail.');
});

voluntarioButton.addEventListener('click', () => {
    alert('Obrigado! Agora você é um Voluntário do Projeto. Iremos mandar mais informações no seu e-mail.');
});