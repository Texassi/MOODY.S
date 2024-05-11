const ratings = document.querySelectorAll('.rating2');
ratings.forEach(rating => {
    const stars = rating.querySelectorAll('.star');
    stars.forEach(star => {
        star.addEventListener('click', function() {
            const ratingValue = this.getAttribute('data-value');
            this.classList.add('filled');

            for (let i = 0; i < ratingValue; i++) {
                stars[i].classList.add('filled');
            }

            for (let i = ratingValue; i < stars.length; i++) {
                stars[i].classList.remove('filled');
            }
        });
    });
});