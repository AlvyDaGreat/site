jQuery.get('./memes.txt', function(data) {
    sites = data.split('\n');

    var i = Math.round(Math.random()*(sites.length-1));

    window.location.href=sites[i];

}, 'text');
