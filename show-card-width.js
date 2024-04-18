function setCardWidthAsText(card) {
    const width = card.offsetWidth; // Получаем ширину карточки без 'px'
    card.textContent = width + 'px'; // Устанавливаем текст
}

document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
    const toggleWidth = document.getElementById('toggleWidth');

    // Создаём экземпляр ResizeObserver для отслеживания изменения размера карточек
    const resizeObserver = new ResizeObserver(entries => {
        if (toggleWidth.checked) {  // Проверяем, активирован ли чекбокс
            entries.forEach(entry => {
                setCardWidthAsText(entry.target);
            });
        }
    });

    // Подписываемся на изменения размера каждой карточки
    cards.forEach(card => {
        resizeObserver.observe(card);
    });

    // Обработчик изменения состояния чекбокса
    toggleWidth.addEventListener('change', function() {
        if (this.checked) {
            cards.forEach(setCardWidthAsText); // Немедленно устанавливаем ширину
        } else {
            cards.forEach(card => card.textContent = ''); // Очищаем текст, если чекбокс не активен
        }
    });

    // Обработчик события изменения размера окна
    window.addEventListener('resize', () => {
        if (toggleWidth.checked) {
            cards.forEach(setCardWidthAsText);
        }
    });
});