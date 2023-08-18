const socket = new WebSocket("wss://api.lanyard.rest/socket")

socket.addEventListener('open', (event) => {
    socket.send(JSON.stringify({
    op: 2,
    d: {
        subscribe_to_ids: ["414915303345094657"]
    }
    }));
});

socket.addEventListener('message', (event) => {
    thedata = JSON.parse(event.data);
    switch (thedata.op) {
        case 0:
            switch (thedata.t) {
                case "INIT_STATE":
                    makePresence(thedata["d"]["414915303345094657"])
                    break;
                case "PRESENCE_UPDATE":
                    makePresence(thedata["d"])
                    break;
            }
        case 1:
            setInterval(() => {
                socket.send(JSON.stringify({op: 3}));
            }, thedata.d.heartbeat_interval);
            break;
    }
});

function makePresence(data) {
    console.log(data);
    document.getElementById("discor").innerHTML = JSON.stringify(data);
}