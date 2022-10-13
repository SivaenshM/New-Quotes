
//Get Html elemnets by its id
let quotecontainer = document.getElementById("quote-container");
let quoteDiv = document.getElementById("quote");
let authorDiv = document.getElementById("author");
let whatsappbtn = document.getElementById("whatsapp-button");
let newQuotebtn = document.getElementById("new-quote");
let loading = document.getElementById("loader");

let apiquotes = [];

//function for loader Start

function loadingStart() {
    loading.hidden = false;
    quotecontainer.hidden = true;
}

//function for loader Stop
function loadingStop() {
    loading.hidden = true;
    quotecontainer.hidden = false;
}


//Get A Quote from a APi
async function getQuotes() {
    loadingStart();
    let random = Math.ceil(Math.random() * 1644)
    const apiurl = "https://type.fit/api/quotes";
    try {
        const response = await fetch(apiurl);
        apiquotes = await response.json();
        (apiquotes[random].text.length > 120) ? quoteDiv.classList.add("long-text") : quoteDiv.classList.remove("long-text")
        quoteDiv.innerText = apiquotes[random].text;
        (!apiquotes[random].author) ? authorDiv.innerText = "Unknown" : authorDiv.innerText = apiquotes[random].author;
        loadingStop();
    } catch (error) {
        //catch error

    }
}
function shareonWhatsapp() {
    let whatsappUrl = `whatsapp://send?text=${quoteDiv.innerText} - ${authorDiv.innerText}`
    window.open(whatsappUrl);

}

getQuotes();