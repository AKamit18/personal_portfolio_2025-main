// // Set the target date for the countdown (04/2025 in your format)
// const targetDate = new Date("April 01, 2025 00:00:00").getTime(); 

// function updateCountdown() {
//     const now = new Date().getTime();
//     const distance = targetDate - now;

//     // Calculate time remaining in hours, minutes, and seconds
//     const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//     const seconds = Math.floor((distance % (1000 * 60)) / 1000);

//     // Display the countdown in the "countdown" div
//     document.getElementById("countdown").innerHTML = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

//     // If the countdown is over, display a message
//     if (distance < 0) {
//         document.getElementById("countdown").innerHTML = "Launched!";
//     }
// }

// // Update the countdown every second
// setInterval(updateCountdown, 1000);