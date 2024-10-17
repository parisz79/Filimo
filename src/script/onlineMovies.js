let onlineMovieApi = "https://parisz79.github.io/filimoApis/onlineMovie.json";
let onlineMovieContainer = document.getElementById("online-movies-container");

let fetchOnlineMovies = async () => {
  let onlineMovies = "";
  try {
    let response = await fetch(onlineMovieApi);
    let data = await response.json();
    console.log(data);
    onlineMovies = data.onlineMovie.map((item) => {
      let onlineMovieCard = document.createElement("div");
      onlineMovieCard.classList =
        " md:w-[530px] w-full mx-auto h-[48%] flex items-start justify-stretch gap-3 p-3 bg-zinc-700 border-zinc-200 border-2 rounded-lg";
      onlineMovieCard.innerHTML = ` <div class="h-full sm:w-[160px] w-[100px] rounded-lg">
                  <img class="block align-middle h-full rounded-lg w-full box-border" src=${item.image} alt=${item.name}>
                </div>
                 <article class="flex flex-col justify-between items-start w-[68%] h-full text-sm font-semibold ">
                  <div class="flex justify-between pb-3 w-full">
                   <h6 class="text-lg font-semibold ">${item.name}</h6>
                   <p class=" flex text-xs font-semibold justify-center items-center gap-2">
                     <img class="w-4 h-4 rounded-full" src="src/image/ideaPic.webp" alt="">
                     <span>اکران آنلاین</span>
                   </p>
                  </div>
                  <p class="pb-2 ">کارگردان: <span>${item.director} </span></p> 
                  <p class="pb-2">${item.ganer}</p>
                  <button class="bg-emerald-600 p-1 rounded-lg text-xl font-bold w-[120px]">خرید بلیط</button>
                 </article>
               `;
      onlineMovieContainer.appendChild(onlineMovieCard);
    });
  } catch (error) {
    console.log(error);
  }
};
fetchOnlineMovies();
