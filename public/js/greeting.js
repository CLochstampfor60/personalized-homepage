// Create function displayGreeting()
function displayGreeting() {
  // get the hours
  const hours = new Date().getHours()

  // initialize a variable caleld 'greeting'
  let greeting

  // if hours is greater than or equal to 5, and less than 12 ....assign greeting to 'Good Morning'
  // if hours is greater than or equal to 12, and less than 18 ....assign greeting to 'Good Afternoon'
  // if hours is greater than or equal to 18, and less than 22 ....assign greeting to 'Good Evening'
  // otherwise assign greeting to 'Good Night'
  if (hours >= 5 && hours < 12) {
    greeting = 'Good Morning'
  } else if (hours >= 12 && hours < 18) {
    greeting = 'Good Afternoon'
  } else if (hours >= 18 && hours < 22) {
    greeting = 'Good Evening'
  } else {
    greeting = 'Good Night'
  }

  // find the element with id 'greeting', set the inner text to the greeting variable
  document.getElementById('greeting').innerText = greeting
}

// Call displayGreeting()
displayGreeting()
// use setInterval to call displayGreeting() every second
setInterval(displayGreeting, 1000)
