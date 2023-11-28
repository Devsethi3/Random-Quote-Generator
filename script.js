const quoteText = document.querySelector(".quote");
const authorName = document.querySelector(".author .name");
const quoteBtn = document.querySelector("button");
const soundBtn = document.querySelector(".sound");
const copyBtn = document.querySelector(".copy");
const copyMessage = document.querySelector(".message");

function randomQuote() {
  quoteBtn.classList.add("loading");
  quoteBtn.innerText = "Loading Quote...";
  fetch("https://api.quotable.io/random")
    .then((response) => response.json())
    .then((result) => {
      quoteText.innerText = result.content;
      authorName.innerText = result.author;
      quoteBtn.innerText = "New Quote";
      quoteBtn.classList.remove("loading");
    });
}

document.addEventListener("load", () => {
    quoteText.innerText = result.content;
    authorName.innerText = result.author;   
})
soundBtn.addEventListener("click", () => {
    let uttrance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);
    speechSynthesis.speak(uttrance);
})

copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(quoteText.innerText);
    copyMessage.style.top = "5%";
    copyMessage.style.opacity = "1";
    setTimeout(function(){
        copyMessage.style.top = "-5%";
        copyMessage.style.opacity = "0";
    }, 2000)
})

quoteBtn.addEventListener("click", randomQuote);
