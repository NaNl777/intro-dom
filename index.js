// const body = document.body;

// const mainDiv = document.createElement("div");
// const divOne = document.createElement("div");
// const divTwo = document.createElement("div");
// // const divOne = document.createElement("div");
// // const divTwo = documnet.createElement("div");
// // const div = document.createElement("div");

// mainDiv.classList.add("section_container", "sections");
// divOne.classList.add("section_item", "sections-block");
// divTwo.classList.add("section_footer", "footer");

// divOne.textContent(
//   "There are many variants of Lorem Ipsum, but most of them have not always acceptable modifications, such as humorous inserts or words that do not even remotely resemble Latin."
// );

// const intocode = document.createElement("a");
// const google = document.createElement("a");
// const instagram = document.createElement("a");

// intocode.setAttribute("href", "#");
// google.setAttribute("href", "#");
// instagram.setAttribute("href", "#");

// intocode.textContent = "intocode";
// google.textContent = "google";
// instagram.textContent = "instagram";

// divTwo.append(intocode, google, instagram);

// mainDiv.append(divOne, divTwo);

// body.append(mainDiv);

const body = document.body;
const mainDiv = document.createElement("div");
const div = document.createElement("div");
const div2 = document.createElement("div");

mainDiv.style.width = "380px";
mainDiv.style.margin = "auto";

div.textContent =
  "Lorem ipsum dolor sit amet, consectetrur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
div.style.border = "1px solid red";
div.style.padding = "10px";
div.style.borderRadius = "15px";

div2.style.display = "flex";
div2.style.justifyContent = "space-between";
div2.style.marginTop = "7px";

const intocode = document.createElement("a");
const google = document.createElement("a");
const instagram = document.createElement("a");


intocode.setAttribute("href", "#");
google.setAttribute("href", "#");
instagram.setAttribute("href", "#");

intocode.style.textDecoration = "none";
google.style.textDecoration = "none";
instagram.style.textDecoration = "none";

intocode.textContent = "intocode";
google.textContent = "google";
instagram.textContent = "instagram";

div2.append(intocode, google, instagram);

mainDiv.append(div, div2);
body.append(mainDiv);