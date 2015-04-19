class VasePoints {
  constructor() {
    this.pointsOuter = [];
    this.pointsInner = [];
  }

  setPoints(count, sinVar, cosVar, heightVar) {

  	this.pointsOuter = [];
  	this.pointsInner = [];

    for (var i = 0; i < count; i++) {
      //first one
      if (i === 0) {
        //start at zero
        this.pointsOuter.push(
          new THREE.Vector3(
            0,
            0, (i - count) + count / 2
          )
        );
        //do a regular one
        this.pointsOuter.push(
          new THREE.Vector3(
            (Math.sin(i * sinVar) + Math.cos(i * cosVar)) * heightVar + 12,
            0, (i - count) + count / 2
          )
        );
      } else if (i === 29) {
        //regular one
        this.pointsOuter.push(
          new THREE.Vector3(
            (Math.sin(i * sinVar) + Math.cos(i * cosVar)) * heightVar + 12,
            0, (i - count) + count / 2
          )
        );
        //offset
        this.pointsOuter.push(
          new THREE.Vector3(
            (Math.sin(i * sinVar) + Math.cos(i * cosVar)) * heightVar + 11,
            0, (i - count) + count / 2
          )
        );
      } else {
        this.pointsOuter.push(
          new THREE.Vector3(
            (Math.sin(i * sinVar) + Math.cos(i * cosVar)) * heightVar + 12,
            0, (i - count) + count / 2
          )
        );
      }

    }

    for (var i = 0; i < count; i++) {

      if (i === 0) {

        this.pointsInner.push(
          new THREE.Vector3(
            0,
            0, ((i - count) + count / 2) + 1
          )
        );

        this.pointsInner.push(
          new THREE.Vector3(
            (Math.sin(i * sinVar) + Math.cos(i * cosVar)) * heightVar + 11,
            0, ((i - count) + count / 2) + 1
          )
        );

      } else {

        this.pointsInner.push(
          new THREE.Vector3(
            (Math.sin(i * sinVar) + Math.cos(i * cosVar)) * heightVar + 11,
            0, (i - count) + count / 2
          )
        );
      }
    }

  }

  getPointsOuter () {
    return this.pointsOuter;
  }

  getPointsInner () {
    return this.pointsInner;
  }
}