// create an array called shortcuts, each object should have a url and an icon property
// ....the icon property value should be the font awesome class
// User has the option to change these manually to their desired websites and specific locations.
let shortcuts = [
  {
    url: 'https://www.google.com/',
    icon: 'fa-brands fa-google',
  },
  {
    url: 'https://www.youtube.com/',
    icon: 'fa-brands fa-youtube',
  },
  {
    url: 'https://mail.google.com/',
    icon: 'fa-solid fa-envelope',
  },
  {
    url: 'https://nypost.com/',
    icon: 'fa-solid fa-newspaper',
  },
  {
    //Manually adjust this to the desired location. Visit the webpage itself and pullup the location instead of replacing the below url city and zipcode below.
    url: 'ACCUWEATHER_EXACT_URL_GEOGRAPHICAL_LOCATION_KEY_MAY_NOT_BE_NEEDED',
    icon: 'fa-solid fa-cloud',
  },
]

// create a variable which references the shortcut list
const shortcutList = document.getElementById('shortcutList')

// Create function createListItem()
function createListItem(shortcut) {
  const li = document.createElement('li')
  li.innerHTML = `<a href="${shortcut.url}" target="_blank"><i class="${shortcut.icon}"></i></a>`
  shortcutList.appendChild(li)
}

// Create function createShortcuts() which loops over each shortcuts and calls createListItem()
function createShortcuts() {
  shortcuts.forEach((shortcut) => createListItem(shortcut))
}

// Call createShortcuts()
createShortcuts()
