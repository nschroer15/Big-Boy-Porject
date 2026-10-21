levels = [
  {
    name: "Stereo Madness",
    price: 0.99,
    Difficulty: "Easy",
    Stars: "1",
  },
  {
    name: "Back On track",
    price: 1.99,
    Difficulty: "Easy",
    Stars: "2",
  },
  {
    name: "Polargeist",
    price: 2.99,
    Difficulty: "Normal",
    Stars: "3",
  },
  {
    name: "Dry Out",
    price: 4.99,
    Difficulty: "Normal",
    Stars: "4",
  },
  {
    name: "Base After Base",
    price: 5.99,
    Difficulty: "Hard",
    Stars: "5",
  },
  {
    name: "Can't Let Go",
    price: 7.99,
    Difficulty: "Hard",
    Stars: "6",
  },
  {
    name: "Jumper",
    price: 9.99,
    Difficulty: "Harder",
    Stars: "7",
  },
  {
    name: "Time Machine",
    price: 10.99,
    Difficulty: "Harder",
    Stars: "8",
  },
  {
    name: "Cycles",
    price: 13.99,
    Difficulty: "Harder",
    Stars: "9",
  },
  {
    name: "X-Step",
    price: 14.99,
    Difficulty: "Insane",
    Stars: "10",
  },
  {
    name: "Clutterfunk",
    price: 17.99,
    Difficulty: "Insane",
    Stars: "11",
  },
  {
    name: "Theory Of Everything",
    price: 18.99,
    Difficulty: "Insane",
    Stars: "12",
  },
  {
    name: "Electroman Adventures",
    price: 20.99,
    Difficulty: "Insane",
    Stars: "10",
  },
  {
    name: "Clubstep",
    price: 30.99,
    Difficulty: "Demon",
    Stars: "14",
  },
  {
    name: "Electrodynamix",
    price: 22.99,
    Difficulty: "Insane",
    Stars: "12",
  },
  {
    name: "Hexagon Force",
    price: 24.99,
    Difficulty: "Insane",
    Stars: "12",
  },
  {
    name: "Blast Processing",
    price: 20.99,
    Difficulty: "Harder",
    Stars: "10",
  },
  {
    name: "Theory Of Eveyrthing 2",
    price: 33.99,
    Difficulty: "Demon",
    Stars: "14",
  },
  {
    name: "Geometrical Dominator",
    price: 23.99,
    Difficulty: "Harder",
    Stars: "10",
  },
  {
    name: "Deadlocked",
    price: 40.99,
    Difficulty: "Demon",
    Stars: "15",
  },
  {
    name: "Fingerdash",
    price: 28.99,
    Difficulty: "Insane",
    Stars: "12",
  },
  {
    name: "Dash",
    price: 30.99,
    Difficulty: "Insane",
    Stars: "12",
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
