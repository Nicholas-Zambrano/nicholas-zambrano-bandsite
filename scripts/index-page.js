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
      commentsArray = response.data; // making the empty array equal to the comments in the API

      //  sorted the comments through timestap
      commentsArray.sort(function (x, y) {
        return y.timestamp - x.timestamp;
      });

      // for loop through the comments array in the API(in reverse order as iterating ++ makes the comments from the API appear in reverse)
      for (let i = commentsArray.length - 1; i >= 0; i--) {
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

//  keeps tracks of timestamps of comments that are already displayed on the webpage
let displayedTimestamps = [];

const commentContainerEl = document.querySelector(".comments__container");

const displayComment = (comment) => {
  // if that comment timestamp is not in the list tracker then create the elements to the page
  if (!displayedTimestamps.includes(comment.timestamp)) {
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
    dateEl.innerText = new Date(comment.timestamp).toLocaleDateString(); // changed the date to a time stamp nad used the 'localeDateString'
    divWrapper.appendChild(dateEl);
    mainDiv.appendChild(divWrapper); //now appending the date and name to the main div(which is before)

    const writingComments = document.createElement("p");
    writingComments.classList.add("comments__comment");
    writingComments.innerText = comment.comment;
    mainDiv.appendChild(writingComments); // appending the comment underneath the name and date

    const likediv = document.createElement("div");
    likediv.classList.add("comments__likeWrapper");

    const likeImg = document.createElement("div");
    likeImg.classList.add("comments__divImg");
    likediv.appendChild(likeImg);

    const likeNum = document.createElement("p");
    likeNum.classList.add("comments__likeNum");
    likeNum.innerText = comment.likes;
    likediv.appendChild(likeNum);

    mainDiv.appendChild(likediv);

    mainDiv.appendChild(likediv);

    articleEl.appendChild(imgwrapper);

    articleEl.appendChild(mainDiv);
    // articleEl.appendChild(writingComments);

    commentContainerEl.appendChild(articleEl);

    //  you can use inserbefore but then you need to swap the tables manually in the original array
    // making that article with new input comment be placed above the first element (i.e the first default comment)
    // making that 'articleEl' be the first child of the commentContainer
    commentContainerEl.insertBefore(articleEl, commentContainerEl.firstChild);

    //  after displaying the comment, push it to the tracking list to prevent that same comment being duplicated
    displayedTimestamps.push(comment.timestamp);
  }
};

// need to create a function that will print the comments

const handlingSubmit = (action) => {
  // when pressing the button, page shouldnt refresh
  action.preventDefault(); // we prevented the page from refreshing

  // need to target the submit event
  const formClass = action.target;

  // when submitting the button: we need to push a new array that contains the comment to the existing array

  const newComments = {
    // selecting the class'formClass' , then selecting the name 'fname' and then getting the value of the input
    name: formClass.fname.value,
    comment: formClass.fcomment.value,
  };
  //  Need to do the post comment!!!
  axios
    .post(`${API_BASE_URL}/comments?api_key=${API_KEY}`, newComments) // posting the new comment
    .then((response) => {
      // checling if the submitted comment's timestamp is not present in the traker list
      if (!displayedTimestamps.includes(response.data.timestamp)) {
        console.log(response.data);
        // getComments();
        displayComment(response.data); // displaying the comment each time i do it onto my website
        getComments();
      }
    })
    .catch((error) => {
      console.log(error);
    });

  // need to clear the input fields once submitting the button
  formClass.reset();
};

const formEl = document.querySelector(".form");
// were are adding an event listener to the selected class, and apply a function on the second argument when '.form' class is clicked
formEl.addEventListener("submit", handlingSubmit);


