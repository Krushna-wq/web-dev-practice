const quotes = [
  "Small progress is still progress.",
  "Discipline beats motivation.",
  "Focus on the process, not the outcome.",
  "Consistency creates results.",
  "Do it scared, but do it anyway.",
  "Your future is built today.",
  "Hard work compounds over time.",
  "Stay patient. Stay consistent.",
  "Dreams demand discipline.",
  "Growth begins outside comfort.",
  "You become what you practice daily.",
  "Effort never betrays you.",
  "One step daily changes everything.",
  "Excuses kill potential.",
  "Action removes doubt.",
  "The grind shapes greatness.",
  "Keep showing up.",
  "Focus. Learn. Repeat.",
  "Progress over perfection.",
  "Silence the noise, do the work.",
  "Build habits, not hype.",
  "Success is scheduled effort.",
  "Learn, apply, improve.",
  "Win the day.",
  "Stay hungry to improve.",
  "Your limits are negotiable.",
  "Make yourself proud.",
  "Today's effort is tomorrow's strength.",
  "Never stop becoming better."
];

const button = document.querySelector("button");
const quote = document.querySelector("h1");

button.addEventListener("click", function () {
     let index = Math.floor(Math.random()*quotes.length);
     quote.textContent = quotes[index];
});