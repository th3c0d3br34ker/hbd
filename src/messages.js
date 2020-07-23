import emoji from "react-easy-emoji";

const Messages = [
  {
    id: "1",
    start: new Date().getTime(),
    message: emoji("Hi, there! 👋"),
    delay: 0,
  },
  {
    id: "2",
    start: new Date().getTime() + 2200,
    message: emoji(
      "So you have finally grown one year older but you have the brains of a child 😂"
    ),
    delay: 2200,
  },
  {
    id: "3",
    start: new Date().getTime() + 4200,
    message: emoji(
      "What would you like for a gift... face mask 😷 or gloves🧤?"
    ),
    delay: 4200,
  },
  {
    id: "4",
    start: new Date().getTime() + 6200,
    message: emoji(
      "Anyways keeping that aside, a very happy birthday to you 🎂"
    ),
    delay: 6200,
  },
  {
    id: "5",
    start: new Date().getTime() + 8200,
    message: "Have a blast! ✨",
    delay: 8200,
  },
  {
    id: "6",
    start: new Date().getTime() + 10200,
    message: "Jainam. 👨‍💻",
    delay: 10200,
  },
];

export { Messages };
