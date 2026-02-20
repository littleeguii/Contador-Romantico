
const dataInicio = new Date(2024, 11, 21);


const elementoContador = document.getElementById('dias-contador');

function atualizarContador() {
    const hoje = new Date();
    const diferencaTempo = hoje.getTime() - dataInicio.getTime();
    const diasPassados = Math.floor(diferencaTempo / (1000 * 60 * 60 * 24));
    elementoContador.textContent = diasPassados;
}

const musica = document.getElementById('musica-fundo');
const botaoMusica = document.getElementById('musica-toggle-btn');


musica.volume = 0.5;


botaoMusica.addEventListener('click', () => {

    if (musica.paused) {
        musica.play();
        botaoMusica.textContent = 'Pausar';
    } else {
        musica.pause();
        botaoMusica.textContent = 'Tocar';
    }
});



document.addEventListener('DOMContentLoaded', atualizarContador);
