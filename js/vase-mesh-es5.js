"use strict";

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var VaseMesh = function VaseMesh(geom, isWireframe) {
	_classCallCheck(this, VaseMesh);

	this.isWireframe = isWireframe;
	this.geom = geom;
	//this.geom.computeFaceNormals();
	//this.geom.computeVertexNormals()
	/*
    this.meshMaterial = new THREE.MeshNormalMaterial();
    this.meshMaterial.side = THREE.DoubleSide;
    this.wireFrameMat = new THREE.MeshBasicMaterial();
    this.wireFrameMat.wireframe = true;
    */
	this.meshMaterial = new THREE.MeshPhongMaterial({
		color: 13607562,
		emissive: 3355443,
		shininess: 100,
		shading: THREE.SmoothShading,
		side: THREE.DoubleSide
	});
	this.wireFrameMat = new THREE.MeshBasicMaterial({
		color: 1118481
	});

	if (isWireframe) {
		this.wireFrameMat.wireframe = true;
		this.mesh = THREE.SceneUtils.createMultiMaterialObject(this.geom, [this.meshMaterial, this.wireFrameMat]);
	} else {
		this.mesh = new THREE.Mesh(this.geom, this.meshMaterial);
	}

	return this.mesh;
};
