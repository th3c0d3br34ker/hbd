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
    message: emoji("I asked you to sent some wishes! 😇"),
    delay: 2200,
  },
  {
    id: "3",
    start: new Date().getTime() + 4200,
    message: emoji("But you didn't 😞"),
    delay: 4200,
  },
  {
    id: "4",
    start: new Date().getTime() + 6200,
    message: emoji("Now what to do? 🤷‍♂️"),
    delay: 6200,
  },
  {
    id: "5",
    start: new Date().getTime() + 8200,
    message: "I don't know so I made this! 😏",
    delay: 8200,
  },
];

export { Messages };
