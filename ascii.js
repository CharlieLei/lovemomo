function Ascii() {
  this.canvas = document.createElement('canvas');
  this.context = this.canvas.getContext('2d');
  this.fontSize = 100;
}

Ascii.Engine = function (canvas) {
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
  this.width = canvas.width;
  this.height = canvas.height;

  this.context = canvas.getContext("2d");
  this.context.fillStyle = 'white';
  this.shapeFactory = new Shape();
  this.points = [];
  this.shapeFactory.resize();

  window.addEventListener('resize', (e) => {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    this.width = canvas.width;
    this.height = canvas.height;
    this.context.fillStyle = 'white';
    this.shapeFactory.resize();
  });
};

Ascii.Engine.prototype.checkLife = function () {
  this.points = this.points.filter(function(point) {
    if (point.state === -1) {
      return false;
    } else {
      point.x = point.targetX;
      point.y = point.targetY;
      point.state = 0;
      return true;
    }
  });
};

Ascii.Engine.prototype.clear = function () {
  return this._toShape([]);
};