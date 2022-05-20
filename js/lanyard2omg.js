var users = [
    '414915303345094657',
    '547575352126603265',
];
var names = [
    'alvy',
    'tesla',
];

users.forEach((element, index) => {
    var xmlhttp = new XMLHttpRequest();
    // userid: 414915303345094657
    
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.responseText);
            callbackFunction(data);
        }
    };
    xmlhttp.open("GET", `https://api.lanyard.rest/v1/users/${element}`, true);
    xmlhttp.send();
    
    function callbackFunction(data) {
        console.log(data);
    
        if (data.success) {
            window.$discordMessage.profiles[names[index]].author = data.data.discord_user.username;
            window.$discordMessage.profiles[names[index]].roleColor = data.data.kv.color;
            window.$discordMessage.profiles[names[index]].avatar = `https://cdn.discordapp.com/avatars/${element}/${data.data.discord_user.avatar}.png`;
        }
    }
});