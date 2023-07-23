// API variables
const API_BASE_URL = "https://project-1-api.herokuapp.com";
const API_KEY = "8141f882-7414-460c-ae38-99f5be2e81da";

// console.log(axios);

let shows = [];



// selected the 'shows__container'
const containerEl = document.querySelector(".shows__container");
// console.log(containerEl);

const fillShows = (show) => {
  // creating an article
  const article = document.createElement("article");
  // add the class for the article
  article.classList.add("shows__article");

  // now need to create a wrapper : for each show info
  const section = document.createElement("section");
  section.classList.add("shows__wrapper");

  // THIS IS FOR THE UNORDERED LIST:

  // going to create 3 small divs:
  const divDate = document.createElement("div");
  divDate.classList.add("shows__smallDiv");

  const divVenue = document.createElement("div");
  divVenue.classList.add("shows__smallDiv");

  const divLocation = document.createElement("div");
  divLocation.classList.add("shows__smallDiv");

  // now create an element for the 'date'
  const h3El = document.createElement("h3");
  h3El.classList.add("shows__h3");
  h3El.innerText = "DATE";
  // now appending the date div to that
  divDate.appendChild(h3El); // appending this h3 to the div wrapper

  // now adding the date of the show:
  const yearEl = document.createElement("p");
  // add a class:
  yearEl.classList.add("shows__year", "shows__pTag");
  // now assigning the year(modifying the text) to the value of the key 'date'
  yearEl.innerText = new Date(show.date).toLocaleDateString();
  divDate.appendChild(yearEl); // appending the label to the small div
  // unorderedListEl.append(yearEl);

  const h3VenueEl = document.createElement("h3");
  h3VenueEl.classList.add("shows__h3");
  h3VenueEl.innerText = "VENUE";
  // now append the h3 'venue' to the div
  divVenue.appendChild(h3VenueEl);
  // unorderedListEl.append(h3VenueEl);

  // now create the venue from the objects

  // create the element
  const venueTagEl = document.createElement("p");
  // add a class to the element,also added a common class 'shows__label'
  venueTagEl.classList.add("shows__venue", "shows__pTag");
  // then modify the created element
  venueTagEl.innerText = show["place"];
  // now append the venue value to the div:
  divVenue.appendChild(venueTagEl);

  // now create the h3 location
  const h3Location = document.createElement("h3");
  // add class to the element created
  h3Location.classList.add("shows__h3");
  // modify the class,
  h3Location.innerText = "LOCATION";
  // now append the h3 tag to the div
  divLocation.appendChild(h3Location);

  // now create the actual location
  const locationTagEl = document.createElement("p");
  // add a class to the created element
  locationTagEl.classList.add("shows__location", "shows__pTag");
  // now modify the element by assigning it to the value of the object
  locationTagEl.innerText = show["location"];
  // now append the class to the div
  divLocation.appendChild(locationTagEl);

  // now appending the small div to the main div wrapper:
  section.appendChild(divDate);
  section.appendChild(divVenue);
  section.appendChild(divLocation);

  const buttonWrapperEl = document.createElement("div");
  buttonWrapperEl.classList.add("shows__button-wrapper");

  // now create the button:
  const buttonEl = document.createElement("button");
  buttonEl.classList.add("shows__button");
  buttonEl.innerText = "BUY TICKETS";
  buttonWrapperEl.append(buttonEl); // appended the button to the button wrapper

  // add the wrapper div to the article
  article.appendChild(section);

  // then addin the button wrapper underneath
  article.append(buttonWrapperEl);

  // now add the article to the DOM
  containerEl.appendChild(article);
};

axios
  .get(`${API_BASE_URL}/showdates?api_key=${API_KEY}`)
  .then((response) => {
    // console.log((response.data[0]["place"])); //accesing the value of "place"
    console.log(response.data);
    showsAPI = response.data; // the data in the API

    // looping through the api data and displaying
    for (let i = 0; i < showsAPI.length; i++) {
      // console.log(i);
      console.log(showsAPI[i]);
      fillShows(showsAPI[i]); // At this point - the articles are added to the DOM
    }
    // adding the row click listnere after we fetched the API data
    rowClickListener();
  })
  .catch((error) => {
    console.log(error);
  });

// create a div , these for top 3 headers 'DATE, VENUE,LOCATION'
const topDiv = document.createElement("div");
topDiv.classList.add("shows__topWrapper");

const topHeaderDate = document.createElement("h3");
topHeaderDate.classList.add("shows__topH3");
topHeaderDate.innerText = "DATE";
topDiv.appendChild(topHeaderDate);

const topHeaderVenue = document.createElement("h3");
topHeaderVenue.classList.add("shows__topH3", "shows__topH3--venue"); // added a modifier
topHeaderVenue.innerText = "VENUE";
topDiv.appendChild(topHeaderVenue);

const topHeaderLocation = document.createElement("h3");
topHeaderLocation.classList.add("shows__topH3", "shows__topH3--location");
topHeaderLocation.innerHTML = "LOCATION";
topDiv.appendChild(topHeaderLocation);

containerEl.insertBefore(topDiv, containerEl.firstChild);

const rowClick = (event) => {
  const article = event.currentTarget; // accessing that event
  // console.log("another hello");

  // Initially the articles are not in a selected state
  const articles = document.querySelectorAll(".shows__article");
  articles.forEach((article) => {
    article.classList.remove("shows__selected");
  });

  // Add the "selected" class to the clicked article
  article.classList.add("shows__selected");
  console.log("hello"); // testing purposes
};

// created a function for the row click listener so that it can be called after the API data is fetched

function rowClickListener() {
  // Add event listener for clicking
  const articles = document.querySelectorAll(".shows__article");

  // looping through each article
  articles.forEach((article) => {
    // when that article is selected call the function
    article.addEventListener("click", rowClick);
  });
}
