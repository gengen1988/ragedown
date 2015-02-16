# ragedown

A downloader without client / plugin.

It is a HTML5 toy, using XHR2 download partial blob. Inspired by mega.co.nz.

Published by bookmarklet to prevent cross domain.

## Installation

Drag these code to bookmark bar:

```
javascript:(function(){function notLoaded(){return"undefined"==typeof loaded}function boot(){var downloader=document.getElementById("ux-downloader");downloader||render()}function render(){var ui=document.createElement("div"),input=document.createElement("input"),button=document.createElement("button");ui.style.position="fixed",ui.style.top=0,ui.style.left=0,ui.id="ux-downloader",button.innerHTML="Download",button.onclick=function(){download(input.value,function(err,blob){saveAs(blob,"test.zip")})},ui.appendChild(input),ui.appendChild(button),document.body.appendChild(ui)}if(notLoaded()){var script=document.createElement("script");script.src="http://localhost:3000/dist/app.min.js",script.onload=boot,document.body.appendChild(script)}else boot();})();
```
