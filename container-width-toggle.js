document.addEventListener('DOMContentLoaded', function() {
    const resizeToggle = document.getElementById('resizeContainer');
    const containers = document.querySelectorAll('.container');

    resizeToggle.addEventListener('change', function() {
        containers.forEach(container => {
            if (this.checked) {
                container.style.maxWidth = '380px';  // Уменьшаем ширину каждого контейнера
            } else {
                container.style.maxWidth = '1260px'; // Возвращаем исходную ширину каждого контейнера
            }
        });
    });
});