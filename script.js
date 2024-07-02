// document.addEventListener('DOMContentLoaded', () => {
//     console.log('Document is ready');
// });

// function updateTime() {
//     const now = new Date();
//     const utcTime = now.toUTCString().split(' ')[4];
//     const currentDay = now.toLocaleDateString('en-US', { weekday: 'long' });

//     document.querySelector('[data-testid="currentTimeUTC"]').textContent = utcTime;
//     document.querySelector('[data-testid="currentDay"]').textContent = currentDay;
// }

// // Update time every second
// setInterval(updateTime, 1000);
// updateTime();


document.addEventListener('DOMContentLoaded', () => {
    const currentTimeUTC = document.querySelector('[data-testid="currentTimeUTC"]');
    const currentDay = document.querySelector('[data-testid="currentDay"]');
    
    const updateTime = () => {
        const now = new Date();
        currentTimeUTC.textContent = `Current Time (UTC): ${now.toUTCString()}`;
        
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        currentDay.textContent = `Current Day: ${days[now.getUTCDay()]}`;
    };

    updateTime();
    setInterval(updateTime, 1000);  // Update time every second
});
