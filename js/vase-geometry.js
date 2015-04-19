class VaseGeometry {

	constructor (count, segments, heightVar, sinVar, cosVar) {
		this.vasePoints = new VasePoints();
    this.count = count;
    this.heightVar = heightVar;
    this.sinVar = sinVar;
    this.cosVar = cosVar;
    this.phiStart = 0;
    this.phiLength = 2*Math.PI;
    this.geometryOuter = {};
    this.geometryInner = {};

    this.vasePoints.setPoints(this.count, this.sinVar, this.cosVar, this.heightVar);
    this.geometryOuter = new THREE.LatheGeometry(this.vasePoints.getPointsOuter(), this.segments, this.phiStart, this.phiLength);
    this.geometryInner = new THREE.LatheGeometry(this.vasePoints.getPointsInner(), this.segments, this.phiStart, this.phiLength);
    this.geometryOuter.merge(this.geometryInner);

    return this.geometryOuter;
	}

}