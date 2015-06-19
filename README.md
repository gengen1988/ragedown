# ragedown

A downloader without client / plugin.

It is a HTML5 toy, using XHR2 download partial blob. Inspired by mega.co.nz.

Published by bookmarklet to prevent cross domain.

## Installation

Add this code to bookmark:

```javascript
javascript:!function(){var e='ragedown',t='http://localhost:3000/dist/app.min.js',d=document.getElementById(e);if(!d){d=document.createElement('div');var n=document.createElement('script');n.src=t,d.appendChild(n),document.body.appendChild(d)}}();
```
