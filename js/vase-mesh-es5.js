"use strict";

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var VaseMesh = function VaseMesh(geom) {
  _classCallCheck(this, VaseMesh);

  this.geom = geom;
  this.meshMaterial = new THREE.MeshNormalMaterial();
  this.meshMaterial.side = THREE.DoubleSide;
  this.wireFrameMat = new THREE.MeshBasicMaterial();
  this.wireFrameMat.wireframe = true;
  this.mesh = THREE.SceneUtils.createMultiMaterialObject(this.geom, [this.meshMaterial, this.wireFrameMat]);

  return this.mesh;
};
