let userIdeaApi = "https://parisz79.github.io/filimoApis/userIdea.json";

let fetchUserIdea = async () => {
  let userIdeas = "";
  try {
    let response = await fetch(userIdeaApi);
    let data = await response.json();
    let result = data.userIdea;
    console.log(result);
    userIdeas = result.map((item) => {
      console.log(item);
      let userIdeaCard = document.createElement("div");
      userIdeaCard.classList =
        "usercard swiper-slide flex-col justify-start item-start flex p-4 max-w-[420px] min-w-[300px] h-[150px] rounded-lg border border-zinc-400 bg-zinc-800";
      userIdeaCard.innerHTML = `<div class="flex gap-2 justify-start items-center mb-4">
                     <img class="w-4 h-4 rounded-full" src=${item.image} alt="">
                     <span>${item.name}</span>
                    </div>
                    <p class="overflow-hidden">${item.idea} </p>
`;
      userCards.appendChild(userIdeaCard);
    });
  } catch (error) {
    console.log(error);
  }
};

fetchUserIdea();
