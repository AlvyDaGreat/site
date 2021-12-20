var xmlhttp = new XMLHttpRequest();
// userid: 414915303345094657

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var data = JSON.parse(this.responseText);
        callbackFunction(data);
    }
};
xmlhttp.open("GET", "https://api.lanyard.rest/v1/users/414915303345094657", true);
xmlhttp.send();

function callbackFunction(data) {
    console.log(data);

    if (data.success) {
        document.getElementById("discordtag").innerHTML = data.data.discord_user.username + "<span style=\"opacity: 0.25;\">#" + data.data.discord_user.discriminator;
        document.getElementById("discordtag").style.color = data.data.kv.namecolor;

        document.getElementById("discordimg").src = "https://cdn.discordapp.com/avatars/414915303345094657/" + data.data.discord_user.avatar + ".webp?size=128";

        // oh god
        data.data.activities.forEach(element => {
            switch(element.type) {
                case 0:
                    console.log(element);
                    break;
                case 1:
                    console.log(element);
                    break;
                case 2:
                    console.log(element);
                    break;
                case 3:
                    console.log(element);
                    break;
                case 4:
                    console.log(element);
                    document.getElementById("discordstat").innerHTML = element.state;
                    break;
            }
        });
        
        document.getElementById("discordlink").innerHTML = "<a href=\"" + data.data.kv.server + "\">" + data.data.kv.server + "</a>";

        switch(data.data.discord_status) {
            case "online":
                document.getElementById("discordimg").style["outline-color"] = "#3BA55D";
                break;
            case "dnd":
                document.getElementById("discordimg").style["outline-color"] = "#ED4245";
                break;
            case "idle":
                document.getElementById("discordimg").style["outline-color"] = "#F2A319";
                break;
        }
    }
}