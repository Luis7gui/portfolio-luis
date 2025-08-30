// Smooth scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

//Log para confirmar que JS está rodando
console.log('Portfolio carregado com sucesso!');

const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Verificar tema salvo
const currentTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', currentTheme);

themeToggle.addEventListener('click', () => {
    const theme = html.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    html.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);

    // Trocar ícone
    themeToggle.querySelector('.toggle-icon').textContent = theme === 'light' ? '🌙' : '☀️';
});

// No inicio do arquivo, após pegar currentTheme
const icon = currentTheme === 'light' ?  '🌙' : '☀️';
themeToggle.querySelector('.toggle-icon').textContent = icon;