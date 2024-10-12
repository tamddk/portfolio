$(document).ready(function() {
    const textArray = ["حَسْبُنَا اللهُ وَنِعْمَ الْوَكِيْلُ نِعْمَ الْمَوْلَى وَنِعْمَ النَّصِيْرُ", "Hasbunallah wanikmal wakil ", "ni mal maula wani'man nasir "];
    let currentIndex = 0;
    let charIndex = 0;
    let typingSpeed = 50;
    let isDeleting = false;

    function type() {
        const currentText = textArray[currentIndex];
        const displayText = currentText.substring(0, charIndex);
        $('.tbsodik-typing-bio').text(displayText);

        if (!isDeleting) {
            charIndex++;
            if (charIndex === currentText.length) {
                isDeleting = true;
                setTimeout(type, 1000);
            } else {
                setTimeout(type, typingSpeed);
            }
        } else {
            charIndex--;
            if (charIndex === 0) {
                isDeleting = false;
                currentIndex = (currentIndex + 1) % textArray.length;
            }
            setTimeout(type, typingSpeed);
        }
    }

    type(); // Mulai efek mengetik
});