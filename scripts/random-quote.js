var quotes = ["\"why am i a dead meme\"", "\"let me send the one without the bones\"","\"give me your money lol\"","\"ok so basically-\"","\"i use arch btw\"","\"bro this guy's mic is one gold\"","\"bro i need sleep\""];
var i = Math.round(Math.random()*(quotes.length-1));

document.getElementById("ayowhat").innerHTML = quotes[i];