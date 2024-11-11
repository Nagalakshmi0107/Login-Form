const snowContainer = document.querySelector('.snow-container');

function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snow');
    
    // Set random left position, size, and fall duration for each snowflake
    snowflake.style.left = Math.random() * 100 + 'vw';
    snowflake.style.width = `${Math.random() * 5 + 5}px`;  // Vary size between 5px and 10px
    snowflake.style.height = snowflake.style.width;        // Make it a circle
    snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`; // Vary fall speed

    // Append to container and remove after animation ends
    snowContainer.appendChild(snowflake);
    setTimeout(() => {
        snowflake.remove();
    }, 5000);
}

// Create snowflakes continuously
setInterval(createSnowflake, 100);

