(() => {
	const second = 1000;
	const minute = second * 60;
	const hour = minute * 60;
	const day = hour * 24;

	//I'm adding this section so I don't have to keep updating this pen every year :-)
	//remove this if you don't need it
	let today = new Date();
	let dd = String(today.getDate()).padStart(2, "0");
	let mm = String(today.getMonth() + 1).padStart(2, "0");
	let yyyy = today.getFullYear();
	let dayMonth = "04/13/";
	let eventTime = "April 13, 2024 11:00:00 GMT+0530";

	today = `${mm}/${dd}/${yyyy}`;
	//end

	const countDown = new Date(eventTime).getTime();
	const x = setInterval(() => {
		const now = new Date().getTime();
		const distance = countDown - now;

		const days = String(Math.floor(distance / day)).padStart(2, "0");
		const hours = String(Math.floor((distance % day) / hour)).padStart(
			2,
			"0"
		);
		const minutes = String(Math.floor((distance % hour) / minute)).padStart(
			2,
			"0"
		);
		const seconds = String(
			Math.floor((distance % minute) / second)
		).padStart(2, "0");

		document.getElementById("days").innerText = days;
		document.getElementById("hours").innerText = hours;
		document.getElementById("minutes").innerText = minutes;
		document.getElementById("seconds").innerText = seconds;

		document.getElementById("days1").innerText = days;
		document.getElementById("hours1").innerText = hours;
		document.getElementById("minutes1").innerText = minutes;
		document.getElementById("seconds1").innerText = seconds;

		if (distance < 0) {
			document.getElementById("headline").innerText = "It's my birthday!";
			document.getElementById("countdown").style.display = "none";
			document.getElementById("content").style.display = "block";
			clearInterval(x);
		}
		//seconds
	}, 0);
})();
