const shows = [
  {
    rank: 5,
    title: "Silo",
    category: "Sci-fi / Drama",
    year: 2023,
    type: "Series",
    image: "assets/silo.jpg",
    reason:
      "Silo is a gripping sci-fi drama that explores the lives of people living in a dystopian underground silo. I absolutely love the show's unique premise, complex characters, and the way it keeps you on the edge of your seat with its suspenseful plot twists.",
  },
  {
    rank: 4,
    title: "Ozark",
    category: "Crime / Drama",
    year: 2017,
    type: "Series",
    image: "assets/ozark.jpg",
    reason:
      "Ozark is a dark and intense crime drama that i like alot because of the way it delves into the world of money laundering and organized crime. The show has been praised for its strong performances with all right, particularly by Jason Bateman and Laura Linney, as well as its suspenseful storytelling.",
  },
  {
    rank: 3,
    title: "Chernobyl",
    category: "Drama / History",
    year: 2019,
    type: "Miniseries",
    image: "assets/chernobyl.jpg",
    reason:
      "Chernobyl is a historical drama that depicts the events surrounding the Chernobyl nuclear disaster in 1986. This is without a doubt the best miniseries i have ever seen in my life",
  },
  {
    rank: 2,
    title: "Severance",
    category: "Sci-fi / Thriller",
    year: 2022,
    type: "Series",
    image: "assets/severance.jpg",
    reason:
      "Severance is a sci-fi thriller that explores the concept of work-life balance in a dystopian corporate setting, i absolutely love this show and without a doubt best sci-fi series ever made ",
  },
  {
    rank: 1,
    title: "Avatar: The Last Airbender",
    category: "Animation / Fantasy",
    year: 2005,
    type: "Animated Series",
    image: "assets/avatar.jpg",
    reason:
      "Avatar: The Last Airbender is an absolut gem of ananimated series that follows the journey of Aang, the last surviving Airbender, as he seeks to bring balance to a world divided by war. This is nr 1, partly because of childhood nostalgia, but also because of the shows incredible storytelling, and memorable characters.",
  },
];

const container = document.querySelector(".container");
let selectedGenre = "all";
function renderShows() {
  container.innerHTML = "";

  for (let i = 0; i < shows.length; i++) {
    if (
      selectedGenre !== "all" &&
      !shows[i].category.toLowerCase().includes(selectedGenre.toLowerCase())
    ) {
      continue;
    }

    const newDiv = document.createElement("div");
    newDiv.classList.add("card");

    if (shows[i].rank === 1) {
      newDiv.classList.add("top-card");
    }

    if (shows[i].rank) {
      newDiv.textContent = "#" + shows[i].rank + " " + shows[i].title;
      const showImage = document.createElement("img");
      showImage.src = shows[i].image;
      showImage.alt = "Image of " + shows[i].title;
      newDiv.prepend(showImage);
    } else {
      newDiv.textContent = "Your Pick: " + shows[i].title;
    }

    const button = document.createElement("button");
    button.textContent = "Show Details";
    button.addEventListener("click", function () {
      openModal(shows[i]);
    });

    newDiv.appendChild(button);

    if (shows[i].rank === null) {
      const removeButton = document.createElement("button");
      removeButton.textContent = "Remove Show";

      removeButton.addEventListener("click", function () {
        shows.splice(i, 1);
        renderShows();
      });
      newDiv.appendChild(removeButton);
    }
    container.appendChild(newDiv);
  }
}
renderShows();

const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(function (filterButton) {
  filterButton.addEventListener("click", function () {
    selectedGenre = filterButton.dataset.genre;
    filterButtons.forEach(function (button) {
      button.classList.remove("active");
    });
    filterButton.classList.add("active");
    renderShows();
  });
});
const form = document.querySelector("#show-form");
const titleInput = document.getElementById("title");
const categoryInput = document.getElementById("category");
const yearInput = document.getElementById("year");
const typeInput = document.getElementById("type");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const newShow = {
    rank: null,
    title: titleInput.value,
    category: categoryInput.value,
    year: Number(yearInput.value),
    type: typeInput.value,
    image: "assets/tv-shows.webp",
    reason: "This is a usersubmitted show. No reason provided.",
  };
  shows.push(newShow);
  renderShows();
  form.reset();
});

const modal = document.querySelector("#details-modal");
const modalClose = document.querySelector("#modal-close");
const modalImage = document.querySelector("#modal-image");
const modalTitle = document.querySelector("#modal-title");
const modalCategory = document.querySelector("#modal-category");
const modalYear = document.querySelector("#modal-year");
const modalType = document.querySelector("#modal-type");
const modalReason = document.querySelector("#modal-reason");

function openModal(show) {
  modalImage.src = show.image;
  modalImage.alt = "Image of " + show.title;
  if (show.rank) {
    modalTitle.textContent = "#" + show.rank + " " + show.title;
  } else {
    modalTitle.textContent = "your pick:" + show.title;
  }
  modalCategory.textContent = "Genre: " + show.category;
  modalYear.textContent = "Year: " + show.year;
  modalType.textContent = "Type: " + show.type;
  modalReason.textContent = show.reason;

  modal.hidden = false;
}

function closeModal() {
  modal.hidden = true;
}

modalClose.addEventListener("click", closeModal);

modal.addEventListener("click", function (event) {
  if (event.target === modal) {
    closeModal();
  }
});
