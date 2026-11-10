levels = [
  {
    name: "Stereo Madness",
    price: 0.99,
    Difficulty: "Easy",
    Stars: "1",
    id: 1,
    img: "Images/Stereo Madness.jpg",
  },
  {
    name: "Back On track",
    price: 1.99,
    Difficulty: "Easy",
    Stars: "2",
    id: 2,
    img: "Images/Back on track.webp",
  },
  {
    name: "Polargeist",
    price: 2.99,
    Difficulty: "Normal",
    Stars: "3",
    id: 3,
    img: "Images/polargesit.webp",
  },
  {
    name: "Dry Out",
    price: 4.99,
    Difficulty: "Normal",
    Stars: "4",
    id: 4,
    img: "Images/dry out.webp",
  },
  {
    name: "Base After Base",
    price: 5.99,
    Difficulty: "Hard",
    Stars: "5",
    id: 5,
    img: "Images/base after base.jpg",
  },
  {
    name: "Can't Let Go",
    price: 7.99,
    Difficulty: "Hard",
    Stars: "6",
    id: 6,
    img: "Images/cant let go.webp",
  },
  {
    name: "Jumper",
    price: 9.99,
    Difficulty: "Harder",
    Stars: "7",
    id: 7,
    img: "Images/jumper.jpg",
  },
  {
    name: "Time Machine",
    price: 10.99,
    Difficulty: "Harder",
    Stars: "8",
    id: 8,
    img: "Images/Time machine.webp",
  },
  {
    name: "Cycles",
    price: 13.99,
    Difficulty: "Harder",
    Stars: "9",
    id: 9,
    img: "Images/cycles.jpg",
  },
  {
    name: "X-Step",
    price: 14.99,
    Difficulty: "Insane",
    Stars: "10",
    id: 10,
    img: "Images/xstep.jpg",
  },
  {
    name: "Clutterfunk",
    price: 17.99,
    Difficulty: "Insane",
    Stars: "11",
    id: 11,
    img: "Images/clutterfunk.jpg",
  },
  {
    name: "Theory Of Everything",
    price: 18.99,
    Difficulty: "Insane",
    Stars: "12",
    id: 12,
    img: "Images/toe.jpg",
  },
  {
    name: "Electroman Adventures",
    price: 20.99,
    Difficulty: "Insane",
    Stars: "10",
    id: 13,
    img: "Images/electroman adventures.jpg",
  },
  {
    name: "Clubstep",
    price: 30.99,
    Difficulty: "Demon",
    Stars: "14",
    id: 14,
    img: "Images/clubstep.jpg",
  },
  {
    name: "Electrodynamix",
    price: 22.99,
    Difficulty: "Insane",
    Stars: "12",
    id: 15,
    img: "Images/electrodynamix.jpg",
  },
  {
    name: "Hexagon Force",
    price: 24.99,
    Difficulty: "Insane",
    Stars: "12",
    id: 16,
    img: "Images/hexagon force.jpg",
  },
  {
    name: "Blast Processing",
    price: 20.99,
    Difficulty: "Harder",
    Stars: "10",
    id: 17,
    img: "Images/blast proccesing.jpg",
  },
  {
    name: "Theory Of Eveyrthing 2",
    price: 33.99,
    Difficulty: "Demon",
    Stars: "14",
    id: 18,
    img: "Images/toe2.webp",
  },
  {
    name: "Geometrical Dominator",
    price: 23.99,
    Difficulty: "Harder",
    Stars: "10",
    id: 19,
    img: "Images/geo dom.jpg",
  },
  {
    name: "Deadlocked",
    price: 40.99,
    Difficulty: "Demon",
    Stars: "15",
    id: 20,
    img: "Images/deadlocked.webp",
  },
  {
    name: "Fingerdash",
    price: 28.99,
    Difficulty: "Insane",
    Stars: "12",
    id: 21,
    img: "Images/Fingerdash.webp",
  },
  {
    name: "Dash",
    price: 30.99,
    Difficulty: "Insane",
    Stars: "12",
    id: 22,
    img: "Images/dash.webp",
  },
];

//Sorts By Difficulty

function sortByCategory(Cat) {
  const Easy = levels.filter((dif) => dif.Difficulty === "Easy");
  const Normal = levels.filter((dif) => dif.Difficulty === "Normal");
  const Hard = levels.filter((dif) => dif.Difficulty === "Hard");
  const Harder = levels.filter((dif) => dif.Difficulty === "Harder");
  const Insane = levels.filter((dif) => dif.Difficulty === "Insane");
  const Demon = levels.filter((dif) => dif.Difficulty === "Demon");
  if (Cat === Easy) return Easy;
  else if (Cat === Normal) return Normal;
  else if (Cat === Hard) return Hard;
  else if (Cat === Harder) return Harder;
  else if (Cat === Insane) return Insane;
  else if (Cat === Demon) return Demon;
}

cart = {};

//Add to cart

function addCart(level) {
  if (cart[level.name]) {
    cart[level.name].qty++;
  } else {
    cart[level.name] = level;
  }
}
addCart({ name: "Stereo Madness", price: 0.99, qty: 1 });
addCart({ name: "Back On Track", price: 1.99, qty: 2 });
console.log(cart);

//Remove from cart

function removeCart(level) {
  if (cart[level.name]) {
    cart[level.name].qty--;
  }
  if (cart[level.name].qty === 0) {
    delete cart[level.name];
  }
}

//removeCart({ name: "Stereo Madness", price: 0.99, qty: 1 });

console.log(cart);

//Total
const Total = Object.values(cart).reduce(
  (sum, item) => sum + item.price * item.qty,
  0,
);
console.log(Total);

function inject(item) {
  const container = document.querySelector(".container");
  container.insertAdjacentHTML(
    "beforeend",
    `<div class="card">
            <h2 class="header">${item.name}</h2>
            <img src="${item.img}" alt="Stereo Madness">
            <p class="paragraph">Stars: ${item.Stars}</p>
            <p class="paragraph">Price: ${item.price}</p>
            <button class="btn" data-item="${item.id}">Add To Cart</button>
        </div>
`,
  );
}

levels.forEach((item) => {
  inject(item);
});

const buttons = document.querySelectorAll(".btn");
buttons.forEach((button) =>
  button.addEventListener("click", function (event) {
    console.log(event.target.getAttribute("data-item"));
  }),
);
