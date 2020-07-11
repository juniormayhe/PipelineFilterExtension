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

    // replace empty tags
    element.innerHTML = element.innerHTML.replace(/<[^/>]+>[ \n\r\t]*<\/[^>]+>/gm, '\n');

    // other bash noises
    element.innerHTML = element.innerHTML.replace(/\+ tree.*/gm, '\n').replace(/\+ printenv.*/gm, '\n');
    element.innerHTML = element.innerHTML.replace(/^\>\d{2}.\d{2}\.\d{4}\|\d{2}:\d{2}:\d{2}\.\d{3}\s*$/gm, '>\n');

    // replace duplicate new lines
    element.innerHTML = element.innerHTML.replace(/^\s*[\r\n]/gm, '\n');

    // normalize new lines
    element.innerHTML = element.innerHTML.replace(/(\n\s*){2,}/g, '\n');

    // colorize
    for (const line of element.querySelectorAll('span')) {
        if (line.textContent.includes('dotnet') || line.textContent.includes('Test run') || line.textContent.includes('Finished: SUCCESS')) { line.style.color = 'green'; }
    }

    for (const line of element.querySelectorAll('span')) {
        if (line.textContent.includes('error') || line.textContent.includes('failed') || line.textContent.includes('Finished: FAILURE')) { line.style.color = 'red'; }
    }

    for (const line of element.querySelectorAll('span')) {
        if (line.textContent.includes('warning')) { line.style.color = 'yellow'; }
    }
}
else {
    console.log('This does not seem to be a jenkins build log page');
}
