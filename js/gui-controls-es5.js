"use strict";

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var GUIControls = function GUIControls(segments, heightVar, sinVar, cosVar, rotation, exportSTL, isWireframe) {
	_classCallCheck(this, GUIControls);

	this.segments = segments;
	this.heightVar = heightVar;
	this.sinVar = sinVar;
	this.cosVar = cosVar;
	this.rotation = rotation;
	this.exportSTL = exportSTL;
	this.isWireframe = isWireframe;

	return this;
};
