jQuery.get('https://cdn.discordapp.com/attachments/572536078536278056/837004174209318992/memes.txt', function(data) {
	sites = data.split('\n');

	var i = Math.round(Math.random()*(sites.length-1));

	window.location.href=sites[i];

}, 'text');
