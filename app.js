// 사진은 각 spot의 image 값만 바꾸면 됩니다. 예: "assets/dongah.jpg"
const COURSES = [
  {
    city: "Seoul, Korea", title: "K-Celeb Tour\nin Hannam", titleKo: "한남동 셀럽 코스",
    guide: "Seo Woo", accent: "#742583", soft: "#e7def5",
    tags: ["BTS", "Seventeen", "Jenny", "foodie"],
    spots: [
      { name: "Dongah\nNaengmyeon", nameKo: "동아냉면", description: "A local legend for years. Visited by BTS Jin.", descriptionKo: "소문난 한남동 냉면 맛집. 방탄 진 방문.", image: "" },
      { name: "Hannam\nCoffee", nameKo: "한남 커피", description: "A quiet pause between busy streets.", descriptionKo: "분주한 골목 사이 잠깐의 여유.", image: "" },
      { name: "Sounds\nHannam", nameKo: "사운즈 한남", description: "Culture, food and design in one place.", descriptionKo: "문화와 미식, 디자인을 한곳에서.", image: "" },
      { name: "Leeum", nameKo: "리움미술관", description: "A landmark of Korean contemporary art.", descriptionKo: "한국 현대미술을 만나는 대표 공간.", image: "" }
    ]
  },
  {
    city: "Berlin, Germany", title: "A Korean Day\nin Berlin", titleKo: "베를린에서 보내는 코리안데이",
    guide: "Slow Walker", accent: "#bd1119", soft: "#f2dfe3",
    tags: ["Karaoke", "Chicken", "K-beauty", "Cafe"],
    spots: [
      { name: "Korean\nKitchen", nameKo: "코리안 키친", description: "A warm Korean table in Berlin.", descriptionKo: "베를린에서 만나는 따뜻한 한식 한 상.", image: "" },
      { name: "K-Beauty\nStore", nameKo: "케이뷰티 스토어", description: "New favorites, picked locally.", descriptionKo: "현지에서 고르는 새로운 뷰티 아이템.", image: "" },
      { name: "Karaoke\nNight", nameKo: "노래방 나이트", description: "Sing until the last train.", descriptionKo: "막차 시간까지 신나게 노래하기.", image: "" },
      { name: "Coffee\nBreak", nameKo: "커피 브레이크", description: "Finish the walk with a slow coffee.", descriptionKo: "느긋한 커피 한 잔으로 산책 마무리.", image: "" }
    ]
  },
  {
    city: "Busan, Korea", title: "Jazz & Bites\nin Gwangalli", titleKo: "광안리는 재즈도 식후경",
    guide: "Slow Walker", accent: "#235bac", soft: "#dceef8",
    tags: ["Jazz", "Vinyl", "Michelin", "Music"],
    spots: [
      { name: "Gwangalli\nBites", nameKo: "광안리 한입", description: "Start with a favorite local plate.", descriptionKo: "동네 사람들이 사랑하는 한 접시로 시작.", image: "" },
      { name: "Vinyl\nRoom", nameKo: "바이닐 룸", description: "Needle down, volume up.", descriptionKo: "바늘을 내리고 볼륨을 올리는 시간.", image: "" },
      { name: "Jazz\nBar", nameKo: "재즈 바", description: "Live sound beside the sea.", descriptionKo: "바다 곁에서 듣는 라이브 재즈.", image: "" },
      { name: "Night\nWalk", nameKo: "밤 산책", description: "End beneath the bridge lights.", descriptionKo: "대교의 불빛 아래에서 마무리.", image: "" }
    ]
  },
  {
    city: "Busan, Korea", title: "One Lap Around\nBusan Station", titleKo: "초량:부산역 한바퀴",
    guide: "Tae Sung", accent: "#235bac", soft: "#dceef8",
    tags: ["Choryang", "Local", "Market", "History"],
    spots: [
      { name: "Choryang\nMarket", nameKo: "초량시장", description: "A neighborhood market with deep roots.", descriptionKo: "오랜 시간이 쌓인 동네 시장.", image: "" },
      { name: "168\nStairs", nameKo: "168계단", description: "Climb into the old hillside town.", descriptionKo: "산복도로 마을의 풍경 속으로.", image: "" },
      { name: "Local\nTable", nameKo: "동네 식탁", description: "A generous Busan meal.", descriptionKo: "부산 인심이 담긴 든든한 한 끼.", image: "" },
      { name: "History\nWalk", nameKo: "역사 산책", description: "Read the city one alley at a time.", descriptionKo: "골목마다 새겨진 도시의 시간을 읽기.", image: "" },
      { name: "Station\nView", nameKo: "부산역 전망", description: "One final look before leaving.", descriptionKo: "떠나기 전 마지막으로 바라보는 부산.", image: "" }
    ]
  }
];

const card = document.querySelector("#guideCard");
const dots = document.querySelector("#dots");
const counter = document.querySelector("#counter");
const courseButtons = document.querySelector("#courseButtons");
let courseIndex = 0;
let slideIndex = 0;

const lines = value => value.replaceAll("\n", "<br>");

function setTheme(course) {
  document.documentElement.style.setProperty("--accent", course.accent);
  document.documentElement.style.setProperty("--accent-soft", course.soft);
}

function render() {
  const course = COURSES[courseIndex];
  const total = course.spots.length + 1;
  setTheme(course);
  counter.textContent = `${slideIndex + 1} / ${total}`;

  if (slideIndex === 0) {
    card.className = "guide-card cover";
    card.innerHTML = `
      <div class="cover__stamp" aria-hidden="true"></div>
      <div class="location">${course.city}</div>
      <h2>${lines(course.title)}</h2>
      <p class="cover__ko">${course.titleKo}</p>
      <div class="guide-strip">
        <div><small>Today's local guide</small><strong>${course.guide}</strong></div>
        <div class="guide-strip__spots">${course.spots.length} Spots&nbsp; ${"●".repeat(course.spots.length)}</div>
      </div>
      <p class="tags">${course.tags.map(tag => `#${tag}`).join(" ")}</p>`;
  } else {
    const spot = course.spots[slideIndex - 1];
    card.className = "guide-card spot";
    card.innerHTML = `
      <div class="spot__photo"><img src="${spot.image}" alt="${spot.nameKo} 장소 사진"></div>
      <h2>${lines(spot.name)}</h2>
      <p class="spot__ko">${spot.nameKo}</p>
      <div class="spot__description"><p>${spot.description}</p><p>${spot.descriptionKo}</p></div>
      <p class="tags">${course.tags.map(tag => `#${tag}`).join(" ")}</p>`;
  }

  dots.innerHTML = Array.from({ length: total }, (_, index) =>
    `<button aria-label="${index + 1}번 슬라이드" aria-current="${index === slideIndex}" data-slide="${index}"></button>`
  ).join("");
  [...courseButtons.children].forEach((button, index) => button.setAttribute("aria-pressed", index === courseIndex));
}

function move(amount) {
  const total = COURSES[courseIndex].spots.length + 1;
  slideIndex = (slideIndex + amount + total) % total;
  render();
}

COURSES.forEach((course, index) => {
  const button = document.createElement("button");
  button.textContent = `${course.city.split(",")[0]} · ${course.title.replace("\n", " ")}`;
  button.addEventListener("click", () => { courseIndex = index; slideIndex = 0; render(); });
  courseButtons.append(button);
});

document.querySelector("#prev").addEventListener("click", () => move(-1));
document.querySelector("#previousArea").addEventListener("click", () => move(-1));
document.querySelector("#nextArea").addEventListener("click", () => move(1));
dots.addEventListener("click", event => {
  const button = event.target.closest("button[data-slide]");
  if (button) { slideIndex = Number(button.dataset.slide); render(); }
});
document.addEventListener("keydown", event => {
  if (event.key === "ArrowLeft") move(-1);
  if (event.key === "ArrowRight") move(1);
});

render();
