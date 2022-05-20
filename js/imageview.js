const urlParams = new URLSearchParams(window.location.search);

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

readTextFile("../gallery.json", function(text){
    var data = JSON.parse(text);
    if (urlParams.has("img")) {
        document.getElementById("deez").src = data.images[parseInt(urlParams.get('img') - 1)];
        document.getElementById("nuts").innerHTML = data.captions[parseInt(urlParams.get('img') - 1)];
    }
    console.log(data);
});