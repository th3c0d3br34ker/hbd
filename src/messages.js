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
    start: new Date().getTime() + 2000,
    message: emoji("I asked you to sent some wishes! 😇"),
    delay: 2000,
  },
  {
    id: "3",
    start: new Date().getTime() + 4000,
    message: emoji("But you didn't 😞"),
    delay: 4000,
  },
  {
    id: "4",
    start: new Date().getTime() + 6000,
    message: emoji("Now what to do? 🤷‍♂️"),
    delay: 6000,
  },
  {
    id: "5",
    start: new Date().getTime() + 8000,
    message: "I don't know so I made this! 😏",
    delay: 8000,
  },
];

export { Messages };
