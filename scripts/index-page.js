const commentsArray = [
  {
    name: "Connor Walton",
    date: "02/17/2021",
    comment:
      "This is art. This is inexplicable magic expressed in the purest way, verything that makes up this majestic work deserves reveerence. Let us appreciate this for what it is and what it contains.",
  },
  {
    name: "Emilie Beach",
    date: "02/17/2021",
    comment:
      "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
  },
  {
    name: "Miles Acosta",
    date: "12/20/2020",
    comment:
      "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
  },
];

// select the comments container

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
  dateEl.innerText = comment.date;
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
};

// need to for loop through the array

for (let i = 0; i < commentsArray.length; i++) {
  comment = commentsArray[i];

  // call the function within the loop, to print ach key value pair:
  displayComment(comment);
}

// const handlingSubmit = (event) => {
//   event.preventDefault();
//   const formEl = event.target;

//   // now push the comment to the new comment arrray:
//   const addedComment = {
//     name: formEl.fname.value,
//     comment: formEl.fcomment.value,
//   };

//   commentsArray.push(addedComment);
// };
// console.log(commentsArray);

// // initialise and selct the form from index html
// const formEl = document.querySelector(".form");
// formEl.addEventListener("submit",handlingSubmit);

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
      date: new Date().toLocaleDateString(), // this gives teh updated time date
      comment: formClass.fcomment.value,
    },
  ];

  // console.log(newComments); // this print the array , with the comments e.g {name:"nico", comment:"hello"}

  // we want to push this into the original array:

  for (i = 0; i < newComments.length; i++) {
    const eachValue = newComments[i];
    commentsArray.unshift(eachValue); // i have pushed it to the original array
    console.log(commentsArray); // this prints the update array:
    displayComment(eachValue); // each time it runs it calls the function
  }
};

const formEl = document.querySelector(".form");
// were are adding an event listener to the selected class, and apply a function on the second argument when '.form' class is clicked
formEl.addEventListener("submit", handlingSubmit);
// console.log("hello");
