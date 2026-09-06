document.addEventListener('DOMContentLoaded', function() {
    // Логика открытия дверей (ваша существующая)
    const doors = document.querySelectorAll('.door-half');
    const wrapper = document.getElementById('appContainer');

    doors.forEach(door => {
        door.addEventListener('click', function() {
            wrapper.classList.add('open');
        });
    });

    // Логика отправки формы
    const form = document.getElementById('rsvpForm');

    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Предотвращаем перезагрузку страницы

        const formData = new FormData(form);

        // ЗАМЕНИТЕ '@mail.ru' на ваш реальный email
        fetch('https://formsubmit.co/ajax/kozsofa856@gmail.com', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Ошибка сети или сервера');
                }
                return response.json();
            })
            .then(data => {
                // Успешная отправка
                alert("Спасибо! Ваш ответ отправлен. Ждем вас на нашей росписи! 💖");
                form.reset(); // Очистить поля после успешной отправки
            })
            .catch(error => {
                // Ошибка
                alert("Упс! Произошла ошибка при отправке. Пожалуйста, попробуйте еще раз.");
                console.error('Ошибка:', error);
            });
    });
});