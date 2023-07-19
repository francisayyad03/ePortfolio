document.addEventListener('DOMContentLoaded', function () {
    const pageContent = document.querySelector('#page-content');

    if (pageContent.classList.contains('blurry')) {
        setTimeout(() => {
            pageContent.classList.remove('blurry');
        }, 100);
    }
});

