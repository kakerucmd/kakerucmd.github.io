document.querySelectorAll('.social-container').forEach(container => {
    const button = container.querySelector('.social-btn');
    const content = container.querySelector('.social-content');

    button.addEventListener('click', () => {
        const isActive = container.classList.toggle('active');

        if (isActive) {
            content.style.display = 'block';
            setTimeout(() => {
                content.style.opacity = '1';
                content.style.transform = 'translateY(0)';
            }, 5);
        } else {
            content.style.opacity = '0';
            content.style.transform = 'translateY(-10px)';
            setTimeout(() => {
                content.style.display = 'none';
            }, 100);
        }
    });
});
