levels = [
  {
    id: 1,
    name: "Stereo Madness",
    price: 0.99,
    Difficulty: "Easy",
    Stars: "1",
    Version: "1.0",
  },
  {
    id: 2,
    name: "Back On track",
    price: 1.99,
    Difficulty: "Easy",
    Stars: "2",
    Version: "1.0",
  },
  {
    id: 3,
    name: "Polargeist",
    price: 2.99,
    Difficulty: "Normal",
    Stars: "3",
    Version: "1.0",
  },
  {
    id: 4,
    name: "Dry Out",
    price: 4.99,
    Difficulty: "Normal",
    Stars: "4",
    Version: "1.0",
  },
  {
    id: 5,
    name: "Base After Base",
    price: 5.99,
    Difficulty: "Hard",
    Stars: "5",
    Version: "1.0",
  },
  {
    id: 6,
    name: "Can't Let Go",
    price: 7.99,
    Difficulty: "Hard",
    Stars: "6",
    Version: "1.0",
  },
  {
    id: 7,
    name: "Jumper",
    price: 9.99,
    Difficulty: "Harder",
    Stars: "7",
    Version: "1.0",
  },
  {
    id: 8,
    name: "Time Machine",
    price: 10.99,
    Difficulty: "Harder",
    Stars: "8",
    Version: "1.1",
  },
  {
    id: 9,
    name: "Cycles",
    price: 13.99,
    Difficulty: "Harder",
    Stars: "9",
    Version: "1.2",
  },
  {
    id: 10,
    name: "X-Step",
    price: 14.99,
    Difficulty: "Insane",
    Stars: "10",
    Version: "1.3",
  },
  {
    id: 11,
    name: "Clutterfunk",
    price: 17.99,
    Difficulty: "Insane",
    Stars: "11",
    Version: "1.4",
  },
  {
    id: 12,
    name: "Theory Of Everything",
    price: 18.99,
    Difficulty: "Insane",
    Stars: "12",
    Version: "1.5",
  },
  {
    id: 13,
    name: "Electroman Adventures",
    price: 20.99,
    Difficulty: "Insane",
    Stars: "10",
    Version: "1.6",
  },
  {
    id: 14,
    name: "Clubstep",
    price: 30.99,
    Difficulty: "Demon",
    Stars: "14",
    Version: "1.6",
  },
  {
    id: 15,
    name: "Electrodynamix",
    price: 22.99,
    Difficulty: "Insane",
    Stars: "12",
    Version: "1.7",
  },
  {
    id: 16,
    name: "Hexagon Force",
    price: 24.99,
    Difficulty: "Insane",
    Stars: "12",
    Version: "1.8",
  },
  {
    id: 17,
    name: "Blast Processing",
    price: 20.99,
    Difficulty: "Harder",
    Stars: "10",
    Version: "1.9",
  },
  {
    id: 18,
    name: "Theory Of Eveyrthing 2",
    price: 33.99,
    Difficulty: "Demon",
    Stars: "14",
    Version: "1.9",
  },
  {
    id: 19,
    name: "Geometrical Dominator",
    price: 23.99,
    Difficulty: "Harder",
    Stars: "10",
    Version: "2.0",
  },
  {
    id: 20,
    name: "Deadlocked",
    price: 40.99,
    Difficulty: "Demon",
    Stars: "15",
    Version: "2.0",
  },
  {
    id: 21,
    name: "Fingerdash",
    price: 28.99,
    Difficulty: "Insane",
    Stars: "12",
    Version: "2.1",
  },
  {
    id: 22,
    name: "Dash",
    price: 30.99,
    Difficulty: "Insane",
    Stars: "12",
    Version: "2.2",
  },
];

const Easy = levels.filter((dif) => dif.Difficulty === "Easy");
const Normal = levels.filter((dif) => dif.Difficulty === "Normal");
const Hard = levels.filter((dif) => dif.Difficulty === "Hard");
const Harder = levels.filter((dif) => dif.Difficulty === "Harder");
const Insane = levels.filter((dif) => dif.Difficulty === "Insane");
const Demon = levels.filter((dif) => dif.Difficulty === "Demon");

function sortByCategory(Cat) {
  if (Cat === Easy) return Easy;
  else if (Cat === Normal) return Normal;
  else if (Cat === Hard) return Hard;
  else if (Cat === Harder) return Harder;
  else if (Cat === Insane) return Insane;
  else if (Cat === Demon) return Demon;
}

cart = [];
quant = [];

function addCart(id, quantity) {
  cart.push(levels.find((levels) => levels.id === id) || null);
  quant.push(quantity);
  Title = levels[id - 1].name;
  Stars = levels[id - 1].Stars;
  Difficulty = levels[id - 1].Difficulty;
  Version = levels[id - 1].Version;
  price = levels[id - 1].price;
  return `You have added the level ${Title} with difficulty ${Difficulty} worth ${Stars} stars made in version ${Version} for ${price}$ to your cart x${quant};`;
}

function removeCart(id, quantity) {}

console.log(addCart(1, 3));

//Line 1: const index = ids.indexOf(idToRemove);

//• What it does: It searches the array from left to right to find the position (index) of the very first matching ID it sees.
//• Why it matters: Because indexOf() only ever returns the first match it finds, we have to look for it fresh on every turn of the loop.

//Line 2: if (index === -1) break;

//• What it does: If indexOf() searches the entire array and finds absolutely zero matches, it returns -1. If that happens, this line triggers a break, which immediately kills the loop.
//• Why it matters: This is a safety eject button. If you ask the loop to remove 5 copies of an ID, but the array only contains 2, this line prevents the loop from running forever and freezing your browser.

//Line 3: ids.splice(index, 1);

//• What it does: This is the line that actually alters your data. It goes to the exact position we found in Step 1 and rips out exactly 1 item.
//• Why it matters: Because it mutates the array, the array physically shrinks, and all the items to the right shift over by one spot to close the gap.

//Line 4: amountToRemove--;

//• What it does: It subtracts 1 from your target count (e.g., turning a quota of 2 into 1).
//• Why it matters: It manages the loop's boundary condition. When this number hits 0, the main while (amountToRemove > 0) condition becomes false, and the loop successfully finishes.
