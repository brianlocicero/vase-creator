class GUIControls {
	constructor (segments, heightVar, sinVar, cosVar, rotation, exportSTL, isWireframe) {
		this.segments = segments;
		this.heightVar = heightVar;
		this.sinVar = sinVar;
		this.cosVar = cosVar;
		this.rotation = rotation;
		this.exportSTL = exportSTL;
		this.isWireframe = isWireframe;

		return this;
	}
}