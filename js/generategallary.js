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

function forEachWithCallback(callback) {
    const arrayCopy = this;
    let index = 0;
    const next = () => {
        index++;
        if (arrayCopy.length > 0) {
            callback(arrayCopy.shift(), index, next);
        }
    }
    next();
}
Array.prototype.forEachWithCallback = forEachWithCallback;

readTextFile("./gallery.json", function(text){
    var data = JSON.parse(text);
    data.images.forEachWithCallback((element, i, next) => {
        containerdom = document.createElement("div");
        containerdom.className = "img-wrapper";
        linkdom = document.createElement("a");
        linkdom.href = "view?img=" + (i).toString();
        imgdom = document.createElement("img");
        imgdom.src = element;

        linkdom.appendChild(imgdom);
        containerdom.appendChild(linkdom);

        document.getElementById("column" + (((i - 1) % 4) + 1)).appendChild(containerdom);
        setTimeout(() => {
            next();
        }, 100);
    });
    console.log(data);
});

/* 
<div class="img-wrapper">
    <a href="image">
        <img src="image">
    </a>
</div>
*/