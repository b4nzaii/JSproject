const shows = [
  {
    rank: 10,
    title: "Mindhunter",
    category: "Crime / Thriller",
    year: 2017,
    type: "Series"
  },
  {
    rank: 9,
    title: "Breaking Bad",
    category: "Crime / Drama",
    year: 2008,
    type: "Series"
  },
  {
    rank: 8,
    title: "The Queen's Gambit",
    category: "Drama",
    year: 2020,
    type: "Miniseries"
  },
  {
    rank: 7,
    title: "Bron",
    category: "Crime / Thriller",
    year: 2011,
    type: "Series"
  },
  {
    rank: 6,
    title: "The O.C.",
    category: "Drama / Romance",
    year: 2003,
    type: "Series"
  },
  {
    rank: 5,
    title: "Band of Brothers",
    category: "War / Drama",
    year: 2001,
    type: "Miniseries"
  },
  {
    rank: 4,
    title: "Ozark",
    category: "Crime / Drama",
    year: 2017,
    type: "Series"
  },
  {
    rank: 3,
    title: "Chernobyl",
    category: "Drama / History",
    year: 2019,
    type: "Miniseries"
  },
  {
    rank: 2,
    title: "Severance",
    category: "Sci-fi / Thriller",
    year: 2022,
    type: "Series"
  },
  {
    rank: 1,
    title: "Avatar: The Last Airbender",
    category: "Animation / Fantasy",
    year: 2005,
    type: "Animated Series"
  }
];
const container = document.querySelector('.container')
//console.log(container)
// every card should have a button that when clicked will display the category and year of the show in an alert box.

for (let i = 0; i < shows.length; i++){
  //console.log(shows[i].title)
  const newDiv = document.createElement('div')
  newDiv.classList.add("card")
  container.appendChild(newDiv)
  newDiv.textContent = shows[i].title
  const button = document.createElement('button')
  newDiv.appendChild(button)
  button.textContent = "Show more details"
  button.addEventListener('click', function(){
    newDiv.textContent = shows[i].title + '\nCategory: ' + shows[i].category + '\nYear: ' + shows[i].year
  })
}
