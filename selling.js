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

cart = {};

function addCart(level) {
  if (cart[level.name]) {
    cart[level.name].qty++;
  } else {
    cart[level.name] = level;
  }
}
addCart({
  name: "Stereo Madness",
  price: 0.99,
  Difficulty: "Easy",
  Stars: 1,
  Qty: 1,
});
console.log(cart);

function removeCart(level) {
  if (cart[level.name]) {
    cart[level.name].qty--;
  }
  if (cart[level.name].qty === 0) {
  }
}

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
