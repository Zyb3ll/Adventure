const gameText = document.getElementById('current-text');
const gameImage = document.getElementById('game-image');
const choicesContainer = document.getElementById('choices-container');

// Objeto que armazena as cenas do jogo
const scenes = {
    start: {
        text: "Bem-vinda ao mundo de Lumina. Você é Elara, uma tecelã de sonhos, e o destino da magia está em suas mãos. O Jardim Cintilante, outrora vibrante, agora está desbotado. Um antigo diário revela a verdade: as Pérolas Etéreas, fragmentos de luz mágica, devem ser encontradas para restaurar o Jardim.",
        image: "assets/images/background_forest.png", // Imagem inicial
        choices: [
            { text: "Abrir o diário e começar a busca.", nextScene: "readDiary" }
        ]
    },
    readDiary: {
        text: "Você folheia as páginas empoeiradas do diário. Ele fala de três Pérolas Etéreas, cada uma guardada em um reino elemental: a Floresta Murmurante, as Cavernas de Cristal e os Picos Nebulosos.",
        image: "assets/images/diary_open.png", // Você precisará criar esta imagem!
        choices: [
            { text: "Ir para a Floresta Murmurante.", nextScene: "forestPath" },
            { text: "Explorar as Cavernas de Cristal.", nextScene: "crystalCaves" },
            { text: "Subir os Picos Nebulosos.", nextScene: "mistyPeaks" }
        ]
    },
    forestPath: {
        text: "O ar da Floresta Murmurante é doce e úmido. Árvores antigas sussurram segredos enquanto seus galhos se entrelaçam, formando um teto verde. Um pequeno riacho cintila à sua frente.",
        image: "assets/images/forest_stream.png", // Você precisará criar esta imagem!
        choices: [
            { text: "Seguir o riacho.", nextScene: "followStream" },
            { text: "Adentrar a densa floresta.", nextScene: "denseForest" }
        ]
    },
    followStream: {
        text: "Você segue o riacho, e a água brilhante guia seu caminho. De repente, uma pequena criatura alada, com asas translúcidas como de libélula, surge e acena para você.",
        image: "assets/images/fairy_encounter.png", // Você precisará criar esta imagem!
        choices: [
            { text: "Estender a mão para a criatura.", nextScene: "befriendFairy" },
            { text: "Observar de longe.", nextScene: "observeFairy" }
        ]
    },
    befriendFairy: {
        text: "A criatura voa até sua mão, pousando suavemente. Ela irradia uma luz suave e te guia até um arbusto de amoras mágicas, onde a primeira Pérola Etérea repousa.",
        image: "assets/images/pearl_found.png", // Você precisará criar esta imagem!
        choices: [
            { text: "Pegar a Pérola Etérea.", nextScene: "pearl1Collected" }
        ]
    },
    pearl1Collected: {
        text: "A primeira Pérola Etérea agora está em suas mãos. Uma parte do Jardim Cintilante parece ter se reerguido em seu coração. Você sente que o caminho para as outras pérolas se revelará em breve. Qual o próximo passo?",
        image: "assets/images/jardim_restaurado_parcial.png", // Você precisará criar esta imagem!
        choices: [
            { text: "Explorar as Cavernas de Cristal.", nextScene: "crystalCaves" },
            { text: "Subir os Picos Nebulosos.", nextScene: "mistyPeaks" },
            { text: "Voltar para o início e repensar.", nextScene: "readDiary" }
        ]
    },
    // Adicione mais cenas aqui para os outros caminhos (crystalCaves, mistyPeaks, etc.)
    // E os finais do jogo!
    endGame: {
        text: "Parabéns! Você restaurou o Jardim Cintilante e trouxe a magia de volta a Lumina. A aventura de Elara continua em seu coração.",
        image: "assets/images/garden_restored_full.png", // Imagem do final feliz!
        choices: [
            { text: "Jogar novamente?", nextScene: "start" }
        ]
    }
};

let currentScene = "start"; // Cena inicial do jogo

// Função para exibir a cena atual
function displayScene(sceneName) {
    const scene = scenes[sceneName];
    gameText.textContent = scene.text;
    gameImage.src = scene.image;
    
    // Limpa as escolhas anteriores
    choicesContainer.innerHTML = '';

    // Cria os botões de escolha
    scene.choices.forEach(choice => {
        const button = document.createElement('button');
        button.classList.add('choice-button');
        button.textContent = choice.text;
        button.dataset.choice = choice.nextScene; // Armazena a próxima cena no atributo data-choice
        button.addEventListener('click', () => makeChoice(choice.nextScene));
        choicesContainer.appendChild(button);
    });
}

// Função para processar a escolha da jogadora
function makeChoice(nextSceneName) {
    currentScene = nextSceneName;
    displayScene(currentScene);
}

// Inicia o jogo ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    displayScene(currentScene);
});
