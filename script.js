// --- para configurar o contador ---

// Coloque a data de início do namoro aqui
// Formato: Ano, Mês (começa do 0!), Dia
// (Janeiro é 0, Fevereiro é 1, Março é 2, etc...)
const dataInicio = new Date(2024, 11, 21); // <<< MUDE AQUI (Ex: 15 de Jan de 2023)

// onde o numero vai ser exibido
const elementoContador = document.getElementById('dias-contador');

function atualizarContador() {
    const hoje = new Date();
    const diferencaTempo = hoje.getTime() - dataInicio.getTime();
    const diasPassados = Math.floor(diferencaTempo / (1000 * 60 * 60 * 24));
    elementoContador.textContent = diasPassados;
}

// --- vamos por a música agora) ---

// Pega os elementos de áudio e o botão
const musica = document.getElementById('musica-fundo');
const botaoMusica = document.getElementById('musica-toggle-btn');

//define o volume
// (0.0 = mudo, 1.0 = máximo. 0.5 é 50% do volume)
musica.volume = 0.5;

// play/pause
botaoMusica.addEventListener('click', () => {
    // Verifica se a música está pausada (ou não começou)
    if (musica.paused) {
        musica.play(); // Toca a música
        botaoMusica.textContent = 'Pausar ⏸️'; // Muda o texto do botão
    } else {
        musica.pause(); // Pausa a música
        botaoMusica.textContent = 'Tocar 🎵'; // Muda o texto de volta
    }
});


// Chama a função de atualizar o contador assim que a página carregar
document.addEventListener('DOMContentLoaded', atualizarContador);