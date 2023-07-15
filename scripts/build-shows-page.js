const shows = [
  {
    // check the arrays again
    date: "Mon Sept 06 2021",
    venue: "Ronald Lane",
    location: "San Francisco, CA",
  },
  {
    date: "Tue Sept 21 2021",
    venue: "Pier 3 East",
    location: "San Francisco, CA",
  },
  {
    date: "Fri Oct 15 2021",
    venue: "View Lounge",
    location: "San Francisco, CA",
  },
  {
    date: "Sat Nov 06 2021",
    venue: "Hyatt Agency",
    location: "San Francisco, CA",
  },
  {
    date: "Fri Nov 26 2021",
    venue: "Moscow Center",
    location: "San Francisco, CA",
  },
  {
    date: "Wed Dec 15 2021",
    venue: "Press Club",
    location: "San Francisco, CA",
  },
];


//  i appended each tag within each article
// const containerEl = document.querySelector(".shows__container");
// // this iteratng through each 'date' value
// for(let i=0; i<shows.length;i++){
//   const articleShowEl = document.createElement("article");
//   containerEl.appendChild(articleShowEl); // appended an article, which will contain the labels
//   articleShowEl.classList.add("shows__wrapper");

//   const dateTagEl = document.createElement("label");
//   dateTagEl.classList.add("shows__date")
//   // modifying the text, so that it appears on the website
//   dateTagEl.innerText = shows[i].date ; // printing the value i.e the date

//   // creating a venue label
//   const venueTagEl = document.createElement("label");
//   venueTagEl.innerText = shows[i].venue;

//   const locationTagEl = document.createElement("label");
//   locationTagEl.innerText = shows[i].location;

//   articleShowEl.appendChild(dateTagEl);
//   articleShowEl.appendChild(venueTagEl);
//   articleShowEl.appendChild(locationTagEl);
//   // console.log(dateTagEl);
//   // console.log(venueTagEl);

// }

//  loop over the array
// create a article, which represents a show
//(need more tags: create a p tag i.e date label
//repeat for all tags( date value, venue label...)
// For each of those tags, add them to the article
// at the end, append the article , to the .show_container

// selected the 'shows__container'
const containerEl = document.querySelector(".shows__container");
// console.log(containerEl);

// this function will
// * need to add a parameter!!!
const fill_shows = (show) => {
  // creating an article
  const article = document.createElement("article");
  // add the class for the article
  article.classList.add("shows__article");

  // now need to create a wrapper : for each show info
  const section = document.createElement("section");
  section.classList.add("shows__wrapper");

  // THIS IS FOR THE UNORDERED LIST:
  
  // const unorderedListEl = document.createElement("ul");
  // create class name: 
  // unorderedListEl.classList.add("shows__items");
  // div.appendChild(unorderedListEl)

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
  // console.log(h3El);
  // now appending the date div to that
  divDate.appendChild(h3El); // appending this h3 to the div wrapper
  //APPENDING IT TO UL INSTEAD
  // unorderedListEl.append(h3El);

  // now adding the date of the show:
  const yearEl = document.createElement("p");
  // add a class:
  yearEl.classList.add("shows__year","shows__pTag");
  // now assigning the year(modifying the text) to the value of the key 'date'
  yearEl.innerText = show.date;
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
  venueTagEl.classList.add("shows__venue","shows__pTag");
  // then modify the created element
  venueTagEl.innerText = show.venue;
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
  locationTagEl.innerText = show.location;
  // now append the class to the div
  divLocation.appendChild(locationTagEl);

  // now appending the small div to the main div wrapper:
  section.appendChild(divDate);
  section.appendChild(divVenue);
  section.appendChild(divLocation)


  const buttonWrapperEl = document.createElement("div");
  buttonWrapperEl.classList.add("shows__button-wrapper")

  // now create the button:
  const buttonEl = document.createElement("button");
  buttonEl.classList.add("shows__button");
  buttonEl.innerText ="BUY TICKETS"
  buttonWrapperEl.append(buttonEl); // appended the button to the button wrapper


  // add the wrapper div to the article
  article.appendChild(section);

  // then addin the button wrapper underneath
  article.append(buttonWrapperEl)



  // now add the article to the DOM
  containerEl.appendChild(article);




};

for (let i = 0; i < shows.length; i++) {
  // iterating though each object
  const show = shows[i];
  // and call the function within the loop
  fill_shows(show);
}

// fill_shows();
