const movies = [
  {
    title: "Spider-Man: Into the Spider-Verse",
    date: "Dec 14, 2018",
    description: "Miles Morales becomes the Spider-Man of his reality and crosses paths with others from the multiverse.",
    imgSrc: "https://wddbyui.github.io/wdd131/images/spiderman.png",
    imgAlt: "Miles Morales swinging through the city",
    ages: "10+",
    genre: "Action/Adventure",
    stars: "⭐⭐⭐⭐⭐"
  },
  {
    title: "The Other Side of Heaven",
    date: "December 14, 2001",
    description: "Based on the true story of Elder John H. Groberg, a missionary in Tonga in the 1950s, this film tells a powerful story of faith, hardship, and miracles.",
    imgSrc: "https://wddbyui.github.io/wdd131/images/heaven.png",
    imgAlt: "Poster for The Other Side of Heaven showing a missionary and tropical landscape",
    ages: "10+",
    genre: "Drama/Religious",
    stars: "⭐⭐⭐⭐"
  },
  {
    title: "Luca",
    date: "June 18, 2021",
    description: "Two sea monsters experience a life-changing summer on the Italian Riviera.",
    imgSrc: "https://wddbyui.github.io/wdd131/images/luca.png",
    imgAlt: "Luca and Alberto standing on the beach",
    ages: "6+",
    genre: "Family/Fantasy",
    stars: "⭐⭐⭐⭐"
  },
  {
    title: "17 Miracles",
    date: "June 3, 2011",
    description: "A moving depiction of the Willie Handcart Company's journey west in 1856, focusing on the miraculous events that helped early pioneers survive one of the harshest migrations in history.",
    imgSrc: "https://wddbyui.github.io/wdd131/images/miracles.jpg",
    imgAlt: "Movie poster for 17 Miracles showing handcart pioneers walking through snow",
    ages: "12+",
    genre: "Historical/Religious",
    stars: "⭐⭐⭐⭐"
  },
  {
    title: "The Lion King",
    date: "June 24, 1994",
    description: "A young lion prince flees his kingdom after his father's death, then must return to reclaim his place as king.",
    imgSrc: "https://placehold.co/300x450?text=The+Lion+King",
    imgAlt: "Simba standing on Pride Rock overlooking the savanna",
    ages: "6+",
    genre: "Animation/Family",
    stars: "⭐⭐⭐⭐⭐"
  },
  {
    title: "Finding Nemo",
    date: "May 30, 2003",
    description: "A timid clownfish crosses the ocean with a forgetful friend to rescue his son from a fish tank in a dentist's office.",
    imgSrc: "https://placehold.co/300x450?text=Finding+Nemo",
    imgAlt: "Marlin and Dory swimming through the ocean",
    ages: "4+",
    genre: "Animation/Adventure",
    stars: "⭐⭐⭐⭐⭐"
  },
  {
    title: "The Princess Bride",
    date: "September 25, 1987",
    description: "A farmhand-turned-pirate sets out to rescue his true love, facing giants, swordsmen, and a scheming prince along the way.",
    imgSrc: "https://placehold.co/300x450?text=The+Princess+Bride",
    imgAlt: "Westley and Buttercup in the Fire Swamp",
    ages: "8+",
    genre: "Fantasy/Comedy",
    stars: "⭐⭐⭐⭐⭐"
  },
  {
    title: "Toy Story",
    date: "November 22, 1995",
    description: "A cowboy doll feels threatened when a flashy space ranger toy becomes his owner's new favorite.",
    imgSrc: "https://placehold.co/300x450?text=Toy+Story",
    imgAlt: "Woody and Buzz Lightyear standing side by side",
    ages: "4+",
    genre: "Animation/Comedy",
    stars: "⭐⭐⭐⭐⭐"
  },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    date: "December 19, 2001",
    description: "A humble hobbit inherits a powerful ring and joins a fellowship on a perilous quest to destroy it.",
    imgSrc: "https://placehold.co/300x450?text=Fellowship+of+the+Ring",
    imgAlt: "The Fellowship gathered in the wilderness",
    ages: "12+",
    genre: "Fantasy/Adventure",
    stars: "⭐⭐⭐⭐⭐"
  },
  {
    title: "Moana",
    date: "November 23, 2016",
    description: "A spirited Polynesian teen sails across the ocean with the demigod Maui to save her island and restore the heart of Te Fiti.",
    imgSrc: "https://placehold.co/300x450?text=Moana",
    imgAlt: "Moana standing on a boat with the ocean behind her",
    ages: "6+",
    genre: "Animation/Adventure",
    stars: "⭐⭐⭐⭐⭐"
  }
];

const container = document.querySelector("#movie-list");

movies.forEach(movie => {
  container.innerHTML += `
    <article class="movie">
      <h2>${movie.title}</h2>
      <img src="${movie.imgSrc}" alt="${movie.imgAlt}">
      <p><strong>Release Date:</strong> ${movie.date}</p>
      <p><strong>Recommended Age:</strong> ${movie.ages}</p>
      <p><strong>Genre:</strong> ${movie.genre}</p>
      <p><strong>Rating:</strong> <span>${movie.stars}</span></p>
      <p class="desc">${movie.description}</p>
    </article>
  `;
});