// YOUR CODE HERE

const redButton = document.querySelector("#btn1");
const redOutput = document.querySelector("#output1");

redButton.addEventListener("click", () => {
  redOutput.style.color = "red";
});

const helloButton = document.querySelector("#btn2");
const helloOutput = document.querySelector("#output2");

helloButton.addEventListener("click", () => {
  const newText = document.createElement("span");
  newText.textContent = "Hello world";
  helloOutput.append(newText);
});

const deleteButton = document.querySelector("#btn3");
const deleteOutputParagraph = document.querySelector("#output3 p");

deleteButton.addEventListener("click", () => {
  deleteOutputParagraph.remove();
});

const bothChangeButton = document.querySelector("#btn4");
const bothChangeOutput = document.querySelectorAll("#output4 p");

bothChangeButton.addEventListener("click", () => {
  bothChangeOutput.forEach((element) => {
    element.style.color = "red";
  });
});

const inputButton = document.querySelector("#btn5");

inputButton.addEventListener("click", () => {
  const input = document.querySelector("#message");
  console.log(input.value);
});
