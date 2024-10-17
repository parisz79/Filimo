const filmApi = "https://parisz79.github.io/filimoApis/film.json";
let cardsFilm = document.getElementById("cards-film");

const fetchFilms = async () => {
  try {
    const response = await fetch(filmApi);
    const data = await response.json();
    generateTags(data);
  } catch (error) {
    console.log(error);
  }
};
const generateTags = (data) => {
  const films = data.film.map((item) => {
    return `
    <div class="swiper-slide !w-[165px] text-white flex flex-col">
    <div  class="rounded-lg w-[165px] h-[220px] mb-4">
                  <img class="rounded-lg w-full h-full" src=${item.image} alt=${item.name}>
                </div>
                  <h3 id="card-film-text " class="font-normal text-xl pr-1">
                  ${item.name}
                  </h3>
                  </div>`;
  });
  cardsFilm.innerHTML = films.join("");
};

fetchFilms();
