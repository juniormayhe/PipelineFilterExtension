var element = document.getElementById('page-body');
if (typeof (element) != 'undefined' && element != null) {

    var exp = /\[INFO.*|\[WARNING.*|\[DEBUG.*|INFO:.*|WARNING:.*/gm;
    element.innerHTML = element.innerHTML.replace(exp, '');
    
    // replace pipelines 
    element.innerHTML = element.innerHTML.replace(/\[Pipeline.*/gm, '\n');

    // replace checkmarkx
    element.innerHTML = element.innerHTML.replace(/\[CHECKMARX.*/gm, '\n');

    // replace mstest plugin
    element.innerHTML = element.innerHTML.replace(/\[MSTEST-PLUGIN.*/gm, '\n');

    // other bash noises
    element.innerHTML = element.innerHTML.replace(/\+ tree.*/gm, '\n').replace(/\+ printenv.*/gm, '\n').replace(/\+ salt-call.*/gm, '\n').replace(/\nlocal:\n    None.*/gm, '\n').replace(/\nlocal:\n    True.*/gm, '\n').replace(/(\[\d{1,2}m){2,}/g, '');
    element.innerHTML = element.innerHTML.replace(/>\d{2}.\d{2}\.\d{4}\|\d{2}:\d{2}:\d{2}\.\d{3}\s*$/gm, '>\n');

    

    // normalize new lines
    element.innerHTML = element.innerHTML.replace(/(\n\s*){2,}/g, '\n');
	
	// replace empty tags
    element.innerHTML = element.innerHTML.replace(/<[^/>]+>[ \n\r\t]*<\/[^>]+>/gm, '\n');
	
	// replace duplicate new lines
    element.innerHTML = element.innerHTML.replace(/^\s*[\r\n]/gm, '\n');

    // colorize
	element.innerHTML = element.innerHTML.replace(/\Finished: FAILURE.*/gm, '<span style="color:red">Finished: FAILURE</span>');
	element.innerHTML = element.innerHTML.replace(/\hudson.remoting.ProxyException.*/gm, '<span style="color:red">hudson.remoting.ProxyException</span>');
	
	
    for (const line of element.querySelectorAll('span')) {
		var l = line.textContent.toLowerCase();
        if ((l.includes('dotnet') && !l.includes('error:')) || l.includes('test run') || l.includes('finished: success')) { line.style.color = 'lime'; }
    }

    for (const line of element.querySelectorAll('span')) {
		var l = line.textContent.toLowerCase();
        if (l.includes('error') || l.includes('error:') || l.includes('failed')) { line.style.color = 'red'; }
    }

    for (const line of element.querySelectorAll('span')) {
		var l = line.textContent.toLowerCase();
        if (l.includes('warning')) { line.style.color = 'yellow'; }
    }
}
else {
    console.log('This does not seem to be a jenkins build log page');
}
