const bannerApi = "https://parisz79.github.io/filimoApis/bannner.json";
const bannerContainer = document.getElementById("bannercontainer");
const fetchData = async () => {
  try {
    const res = await fetch(bannerApi);
    const data = await res.json();
    sliderbanner(data);
  } catch (error) {
    console.log(error.message);
  }
};

function sliderbanner(bannerImages) {
  let currentIndex = 0;
  const bannerImg = document.getElementById("banner");
  bannerImg.src = bannerImages.banner[currentIndex].url;
  setInterval(() => {
    bannerImg.classList.remove("opacity-100");
    bannerImg.classList.add("opacity-0");
    setTimeout(() => {
      currentIndex = (currentIndex + 1) % bannerImages.banner.length;
      let source = bannerImages.banner[currentIndex].url;
      bannerImg.src = source;
      bannerImg.classList.remove("opacity-0");
      bannerImg.classList.add("opacity-100");
    }, 700);
  }, 3000);
}

fetchData();
