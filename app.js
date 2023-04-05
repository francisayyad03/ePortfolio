document.addEventListener('DOMContentLoaded', function () {
    const typingText = document.querySelector('.typing-text');
    const welcomeMessage = "Hi I am Francis, and welcome to my ePortfolio";
    let messageIndex = 0;

    function typeMessage() {
        if (messageIndex < welcomeMessage.length) {
            typingText.textContent += welcomeMessage.charAt(messageIndex);
            messageIndex++;
            setTimeout(typeMessage, 100);
        } else {
            setTimeout(() => {
                window.location.href = 'projects.html';
            }, 1000); // Wait 2 seconds before navigating
        }
    }

    typeMessage();
});
