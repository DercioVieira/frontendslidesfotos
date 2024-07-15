// Seleciona todos os links dentro do menu
const menuLinks = document.querySelectorAll('nav ul li a');

// Adiciona um listener para cada link
menuLinks.forEach(link => {
  link.addEventListener('click', function() {
    // Remove a classe 'active' de todos os links
    menuLinks.forEach(link => link.classList.remove('active'));
    // Adiciona a classe 'active' ao link clicado
    this.classList.add('active');
  });
});
