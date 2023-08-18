const src = new URLSearchParams(window.location.search).get('color');
console.log("url is", src);

if (src != null) {
    document.getElementById("htmlroot").style["background-color"] = src;
    document.getElementById('player').innerHTML = "";
}