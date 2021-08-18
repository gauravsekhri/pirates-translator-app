var translatebtn = document.querySelector('#transbtn');
var textInput = document.querySelector('#textInput');
var transOutput = document.querySelector('#transDisplay');

// var transUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
var transUrl = "https://api.funtranslations.com/translate/pirate.json";

var reqUrl = transUrl + '?text=' + textInput.value;

function constructURL(inputText) {
    var encodedURI = encodeURI(inputText);
    return `${transUrl}?text=${encodedURI}`;
}

function errorHandler(){
    alert("Error in connection !");
}

function translateText(){
    var text = textInput.value;
    var finalURL = constructURL(text);
    console.log(finalURL)
    fetch(finalURL)
    .then(resp => resp.json())
    .then(newjson => (transOutput.innerText = newjson.contents.translated))
    .catch(errorHandler);

}

function translate1(){
    console.log("clicked");
}

// translatebtn.addEventListener("click", consoleText);