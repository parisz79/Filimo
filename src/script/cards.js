// تعریف apiها
let movieApi = "https://parisz79.github.io/filimoApis/movie.json";

//
let cardContainer = document.getElementById("cardContainer");
let moviesContainer = document.getElementById("moviesContainer");
let movieType = document.querySelectorAll(".movie-type");
let previousMovieContent = null;

let userCards = document.getElementById("userCards");


// show movie cards..... قسمت فیلم و سریال و  نمایش جزییات فیلم
let cards = "";
let movies = [];
let defaultMovieType = "سریال";
console.log("movie type" + movieType);
// تغیر پس زمینه فیلتر فیلم و سریال
movieType.forEach((item) => {
  item.addEventListener("click", () => {
    let nextelement = item.nextElementSibling;
    let prevelement = item.previousElementSibling;

    item.classList.add("bg-gray-400");
    item.classList.add("rounded-full");
    if (nextelement) {
      nextelement.classList.remove("bg-gray-400");
      nextelement.classList.remove("rounded-full");
    } else {
      prevelement.classList.remove("bg-gray-400");
      prevelement.classList.remove("rounded-full");
    }
    let type = item.innerHTML;
    movieTypeSelected(type, event);
  });
});
// نمایش داده ها بر اساس فیلتر انتخابی (فیلم و سریال)
function movieTypeSelected(type, event) {
  event.preventDefault();
  console.log(type);
  defaultMovieType = type;
  console.log("clicked" + defaultMovieType);
  console.log("this is movies");
  console.log(movies);
  movies = [];
  cardContainer.innerHTML = "";
  fetchMovies();
}
// فتچ کردن اظلاعات از api
let fetchMovies = async () => {
  console.log(defaultMovieType);
  try {
    let data = await fetch(movieApi);
    console.log("this is api " + movieApi);
    let result = await data.json();
    console.log("this is all movie ");
    console.log(result);
    movies = result.movie.filter((item) => item.type === defaultMovieType);
    console.log("this is film or series ");
    console.log(movies);
    cards = movies.map((card, index) => {
      console.log(index);
      const cardElement = document.createElement("div");
      cardElement.classList =
        "cardElement rounded-lg border-2 h-[250px] min-w-[150px] max-w-[250px]";
      cardElement.innerHTML = `<img src=${card.image}  class="rounded-lg w-full h-full" alt=${card.type}> `;
      cardContainer.appendChild(cardElement);
      cardElement.addEventListener("click", () => {
        showMoviesDetail(index);
      });
    });
    showMoviesDetail(0);
    cardContainer.insertAdjacentHTML("afterbegin", cards);
  } catch (error) {
    console.log(error);
    console.log("movie card not loaded");
  }
};

fetchMovies();
// نمایش اطلاعات فیلم های انتخاب شده
function showMoviesDetail(index) {
  console.log(index);
  let movieDetail = movies[index];
  console.log(movies[index]);
  if (previousMovieContent) {
    console.log("there is movie details");
    previousMovieContent.remove();
  }
  const movieContent = document.createElement("div");
  movieContent.classList =
    "movieContent relative h-full w-full bg-cover no-repeat z-20 flex flex-col items-start justify-evenly gap-10 p-4 text-white after:absolute after:bg-gradient-to-r after:from-black after:to-black after:opacity-50 after:w-full after:top-0  after:right-0 after:h-full ";
  movieContent.style.backgroundImage = `url(${movieDetail.poster})`;
  movieContent.innerHTML = `<div class="absolute top-0 bottom-0 h-fit max-w-[700px] mx-auto z-20 flex flex-col items-start justify-evenly gap-5 p-4 text-white">
  <h3 class="pt-10 text-2xl font-bold">${movieDetail.name}</h3>
  <p class="text-zinc-300 text-base ">کارگردان: ${movieDetail.director}</p>
  <p class="text-lg font font-semibold"> ${movieDetail.describtion}</p>
  <a href="#" class="flex items-center justify-center  bg-emerald-600 py-3 px-5 gap-2 mt-2 text-white text-lg font-semibold rounded-lg">
    <svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"
     viewBox="0 0 24 24" width="24" height="24" class="text-sm font-extralight">
      <defs>
        <g id="ui-icon-subscription" viewBox="0 0 24 24">
          <path d="M19 4H5A3 3 0 0 0 2 7V17a3 3 0 0 0 3 3H19a3 3 0 0 0 3-3V7A3 3 0 0 0 19 4Zm1 13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7A1 1 0 0 1 5 6H19a1 1 0 0 1 1 1Z"></path>
          <path d="M12.4 11 9 8.74A1.25 1.25 0 0 0 7 9.79v4.42A1.26 1.26 0 0 0 9 15.27l3.44-2.21A1.26 1.26 0 0 0 12.4 11Z"></path>
          <circle cx="16" cy="9" r="1"></circle>
          <circle cx="16" cy="15" r="1"></circle>
          <circle cx="16" cy="12" r="1"></circle>
        </g>
      </defs>
      <g fill="#FFFFFF">
        <path d="M19 4H5A3 3 0 0 0 2 7V17a3 3 0 0 0 3 3H19a3 3 0 0 0 3-3V7A3 3 0 0 0 19 4Zm1 13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7A1 1 0 0 1 5 6H19a1 1 0 0 1 1 1Z"></path>
        <path d="M12.4 11 9 8.74A1.25 1.25 0 0 0 7 9.79v4.42A1.26 1.26 0 0 0 9 15.27l3.44-2.21A1.26 1.26 0 0 0 12.4 11Z"></path>
        <circle cx="16" cy="9" r="1"></circle>
        <circle cx="16" cy="15" r="1"></circle>
        <circle cx="16" cy="12" r="1"></circle>
      </g>
    </svg>
    <span>خرید اشتراک و تماشا</span>
  </a>
  <span class="text-sm"> ${movieDetail.runtime} - محصول ${movieDetail.country} - ${movieDetail.year} - کیفیت ${movieDetail.quality} - بالای${movieDetail.age} </span>
</div>`;
  moviesContainer.appendChild(movieContent);
  previousMovieContent = movieContent;
}

// online movie....... نمایش اسلایدر عمودی فیلم ها و نمایش کارتها
