var loaded = true;

function getSize(address, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('HEAD', address);
  xhr.onload = onLoad;
  xhr.send();
  return;
  function onLoad() {
    callback(null, parseInt(this.getResponseHeader('Content-Length')));
  }
}

function download(address, callback) {
  getSize(address, function (err, size) {
    var parts = partition(size, 0, 3);
    // console.log(parts);
    async.map(parts, function (item, callback) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', address);
      xhr.responseType = 'blob';
      xhr.setRequestHeader('Range', item.makeRange());
      xhr.onload = onLoad;
      xhr.send();
      return;
      function onLoad() {
        callback(null, this.response);
      }
    }, function (err, result) {
      var blob = new Blob(result);
      callback(null, blob);
    });
  });
}

function Part(size, position) {
  this.size = size;
  this.position = position;
}

Part.prototype.makeRange = function (item) {
  return 'bytes=' + this.position + '-' + (this.position + this.size - 1);
};

function partition(size, position, i) {
  if (i === 0 || size < 25) return [
    new Part(size, position)
  ];

  var next = i - 1;

  var size1 = Math.floor(size / 2);
  var size2 = size - size1;

  var position1 = position;
  var position2 = position + size1;

  return partition(size1, position1, next).concat(partition(size2, position2, next));
}
