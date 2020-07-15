document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('filterNow');
    btn.addEventListener('click', function () {
        
        var activeTab = null; // when not defined assumes active tab  as default
		chrome.tabs.executeScript(null, {file: 'custom.js'});

        btn.innerText = 'Done!';
        window.setTimeout(function(){ btn.innerText = 'Filter Log!';}, 1000);
		
		window.setTimeout(function(){ window.close();}, 500);

    }, false);
}, false);