// #ScrimbaChallengeWeek - Valentine's Challenge Week 2022 - Day 4 Challenge

// Task:
// 1. Filter out all duplicate emojis, leaving only one of each emoji.
// 2. Render the unique emojis in unique-emojis-p.

// Just for fun: Replace them with your favorite emojis! ๐

// Stretch goals:
// - Add the option to render all the emojis, sorted by emoji type

document.getElementById("f-btn").addEventListener("click", filterDuplicates);
document.getElementById("s-btn").addEventListener("click", sortEmojis);

const emojis = [
  "๐",
  "๐",
  "๐",
  "๐งก",
  "๐",
  "๐ง",
  "โก๏ธ",
  "๐",
  "๐ฑ",
  "๐",
  "๐งก",
  "๐ซ",
  "๐",
  "๐",
  "โก๏ธ",
  "โก๏ธ",
  "๐ถ",
  "๐",
  "๐",
  "๐ฑ",
  "๐",
  "๐ซ",
  "๐",
  "๐",
  "๐",
  "โก๏ธ",
  "๐",
  "๐",
  "๐ฑ",
  "๐",
  "๐ซ",
  "๐",
  "๐",
  "โก๏ธ",
  "๐งก",
  "๐",
  "๐",
  "๐",
];

const allEmojisP = document.getElementById("all-emojis-p");
const uniqueEmojisP = document.getElementById("unique-emojis-p");

for (let emoji of emojis) {
  allEmojisP.textContent += emoji;
}

function filterDuplicates(e) {
  uniqueEmojisP.textContent = "";
  const individualEmojis = new Set([...emojis]);
  for (let emoji of individualEmojis) {
    uniqueEmojisP.textContent += emoji;
  }
}

function sortEmojis(e) {
  emojis.sort();
  uniqueEmojisP.textContent = emojis;
  return;
}
