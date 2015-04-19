// once everything is loaded, we run our Three.js stuff.
function init() {

  //vars
  var stats = new Stats(),
  myStats = new StatsInit(stats, "Stats-output", "absolute", "top", "left", "0px"),
  scene = new THREE.Scene(),
  camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000),
  latheMesh,
  latheGeometry,
  gui = new dat.GUI(),
  webGLRenderer = new THREE.WebGLRenderer();

  //functions
  function redraw () {
    scene.remove(latheMesh);
    latheGeometry = new VaseGeometry(30, guiControls.segments, guiControls.heightVar, guiControls.sinVar, guiControls.cosVar);
    latheMesh = new VaseMesh(latheGeometry);
    latheMesh.rotation.x = guiControls.rotation;
    scene.add(latheMesh);
  }

  function exportSTL () {
    var stlGeometry = latheGeometry.clone();
    var myStlString = stlFromGeometry(stlGeometry, {download:true} );
  }

  function render() {
      myStats.update();
      requestAnimationFrame(render);
      webGLRenderer.render(scene, camera);
  }

  //scene
  webGLRenderer.setClearColor(new THREE.Color(0xEEEEEE, 1.0));
  webGLRenderer.setSize(window.innerWidth, window.innerHeight);
  webGLRenderer.shadowMapEnabled = true;

  camera.position.x = 0;
  camera.position.y = 0;
  camera.position.z = 65;
  camera.lookAt(new THREE.Vector3(0, 0, 0));

  document.getElementById("WebGL-output").appendChild(webGLRenderer.domElement);

  var guiControls = new GUIControls(24, 5, 0.2, 0.3, -(Math.PI/2), exportSTL);
  gui.add(guiControls, 'segments', 0, 50).name('Segments').step(1).onChange(redraw);
  gui.add(guiControls, 'heightVar', 1, 10).name('Curve Intensity').onChange(redraw);
  gui.add(guiControls, 'sinVar', 0.1,  0.4).name('Curve Adjust A').onChange(redraw);
  gui.add(guiControls, 'cosVar', 0.1,  0.4).name('Curve Adjust B').onChange(redraw);
  gui.add(guiControls, 'rotation', -(Math.PI/2),  Math.PI).name('Rotation').onChange(redraw);
  gui.add(guiControls, 'exportSTL').name('Export STL');

  latheGeometry = new VaseGeometry(30, 24, 5, 0.2, 0.3);
  latheMesh = new VaseMesh(latheGeometry);
  latheMesh.rotation.x = -(Math.PI/2);
  scene.add(latheMesh);

  //render
  render();

}
window.onload = init;