// Create function displayDate()
function displayDate() {
  // create a date object
  const now = new Date()

  // get the weekday
  const weekday = now.toLocaleDateString('en-US', { weekday: 'long' })

  // get the day of the month
  const day = now.getDate()

  // get the month
  const month = now.toLocaleDateString('en-US', { month: 'long' })

  // find the element with id 'date'
  // set the date inner text to a concatenated string  with weekday, day, and month
  document.getElementById('date').innerText = weekday + ', ' + month + ' ' + day
}

// Call displayDate()
displayDate()
// use setInterval to call displayGreeting() every second
setInterval(displayDate, 1000)
