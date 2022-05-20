const src = new URLSearchParams(window.location.search).get('video');
console.log("url is", src);

if (src != null) {
    var html = '<video id="player" controls autoplay>';
    html += '<source src="' + src + '" type="video/mp4">';
    html += '</video>';
    console.log(html);
    document.getElementById('player').innerHTML = html;
} else {
    document.getElementById('player').innerHTML = 'put a <a href="https://www.urlencoder.org/">url encoded</a> video link in the address bar like <a href="/quickplay?video=https%3A%2F%2Fcdn.discordapp.com%2Fattachments%2F722068125495066695%2F968370169724411904%2FFinalVideo_1650947828.252487.mov">this</a> lol (you can also do audio files)';
}