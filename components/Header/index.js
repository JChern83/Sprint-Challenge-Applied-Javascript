// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {}
const tops = document.querySelector(".header-container");

function Header() {
  // element creation
  let header = document.createElement("div");
  let date = document.createElement("span");
  let title = document.createElement("h1");
  let temp = document.createElement("span");

  // class additions

  header.classList.add("header");
  date.classList.add("date");
  temp.classList.add("temp");
  // text
  date.textContent = "March 13, 2020";
  title.textContent = "Lambda Times";
  temp.textContent = "65°";

  header.appendChild(date);
  header.appendChild(title);
  header.appendChild(temp);

  return tops.appendChild(header);
}

Header();