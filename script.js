document.getElementById('animateBtn').addEventListener('click', function() {
    const box = document.getElementById('boxToAnimate');
    box.classList.add('animated');

    box.addEventListener('animationend', function handler() {
        box.classList.remove('animated');
        box.removeEventListener('animationend', handler);
    });
});



document.getElementById('showModalBtn').addEventListener('click', function() {
    document.getElementById('myModal').classList.add('show');
});
document.getElementById('closeModalBtn').addEventListener('click', function() {
    const modal = document.getElementById('myModal');
    modal.classList.remove('show');
});
document.getElementById('myModal').addEventListener('click', function(e) {
    if (e.target === this) {
        this.classList.remove('show');
    }
});

