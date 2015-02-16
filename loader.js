if (notLoaded()) {
  var script = document.createElement('script');
  script.src = 'http://localhost:3000/dist/app.min.js';
  script.onload = boot;
  document.body.appendChild(script);
} else {
  boot();
}

function notLoaded() {
  return typeof loaded === 'undefined';
}

function boot() {
  var downloader = document.getElementById('ux-downloader');
  if (!downloader) {
    render();
  }
}

function render() {
  var ui = document.createElement('div');
  var input = document.createElement('input');
  var button = document.createElement('button');

  ui.style.position = 'fixed';
  ui.style.top = 0;
  ui.style.left = 0;
  ui.id = 'ux-downloader';
  button.innerHTML = 'Download';
  button.onclick = function () {
    download(input.value, function (err, blob) {
      saveAs(blob, 'test.zip');
    });
  };

  ui.appendChild(input);
  ui.appendChild(button);
  document.body.appendChild(ui);
}
