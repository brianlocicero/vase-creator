class VaseMesh {

	constructor (geom) {
		this.geom = geom;
    this.meshMaterial = new THREE.MeshNormalMaterial();
    this.meshMaterial.side = THREE.DoubleSide;
    this.wireFrameMat = new THREE.MeshBasicMaterial();
    this.wireFrameMat.wireframe = true;
    this.mesh = THREE.SceneUtils.createMultiMaterialObject(this.geom, [this.meshMaterial, this.wireFrameMat]);

    return this.mesh;
	}

}