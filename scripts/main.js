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

// Typing animation
(function() {
    const typingText = document.getElementById('typingText');
    
    if (!typingText) {
        console.error('Elemento typingText não encontrado!');
        return;
    }
    
    const text = 'Luís Guilherme';
    let index = 0;
    
    function typeWriter() {
        if (index < text.length) {
            typingText.textContent = text.substring(0, index + 1);
            index++;
            setTimeout(typeWriter, 100);
        }
    }
    
    // Limpar o texto inicial e começar a animação
    typingText.textContent = '';
    setTimeout(typeWriter, 500); // Pequeno delay inicial
})();

// Animação de contadores
const animateCounters = () => {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000; // 2 segundos
        const increment = target / (duration / 16); // 60 FPS
        let current = 0;
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };
        
        updateCounter();
    });
};

// Ativar quando a seção de projetos aparecer na tela
const projectSection = document.querySelector('#projetos');
const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
        animateCounters();
        observer.disconnect(); // Animar só uma vez
    }
});

if (projectSection) {
    observer.observe(projectSection);
}