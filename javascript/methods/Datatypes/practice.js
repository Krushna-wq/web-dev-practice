let str = "  DILWALE   DULHANIA   LE   JAYENGE  ";

const smallWords = [
  "ka","ki","ke","se","aur","ya","the","of","in","a","an"
];

let result = str
  .trim()
  .split(" ")
  .filter(word => word !== "")
  .map((word, index) => {

    word = word.toLowerCase();

    if (index !== 0 && smallWords.includes(word)) {
      return word;
    }

    return word.charAt(0).toUpperCase() + word.slice(1);
  })
  .join(" ");

console.log(result);