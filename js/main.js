// Animación de escritura simple
const text = document.querySelector('.typing-text');
const strText = text.textContent;
text.textContent = "";
let i = 0;

function typeWriter() {
    if (i < strText.length) {
        text.textContent += strText.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
    }
}

window.onload = typeWriter;

// Efecto de scroll para las secciones glass
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.glass').forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(50px)";
    el.style.transition = "all 0.8s ease-out";
    observer.observe(el);
});