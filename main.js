console.log("Connected");

const wordCounter = (value) => {
  console.log(value);
  if (value) {
    wordCount.innerHTML = `Word Count: ${value}`;
  } else {
    error.innerHTML = "Please input text";
  }
};

const textArea = document.querySelector("textArea");
const form = document.querySelector("form");
const error = document.querySelector("#error");
const wordCount = document.querySelector("#word-count");
const toggleButton = document.querySelector("#bg-switch");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  error.innerHTML = "";
  wordCount.innerHTML = "";
  const value = textarea.value;
  wordCounter(value);
});

toggleButton.addEventListener("reset", () => {
  error.innerHTML = "";
  wordCount.innerHTML = "";
});

toggleButton.addEventListener("click", (event) => {
  toggleMode(event.target.innerHTML);
});
