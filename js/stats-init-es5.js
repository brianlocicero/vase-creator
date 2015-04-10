"use strict";

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var StatsInit = function StatsInit(stats, id, pos, top, left) {
  _classCallCheck(this, StatsInit);

  this.stats = stats;
  stats.setMode(0);
  stats.domElement.style.position = pos;
  stats.domElement.style.top = top;
  stats.domElement.style.left = left;
  document.getElementById(id).appendChild(stats.domElement);

  return stats;
};
