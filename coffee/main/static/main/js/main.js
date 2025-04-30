document.getElementById('scrollToNiceToMeet').addEventListener('click', function(e) {
    e.preventDefault(); 

    const target = document.getElementById('niceToMeet');

    target.scrollIntoView({
        behavior: 'smooth'
    });
});

document.getElementById('scrollToNiceToMeet2').addEventListener('click', function(e) {
    e.preventDefault(); 

    const target = document.getElementById('niceToMeet');

    target.scrollIntoView({
        behavior: 'smooth'
    });
});


document.getElementById('scrollToCoffeeInMenu').addEventListener('click', function(e) {
    e.preventDefault(); 

    const target = document.getElementById('coffeeInMenu');

    target.scrollIntoView({
        behavior: 'smooth'
    });
});

document.getElementById('scrollToMenu').addEventListener('click', function(e) {
    e.preventDefault(); 

    const target = document.getElementById('menu');

    target.scrollIntoView({
        behavior: 'smooth'
    });
});

document.getElementById('scrollToReserv').addEventListener('click', function(e) {
    e.preventDefault(); 

    const target = document.getElementById('reserv');

    target.scrollIntoView({
        behavior: 'smooth'
    });
});

document.getElementById('scrollToReview').addEventListener('click', function(e) {
    e.preventDefault(); 

    const target = document.getElementById('writeReview');

    target.scrollIntoView({
        behavior: 'smooth'
    });
});

//menuscrolls

document.getElementById('toCoffee').addEventListener('click', function(e) {
    e.preventDefault(); 

    const target = document.getElementById('coffeeInMenu');

    target.scrollIntoView({
        behavior: 'smooth'
    });
});

document.getElementById('toTea').addEventListener('click', function(e) {
    e.preventDefault(); 

    const target = document.getElementById('teaInMenu');

    target.scrollIntoView({
        behavior: 'smooth'
    });
});

document.getElementById('toMilkshakes').addEventListener('click', function(e) {
    e.preventDefault(); 

    const target = document.getElementById('milkshakesInMenu');

    target.scrollIntoView({
        behavior: 'smooth'
    });
});

document.getElementById('toKruassans').addEventListener('click', function(e) {
    e.preventDefault(); 

    const target = document.getElementById('kruassansInMenu');

    target.scrollIntoView({
        behavior: 'smooth'
    });
});

document.getElementById('toSandwiches').addEventListener('click', function(e) {
    e.preventDefault(); 

    const target = document.getElementById('sandwichesInMenu');

    target.scrollIntoView({
        behavior: 'smooth'
    });
});


document.getElementById('toSweet').addEventListener('click', function(e) {
    e.preventDefault(); 

    const target = document.getElementById('sweetInMenu');

    target.scrollIntoView({
        behavior: 'smooth'
    });
});

// обязательный выбор оценки в форме отзывов

function validateRating(event) {

    const ratingInputs = document.querySelectorAll('input[name="rating"]');
    let isChecked = false;

    for (const input of ratingInputs) {
        if (input.checked) {
            isChecked = true;
            break;
        }
    }

    if (!isChecked) {
        var error = document.getElementById('ratingError');
        error.classList.add('visible');
        return false;
    }

    var successMessage = document.getElementById('successMessage2');
    successMessage.classList.remove('hidden');
    successMessage.classList.add('visible');

    setTimeout(() => {
        successMessage.classList.remove('visible');
        successMessage.classList.add('hidden');
        setTimeout(() => {
            document.getElementById('reviewForm').reset();
        }, 1000);
    }, 3000);

    return true;
}

// маска номера телефона

document.addEventListener('DOMContentLoaded', function() {
    var element = document.getElementById('phone');
    var maskOptions = {
        mask: '+7(000)000-00-00',
        lazy: false
    };
    var mask = new IMask(element, maskOptions);

    element.addEventListener('input', function() {
        validatePhone();
    });
});

// валидация формы бронирования

function validatePhone() {
    var element = document.getElementById('phone');
    if (element.value.trim() === '' || element.value === '+7(___)___-__-__') {
        element.setCustomValidity('Пожалуйста, введите номер телефона.');
        element.reportValidity();
        return false;
    } else {
        element.setCustomValidity('');
    }
    return true;
}

function validateReservation() {
    const name = document.getElementById('name').value;
    const dateInput = document.getElementById('date');
    const timeInput = document.getElementById('time');
    const numPersons = document.getElementById('numPersons').value;

    document.querySelectorAll('.error').forEach(error => {
        error.classList.remove('visible');
    });

    // проверка на наличие цифр в имени
    if (/\d/.test(name)) {
        var error = document.getElementById('nameError');
        error.classList.add('visible');
        return false;
    }

    // проверка даты
    const today = new Date();
    const selectedDate = new Date(dateInput.value);
    const nextYear = new Date(today.getFullYear() + 1, 11, 31);

    if (selectedDate < today || selectedDate > nextYear) {
        var error = document.getElementById('dateError');
        error.classList.add('visible');
        return false;
    }

    // проверка времени
    const selectedTime = timeInput.value;
    const dayOfWeek = selectedDate.getDay(); 

    if ((dayOfWeek >= 1 && dayOfWeek <= 5) && (selectedTime < "08:00" || selectedTime > "22:00")) {
        var error = document.getElementById('timeError');
        error.classList.add('visible');
        return false;
    } else if ((dayOfWeek === 0 || dayOfWeek === 6) && (selectedTime < "10:00" || selectedTime > "22:00")) {
        var error = document.getElementById('timeError');
        error.classList.add('visible');
        return false;
    }

    // проверка количества персон
    if (numPersons > 5 || numPersons <= 0) {
        var error = document.getElementById('personError');
        error.classList.add('visible');
        return false;
    }

    var successMessage = document.getElementById('successMessage');
    successMessage.classList.remove('hidden');
    successMessage.classList.add('visible');

    setTimeout(() => {
        successMessage.classList.remove('visible');
        setTimeout(() => {
            document.getElementById('reservationForm').reset();
            successMessage.classList.add('hidden');
        }, 1000);
    }, 3000);

    return true;
}

// обработчик клавиш и полей ирл

document.getElementById('name').addEventListener('keydown', function(e) {
    const invalidKeys = [
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
        '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', 
        ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', 
        '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'
    ];

    if (invalidKeys.includes(e.key)) {
        e.preventDefault();
    }
});

document.getElementById('numPersons').addEventListener('keydown', function(e) {
    if (!/^[1-5]$/.test(e.key) && e.key !== 'Backspace' && e.key !== 'Delete') {
        e.preventDefault();
    }
});

document.getElementById('numPersons').addEventListener('input', function(e) {
    if (this.value.length > 1) {
        this.value = this.value.slice(0, 1);
    }
});

const numPersonsInput = document.getElementById('numPersons');
const personError = document.getElementById('personError');

numPersonsInput.value = 1;

numPersonsInput.addEventListener('input', function() {
    let currentValue = parseInt(this.value, 10);

    if (currentValue < 1) {
        this.value = 1;
        personError.classList.add('visible');
    } else if (currentValue > 5) {
        this.value = 5;
        personError.classList.add('visible');
    } else {
        personError.classList.remove('visible');
    }
});

numPersonsInput.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowUp') {
        let currentValue = parseInt(this.value, 10);
        if (currentValue < 5) {
            this.value = currentValue + 1;
        }
        e.preventDefault();
    } else if (e.key === 'ArrowDown') {
        let currentValue = parseInt(this.value, 10);
        if (currentValue > 1) {
            this.value = currentValue - 1;
        }
        e.preventDefault();
    }
});

document.getElementById('allergy').addEventListener('keydown', function(e) {
    const invalidKeys = [
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
        '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', 
        ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', 
        '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'
    ];

    if (invalidKeys.includes(e.key)) {
        e.preventDefault();
    }
});

// отзывы

let offset = 3;
const loadMoreButton = document.getElementById('loadMore');
const reviewList = document.getElementById('reviewList');
let allReviewsLoaded = false;

function fadeIn(element) {
    element.style.opacity = 0;
    element.style.display = 'block';

    let last = +new Date();
    const tick = function() {
        element.style.opacity = +element.style.opacity + (new Date() - last) / 400;
        last = +new Date();

        if (+element.style.opacity < 1) {
            (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
        }
    };

    tick();
}

function collapseReviews() {
    const reviews = reviewList.querySelectorAll('.reviewFormDb');
    reviews.forEach((review, index) => {
        if (index >= 3) {
            review.style.transition = 'opacity 0.5s ease';
            review.style.opacity = 0;
            setTimeout(() => {
                review.style.display = 'none';
            }, 500);
        }
    });
    offset = 3;
    allReviewsLoaded = false;
    loadMoreButton.textContent = 'Показать ещё';
}

loadMoreButton.addEventListener('click', function() {
    if (allReviewsLoaded) {
        // скрыть отзывы после первых 3
        collapseReviews();
    } else {
        fetch(`/load-more-reviews/?offset=${offset}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                if (data.length > 0) {
                    data.forEach(review => {
                        const reviewDiv = document.createElement('div');
                        reviewDiv.className = 'reviewFormDb';
                        reviewDiv.style.opacity = 0;
                        reviewDiv.innerHTML = `
                            <div class="user-info">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                                </svg>
                                <h3>Пользователь ${review.name}</h3>
                            </div>
                            <p style="font-weight: bold;">Оценка: ${review.rate}</p>
                            <p>${review.review}</p>
                            <p class="dateReview">${review.date}</p>
                        `;
                        reviewList.appendChild(reviewDiv);
                        fadeIn(reviewDiv);
                    });
                    offset += 3;
                } else {
                    allReviewsLoaded = true;
                    loadMoreButton.textContent = 'Скрыть отзывы';
                }
            })
            .catch(error => console.error('Ошибка:', error));
    }
});
