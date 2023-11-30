// Create function diplayTime()
function displayTime() {
  // create a new date object
  const now = new Date()
  // get the hours
  var hours = now.getHours()

  // Convert to a 12 hour time block.
  const AmOrPm = hours >= 12 ? 'pm' : 'am'
  hours = hours % 12 || 12

  // get the minutes -- attach .toString().padStart(2, '0')
  const minutes = now.getMinutes().toString().padStart(2, '0')

  // Get the seconds
  const seconds = now.getSeconds().toString().padStart(2, '0')

  // find the element with the id 'time', set the inner text to hours:minutes
  document.getElementById(
    'time'
  ).innerText = `${hours}:${minutes}:${seconds} ${AmOrPm}		 `
}

// call diplayTime()
displayTime()
// use setInterval to call displayTime() every second
setInterval(displayTime, 1000)
