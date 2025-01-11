const toggleButton = document.querySelector('.dark-mode-toggle');
const trilho = document.getElementById('trilho');
const body = document.body;

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    document.querySelector('header').classList.toggle('dark-mode');
    document.querySelector('footer').classList.toggle('dark-mode');
    document.querySelectorAll('.especialidades-box').forEach(box => {
        box.classList.toggle('dark-mode');
    });
    trilho.classList.toggle('dark');
});