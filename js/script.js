// Seleciona todos os elementos com a classe 'slide'
const slides = document.querySelectorAll('.slide');
// Inicializa o índice do slide atual
let slideAtual = 1;
// Função para mostrar um slide específico
function mostrarSlide(n) {
    // Remove a classe 'current' do slide atual
    slides[slideAtual].classList.remove('current');
    // Calcula o novo índice do slide atual baseado no parâmetro 'n'
    slideAtual = (n + slides.length) % slides.length;
    // Garante que o índice do slide atual seja positivo
    if (slideAtual < 0) {
        slideAtual = slides.length - 1;
    }
    // Adiciona a classe 'current' ao novo slide atual
    slides[slideAtual].classList.add('current');
}
// Função para avançar ou retroceder nos slides
function maisSlides(n) {
    // Chama a função mostrarSlide com o novo índice do slide
    mostrarSlide(slideAtual + n);
}
// Mostrar o primeiro slide ao carregar a página
mostrarSlide(slideAtual);
const slides02 = document.querySelectorAll('.slide02');
let slideAtual02 = 0;
function mostrarSlide02(x) {
    slides02[slideAtual02].style.display = 'none';  // Oculta o slide atual
    slideAtual02 = (x + slides.length) % slides.length;  // Calcula o índice do próximo slide
    slides02[slideAtual02].style.display = 'block';  // Mostra o próximo slide
}
function avançarSlide(x) {
    mostrarSlide02(slideAtual02 + x);  // Move para o próximo slide
}

// Mostra o primeiro slide ao carregar a página
mostrarSlide02(slideAtual02);

