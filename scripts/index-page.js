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

const fillComments = (comment) => {
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
};

// need to for loop through the array

for (let i = 0; i < commentsArray.length; i++) {
  comment = commentsArray[i];

  // call the function within the loop:
  fillComments(comment);
}
