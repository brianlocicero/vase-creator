"use strict";

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var VasePoints = (function () {
  function VasePoints() {
    _classCallCheck(this, VasePoints);

    this.pointsOuter = [];
    this.pointsInner = [];
  }

  _createClass(VasePoints, [{
    key: "setPoints",
    value: function setPoints(count, sinVar, cosVar, heightVar) {

      this.pointsOuter = [];
      this.pointsInner = [];

      for (var i = 0; i < count; i++) {
        //first one
        if (i === 0) {
          //start at zero
          this.pointsOuter.push(new THREE.Vector3(0, 0, (i - count + count / 2) * 2));
          //do a regular one
          this.pointsOuter.push(new THREE.Vector3((Math.sin(i * sinVar) + Math.cos(i * cosVar)) * heightVar + 12, 0, (i - count + count / 2) * 2));
        } else if (i === 29) {
          //regular one
          this.pointsOuter.push(new THREE.Vector3((Math.sin(i * sinVar) + Math.cos(i * cosVar)) * heightVar + 12, 0, (i - count + count / 2) * 2));
          //offset
          this.pointsOuter.push(new THREE.Vector3((Math.sin(i * sinVar) + Math.cos(i * cosVar)) * heightVar + 11, 0, (i - count + count / 2) * 2));
        } else {
          this.pointsOuter.push(new THREE.Vector3((Math.sin(i * sinVar) + Math.cos(i * cosVar)) * heightVar + 12, 0, (i - count + count / 2) * 2));
        }
      }

      for (var i = 0; i < count; i++) {

        if (i === 0) {

          this.pointsInner.push(new THREE.Vector3(0, 0, (i - count + count / 2) * 2 + 2));

          this.pointsInner.push(new THREE.Vector3((Math.sin(i * sinVar) + Math.cos(i * cosVar)) * heightVar + 11, 0, (i - count + count / 2) * 2 + 2));
        } else {

          this.pointsInner.push(new THREE.Vector3((Math.sin(i * sinVar) + Math.cos(i * cosVar)) * heightVar + 11, 0, (i - count + count / 2) * 2));
        }
      }
    }
  }, {
    key: "getPointsOuter",
    value: function getPointsOuter() {
      return this.pointsOuter;
    }
  }, {
    key: "getPointsInner",
    value: function getPointsInner() {
      return this.pointsInner;
    }
  }]);

  return VasePoints;
})();
