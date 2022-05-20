function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

//usage:
readTextFile("./quotes.json", function(text){
    var quotes = JSON.parse(text);
    document.getElementById('quote').innerHTML = "\"" + quotes[Math.round(Math.random()*(quotes.length-1))] + "\"";
    console.log(quotes);
});

/* 
<div class="img-wrapper">
    <a href="image">
        <img src="image">
    </a>
</div>
*/