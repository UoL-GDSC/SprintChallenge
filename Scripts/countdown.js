// https://www.educative.io/edpresso/how-to-create-a-countdown-timer-using-javascript
function setup() {
    noCanvas();
//   const zero = new sevenSegment(0, 0);
  const countdownDate = new Date("2022/11/07 08:00:00");

  const timeIt = setInterval((_) => {
    // Run timeIt every second
    const now = new Date().getTime();
    const timeleft = countdownDate - now;

    // Calculating the days, hours, minutes and seconds left
    const days = floor(timeleft / (1000 * 60 * 60 * 24));
    const hours = floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = floor((timeleft % (1000 * 60)) / 1000);

    // Result is output to the specific element
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("mins").innerHTML = minutes;
    document.getElementById("secs").innerHTML = seconds;

    // Display the message when countdown is over
    if (timeleft < 0) {
      clearInterval(timeIt);
      document.getElementById("days").innerHTML = "0";
      document.getElementById("hours").innerHTML = "0";
      document.getElementById("mins").innerHTML = "0";
      document.getElementById("secs").innerHTML = "0";
      document.getElementById("countdown-end").innerHTML = "TIME'S UP!!";
    }
  }, 1000);
}
