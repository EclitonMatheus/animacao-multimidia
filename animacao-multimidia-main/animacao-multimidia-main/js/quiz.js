const questions = [
    { question: "O que é animação em multimídia?", options: ["Movimento simulado", "Som digital", "Somente texto", "Vídeos longos"], answer: 0 },
    { question: "Software usado em animação vetorial:", options: ["After Effects", "Illustrator", "Paint", "Premiere"], answer: 1 },
    { question: "Animação 2D usa:", options: ["Modelos 3D", "Quadros desenhados", "Som", "Texturas"], answer: 1 },
    { question: "Em 3D, rigging significa:", options: ["Iluminação", "Criar ossos", "Aplicar texturas", "Editar áudio"], answer: 1 },
    { question: "GIF é ideal para:", options: ["Animações curtas", "Vídeos longos", "Áudio", "Textos"], answer: 0 },
    { question: "FPS significa:", options: ["Frames por segundo", "Files per second", "Fast pixel scale", "Frame pixel set"], answer: 0 },
    { question: "Stop motion usa:", options: ["Objetos reais fotografados", "Desenho 3D", "Som estéreo", "Vídeos capturados"], answer: 0 },
    { question: "Sprite é:", options: ["Imagem 2D usada em animação", "Áudio", "Modelo 3D", "Vetor"], answer: 0 },
    { question: "Tweening:", options: ["Criar quadros intermediários", "Criar áudio", "Criar textura", "Criar wireframe"], answer: 0 },
    { question: "Renderização:", options: ["Transformar cena em vídeo final", "Colorir modelos", "Criar ossos", "Animar sprites"], answer: 0 },
    { question: "Animação educacional ajuda porque:", options: ["Explica visualmente conceitos", "Substitui tudo", "Deixa pesado", "Só funciona offline"], answer: 0 },
    { question: "Animação vetorial é boa porque:", options: ["Escalável e leve", "Tem áudio", "É pesada", "Não escala"], answer: 0 },
    { question: "Quadros tradicionais usam:", options: ["24 fps", "5 fps", "2 fps", "1 fps"], answer: 0 },
    { question: "Tween serve para:", options: ["Interpolar quadros", "Converter áudio", "Salvar imagens", "Gerar sombras"], answer: 0 },
    { question: "Renderizar é:", options: ["Gerar imagem final", "Iluminar cena", "Aplicar blur", "Criar wireframe"], answer: 0 }
];

let selectedQuestions = [];
let currentIndex = 0;
let score = 0;
let selectedOption = null;

function startQuiz() {
    document.getElementById("resultScreen").classList.add("hidden");
    document.getElementById("quiz-card").classList.remove("hidden");

    selectedQuestions = questions.sort(() => Math.random() - 0.5).slice(0, 5);
    currentIndex = 0;
    score = 0;

    showQuestion();
}

function showQuestion() {
    const q = selectedQuestions[currentIndex];

    document.getElementById("questionText").textContent = q.question;

    const list = document.getElementById("optionsList");
    list.innerHTML = "";
    selectedOption = null;

    q.options.forEach((opt, i) => {
        let li = document.createElement("li");
        li.textContent = opt;

        li.onclick = () => {
            document.querySelectorAll("#optionsList li").forEach(x => x.classList.remove("selected"));
            li.classList.add("selected");
            selectedOption = i;
        };

        list.appendChild(li);
    });
}

document.getElementById("nextBtn").onclick = () => {
    if (selectedOption === null) {
        alert("Selecione uma alternativa!");
        return;
    }

    if (selectedOption === selectedQuestions[currentIndex].answer) score++;

    currentIndex++;

    if (currentIndex < selectedQuestions.length) {
        showQuestion();
    } else finishQuiz();
};

function finishQuiz() {
    document.getElementById("quiz-card").classList.add("hidden");
    document.getElementById("resultScreen").classList.remove("hidden");

    document.getElementById("scoreText").textContent =
        `Você acertou ${score} de 5 questões (${(score / 5 * 100).toFixed(0)}%).`;
}

window.onload = startQuiz;
