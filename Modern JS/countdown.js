// Great job with the hard homework :clap: if you can please remove the endtime parameter as you are not using it.
const deadline = new Date("December 31, 2020");
function getRemainingTime(endtime) {
  const total = deadline - new Date();
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));

  return {
    days,
    hours,
    minutes,
    seconds,
  };
}
// "date.parse()" function converts a time string into a value in miliseconds
// "math.floor()" function returns the largest integer less than or equal to a given number.

console.log(getRemainingTime(deadline));
