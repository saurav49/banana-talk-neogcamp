var btn = document.querySelector("#btn")
var userInput = document.querySelector("#text");
var translateOutput = document.querySelector(".output");

btn.addEventListener("click", () => {
    if(userInput.value) {
        getTranslation(userInput.value).then(data => outputTranslatedText(data.contents.translated));
    } else {
        alert("Message cannot be empty");
    }
})

// function to call api and get the translated text
const getTranslation = async (textToTranslate) => {
    let response = await fetch(`https://api.funtranslations.com/translate/minion.json?text=${textToTranslate}`);
    let data = await response.json()
    return data
}

// function to output the translated text
const outputTranslatedText = (text) => {
    translateOutput.textContent = text;
}

// https://api.funtranslations.com/translate/minion.json  api call