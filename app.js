var inputNum = document.querySelector("#inputNum")
var ouput = document.querySelector("#output")
var submit = document.querySelector("#submit")
var serverUrl ="https://api.funtranslations.com/translate/numbers.json";
var loader = document.querySelector("#loading");

function getTranslatedURL(number)
{
    return serverUrl + "?text=" + number;
}
function catchHandler(error)
{
    console.log(error)
    alert("Server is busy. Please try after some time!!!!!");
}
function displayLoading() {
    loader.classList.add("display");
    setTimeout(() => {
        hideLoading()
    }, 5000);
}

// hiding loading 
function hideLoading() {
    loader.classList.remove("display");
}
function addEventListener()
{
    displayLoading();
    ouput.innerText ="";
    console.log("input");
    var translatedUrl= getTranslatedURL(inputNum.value);
    console.log(translatedUrl);
    fetch(getTranslatedURL(inputNum.value))
    .then(response => response.json())
    .then(json => 
        {
            ouput.innerText = json.contents.translated;
        })
        .catch(catchHandler)
        .finally(()=>
        {
            hideLoading();
        })
        
        

};
submit.addEventListener("click",  addEventListener)

