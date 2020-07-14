document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('filterNow');
    btn.addEventListener('click', function () {
        
        chrome.tabs.executeScript(null, {file: 'custom.js'});

        btn.innerText = 'Done!';
        window.setTimeout(function(){ btn.innerText = 'Filter!';}, 1000);
		
		window.setTimeout(function(){ window.close();}, 500);

    }, false);
}, false);