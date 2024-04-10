// script.js
window.onload = function() {
    const loveContainer = document.getElementById('love-container');
    const duration = 60 * 1000; // 60 seconds
    const colors = ["#FFC0CB", "#FF1493", "#C71585"]; // Different love colors

    function createLove() {
        const love = document.createElement('div');
        love.classList.add('love');
        love.style.left = Math.random() * window.innerWidth + 'px'; // Random horizontal position
        love.style.animationDuration = (Math.random() * 3 + 1) + 's'; // Random animation duration (1-4 seconds)
        love.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]; // Random color
        loveContainer.appendChild(love);

        setTimeout(() => {
            love.remove(); // Remove the love element after its animation duration
        }, duration);
    }

    function decreaseLove() {
        const loveCount = loveContainer.childElementCount;
        if (loveCount > 0) {
            loveContainer.removeChild(loveContainer.lastChild); // Remove the last love element
        }
    }

    function startAnimation() {
        const interval = duration / 10; // Decrease loves every 10 seconds
        let remainingTime = duration;
        
        const loveInterval = setInterval(() => {
            if (remainingTime > 0) {
                createLove(); // Create a new love element
                remainingTime -= interval;
                decreaseLove(); // Decrease loves after interval
            } else {
                clearInterval(loveInterval); // Stop creating loves when time is up
            }
        }, interval);
    }

    // Start animation when user scrolls
    window.addEventListener('scroll', startAnimation);
};