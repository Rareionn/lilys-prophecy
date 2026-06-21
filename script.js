document.addEventListener('DOMContentLoaded', () => {
    const entryMenu = document.getElementById('entry-menu');
    const mainContent = document.getElementById('main-content');
    const colorInput = document.getElementById('color-input');
    const submitBtn = document.getElementById('submit-btn');
    const errorMessage = document.getElementById('error-message');

    submitBtn.addEventListener('click', () => {
        const answer = colorInput.value.trim().toLowerCase();
        if (answer === 'purple') {
            entryMenu.classList.add('fade-out');
            mainContent.classList.remove('hidden');
            setTimeout(() => {
                entryMenu.classList.add('hidden');
            }, 800);
        } else {
            errorMessage.classList.remove('hidden');
            setTimeout(() => {
                errorMessage.classList.add('hidden');
            }, 2000);
        }
    });

    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('is-flipped');
        });
    });
});
