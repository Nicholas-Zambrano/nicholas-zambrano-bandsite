const API_BASE_URL = "https://project-1-api.herokuapp.com";
const API_KEY = "8141f882-7414-460c-ae38-99f5be2e81da";

// going to get the comment form API instead of hardcoding it:
// get the comments and add it to the page
let commentsArray = [];

const getComments = () => {
  axios
    .get(`${API_BASE_URL}/comments?api_key=${API_KEY}`) //getting the data from API with axios
    .then((response) => {
      console.log(response.data);
      console.log(response);
      commentsArray = response.data; // making the empty array equal to the comments in the API
    

      // for loop through the comments array in the API(in reverse order as iterating ++ makes the comments from the API appear in reverse)
      for (let i = 2; i < commentsArray.length; i--) {
        comment = commentsArray[i];

        // call the function within the loop, to print ach key value pair:
        displayComment(comment);
      }

      console.log(commentsArray);
    })
    .catch((error) => {
      console.log(error);
    });
};
getComments();


const commentContainerEl = document.querySelector(".comments__container");

const displayComment = (comment) => {
  const articleEl = document.createElement("article");
  articleEl.classList.add("comments__article");

  // then create a section wrapper which will have the content

  const imgwrapper = document.createElement("div");
  imgwrapper.classList.add("comments__image-wrapper");

  const mainDiv = document.createElement("div");
  mainDiv.classList.add("comments__main-wrapper");

  // then create a div for the h3 and p tag
  const divWrapper = document.createElement("div");
  divWrapper.classList.add("comments__nameDate");

  // then create h3 element
  const nameHeader = document.createElement("h3");
  nameHeader.classList.add("comments__name");
  nameHeader.innerText = comment.name;
  divWrapper.appendChild(nameHeader);

  // then create a p element
  const dateEl = document.createElement("p");
  dateEl.classList.add("comments__date");
  // dateEl.innerText = comment.date;
  dateEl.innerText = comment.timestamp // changed the date to a time stamp
  divWrapper.appendChild(dateEl);
  mainDiv.appendChild(divWrapper); //now appending the date and name to the main div(which is before)

  const writingComments = document.createElement("p");
  writingComments.classList.add("comments__comment");
  writingComments.innerText = comment.comment;
  mainDiv.appendChild(writingComments); // appending the comment underneath the name and date

  articleEl.appendChild(imgwrapper);

  articleEl.appendChild(mainDiv);
  // articleEl.appendChild(writingComments);

  commentContainerEl.appendChild(articleEl);

  //  you can use inserbefore but then you need to swap the tables manually in the original array
  // making that article with new input comment be placed above the first element (i.e the first defaul comment)
  // making that 'articleEl' be the first child of the commentContainer
  commentContainerEl.insertBefore(articleEl, commentContainerEl.firstChild);
};

// need to for loop through the array

// for (let i = 0; i < commentsArray.length; i++) {
//   comment = commentsArray[i];

//   // call the function within the loop, to print ach key value pair:
//   displayComment(comment);
// }

// need to create a new list and push it to the original list

// need to create a function that will print the comments

const handlingSubmit = (action) => {
  // when pressing the button, page shouldnt refresh
  action.preventDefault(); // we prevented the page from refreshing
  console.log("hello");

  // need to target the submit event
  const formClass = action.target;
  console.log(formClass); // this prints the form class 'form'

  // when submitting the button: we need to push a new array that contains the comment to the existing array

  const newComments = [
    {
      // selecting the class'formClass' , then selecting the name 'fname' and then getting the value of the input
      name: formClass.fname.value,
      timestamp: new Date().toLocaleDateString(), // this gives the updated time date
      comment: formClass.fcomment.value,
    },
  ];

  // console.log(newComments); // this print the array , with the comments e.g {name:"nico", comment:"hello"}

  // we want to push this into the original array:

  for (i = 0; i < newComments.length; i++) {
    const eachValue = newComments[i];
    commentsArray.unshift(eachValue); // i have pushed it to the original array
    console.log(commentsArray); // this prints the updated array:
    displayComment(eachValue); // each time it runs it calls the function
  }

  // need to clear the input fields once submitting the button
  formClass.reset();
};

const formEl = document.querySelector(".form");
// were are adding an event listener to the selected class, and apply a function on the second argument when '.form' class is clicked
formEl.addEventListener("submit", handlingSubmit);
