(function() {

  var ID = 'ragedown';
  var SCRIPT = 'http://localhost:3000/dist/app.min.js';
  // var STYLE = null;

  var root = document.getElementById(ID)

  if (!root) {
    root = document.createElement('div');
    // script
    var script = document.createElement('script');
    script.src = SCRIPT;
    root.appendChild(script);

    // style
    // style = document.createElement('link');
    // style.href = STYLE;
    // style.rel = 'stylesheet';
    // root.appendChild(style);

    document.body.appendChild(root);
  }

})();
