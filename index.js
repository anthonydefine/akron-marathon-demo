var countDownDate = new Date("Jun 23, 2023 07:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.querySelector("#countdowntimer").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

}, 1000);

function mobileNav() {
  const mobilenavcontrol = document.getElementById("mobilenavexpand");

  if (mobilenavcontrol.classList.contains("hiddennav"))
    mobilenavcontrol.classList.replace("hiddennav", "exposednav");
  else if (mobilenavcontrol.classList.contains("exposednav"))
  mobilenavcontrol.classList.replace("exposednav", "hiddennav");
}

// Sponsorship Carousel
const previous = document.getElementsByClassName("prev");
const current = document.getElementsByClassName("current");
const next = document.getElementsByClassName("next");
const hidden = document.getElementsByClassName("hidden");

function carouselspin() {
  previous.classList.replace("prev", "hidden");
  current.classList.replace("current", "prev");
  next.classList.replace("next", "current");
  hidden.classList.replace("hidden", "next");
}