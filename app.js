const aboutBtn = document.querySelector(".about");
const contactBtn = document.querySelector(".contact");

const prevBtn = document.querySelector(".prev-meme-btn");
const shareBtn = document.querySelector(".share-meme-btn");
const nextBtn = document.querySelector(".next-meme-btn");

const memeContainer = document.querySelector(".hero-container");

/////////////////////////////////////////////
/////////////////////////////////////////////
let img = document.createElement("img");
const allMemes = [];
let memePointer = 0;
let res;
const fetchMeme = async function () {
  try {
    res = await fetch("https://meme-api.herokuapp.com/gimme")
      .then((res) => res.json())
      .then((data) => data.url);
    displayMeme(res);
    allMemes.push(res);
    memePointer = allMemes.length - 1;
  } catch (err) {
    console.log(err.message);
  }
};

fetchMeme();

function displayMeme(res) {
  img.src = res;
  // console.log(res);
  img.classList.add("meme-image");
  img.height = memeContainer.clientHeight;
  img.width = memeContainer.clientWidth;
  memeContainer.appendChild(img);
}
// AddEventListlers
window.addEventListener("resize", myFunction);
function myFunction() {
  img.height = memeContainer.clientHeight;
  img.width = memeContainer.clientWidth;
}
nextBtn.addEventListener("click", fetchMeme);
prevBtn.addEventListener("click", function () {
  memePointer = memePointer - 1;
  displayMeme(allMemes[memePointer]);
});
shareBtn.addEventListener("click", function () {
  window.open(`whatsapp://send?text=${window.location.href}`);
});

aboutBtn.addEventListener("click", function () {
  window.open("about.html");
});

contactBtn.addEventListener("click", function () {
  window.open("contact.html");
});
