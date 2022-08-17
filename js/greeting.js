let greeting = document.querySelector('.header__greeting');

// Greetings
const night = 'Good night';
const morning = 'Good morning';
const afternoon = 'Good afternoon';
const evening = 'Good evening';


// Hours of the greetings
function setGreeting(greetingName) {
	let hour = new Date().getHours();

	if (hour >= 23 || hour < 6) {
		greeting.innerHTML = `${night}, ${greetingName}`;
	} else if (hour >= 6 && hour < 12) {
		greeting.innerHTML = `${morning}, ${greetingName}`;
	} else if (hour >= 12 && hour < 17) {
		greeting.innerHTML = `${afternoon}, ${greetingName}`;
	} else {
		greeting.innerHTML = `${evening}, ${greetingName}`;
	}
}
