class VaseMesh {

	constructor (geom, isWireframe) {
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
	    this.meshMaterial = new THREE.MeshPhongMaterial( 
	    	{
	    		color:0xcfa28a,
	    		emissive:0x333333,
	    		shininess:100,
	    		shading:THREE.SmoothShading,
	    		side:THREE.DoubleSide
	    	} 
	    );
	    this.wireFrameMat = new THREE.MeshBasicMaterial(
		    {
		    	color:0x111111
		    }
	    );

	    if (isWireframe) {
	    	this.wireFrameMat.wireframe = true;
	    	this.mesh = THREE.SceneUtils.createMultiMaterialObject(this.geom, [this.meshMaterial, this.wireFrameMat]);
	    } else {
	    	this.mesh = new THREE.Mesh(this.geom, this.meshMaterial);
	    }

	    return this.mesh;
	}

}