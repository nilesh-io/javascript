const reverseString = (str) => {
  return str.split("").reverse().join("");
};
console.log(reverseString("Zangetsu"));

const palindromeCheck = (str) => {
  return str.split("").reverse().join("") === str.split("").join("");
};
console.log(palindromeCheck("pop"));

const CapfirstLetter = (str) => {
  return str
    .split(" ")
    .map((item) => item.slice(0, 1).toUpperCase() + item.slice(1))
    .join(" ");
};
console.log(CapfirstLetter("yare yare"));

const longestSentance = (str) => {
  return str.split(" ").reduce((long, currant) => {
    return currant.length > long.length ? currant : long;
  });
};
console.log(longestSentance("bankai katenkotsu karamto shinjyu"));

const wordCount = (str) => {
  return str.split(" ").reduce((acc, value) => {
    acc[value] = (acc[value] || 0) + 1;
    return acc;
  }, {});
};
console.log(wordCount("luffy don't die you will be king fo the pirate of day"));

const wordReplace = (str, target, replace) => {
  return str.replaceAll(target, replace);
};
console.log(wordReplace("oyyy zoro", "oyyy", "masshead"));

const checkAnargam = (str1, str2) => {
  return str1.split("").sort().join("") === str2.split("").sort().join("");
};
console.log(checkAnargam("listen", "silent"));

const countDuplicate = (str) => {
  return str.split("").reduce((acc, value) => {
    acc[value] = (acc[value] || 0) + 1;
    return acc;
  }, {});
};
console.log(countDuplicate("aaaacccdde"));

const removeDuplicate = (str) => {
  return str
    .split("")
    .filter((item, index) => str.indexOf(item) === index)
    .join("");
};
console.log(removeDuplicate("aaadddrrrfff"));

const swapCase = (str) => {
  return str
    .split("")
    .map((item) =>
      item === item.toUpperCase() ? item.toLowerCase() : item.toUpperCase()
    )
    .join("");
};
console.log(swapCase("Mugiwara No Luffy"));

const singleTimeUsedWord = (str) => {
  return str
    .split(" ")
    .filter((item) => str.indexOf(item) === str.lastIndexOf(item))
    .join(' ')
};
console.log(singleTimeUsedWord('luffy this luffy that'));