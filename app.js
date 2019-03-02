/*
  Set the position of hour, minute and seconds hands using degree of rotation from 12 position

  There are 12 hours in a clock (360 degrees around), so the hour hand rotates 30 degrees for each hour (30*12 = 360)
  There are 60 minutes in a clock, so the minute hand rotates 6 degrees for each minute (6*60 = 360)
  There are 60 seconds in a clock, so the second hand rotates 6 degrees for each minute (6*60 = 360)
*/

function moveHands(){
  let currDate = new Date();

  //get num of degrees to rotate at 30 degrees per hour
  let hourDegreePosition = 30 * (currDate.getHours() % 12 + currDate.getMinutes() / 60);
  //get num of deg to rotate at 6 deg per minute
  let minuteDegreePosition = 6 * currDate.getMinutes();
  //get num of deg to rotate at 6 deg per second
  let secondDegreePosition = 6 * currDate.getSeconds();


  // set rotate CSS attributes for each hand to correct degree val
  document.getElementById("hours").style.transform = `rotate(${hourDegreePosition}deg)`;
  document.getElementById("minutes").style.transform = `rotate(${minuteDegreePosition}deg)`;
  document.getElementById("seconds").style.transform = `rotate(${secondDegreePosition}deg)`;

  setTimeout(moveHands, 1000); // calling the function every second
}
window.onload = moveHands(); // making sure the function starts on load of webpage
