"use strict";

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var GUIControls = function GUIControls(segments, heightVar, sinVar, cosVar, rotation, exportSTL) {
	_classCallCheck(this, GUIControls);

	this.segments = segments;
	this.heightVar = heightVar;
	this.sinVar = sinVar;
	this.cosVar = cosVar;
	this.rotation = rotation;
	this.exportSTL = exportSTL;

	return this;
}
/*
redraw (GUIControls) {
	GUIControls.scene.remove(this.mesh);
	GUIControls.generatePoints(GUIControls.segments, GUIControls.heightVar, GUIControls.sinVar, GUIControls.cosVar, GUIControls.rotation);
}
	add () {
	var GUIControls = this;
	//warning 'this' referes to the controls within onChange handler, not this class definition
  this.gui.add(this, 'segments', 0, 50).name('Segments').step(1).onChange( this.redraw(GUIControls) );
  this.gui.add(this, 'heightVar', 1, 10).name('Curve Intensity').onChange( this.redraw(GUIControls) );
  this.gui.add(this, 'sinVar', 0.1,  0.4).name('Curve Adjust A').onChange( this.redraw(GUIControls) );
  this.gui.add(this, 'cosVar', 0.1,  0.4).name('Curve Adjust B').onChange( this.redraw(GUIControls) );
  this.gui.add(this, 'rotation', -(Math.PI/2),  Math.PI).name('Rotation').onChange( this.redraw(GUIControls) );
  //this.gui.add(controls, 'exportSTL').name('Export STL');
}
*/
;
