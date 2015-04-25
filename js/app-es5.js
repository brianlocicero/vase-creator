// once everything is loaded, we run our Three.js stuff.
"use strict";

function init() {

  //vars
  var stats = new Stats(),
      myStats = new StatsInit(stats, "Stats-output", "absolute", "top", "left", "0px"),
      scene = new THREE.Scene(),
      camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000),
      lighting,
      latheMesh,
      latheGeometry,
      gui = new dat.GUI(),
      isWireframe = true,
      webGLRenderer = new THREE.WebGLRenderer();

  //functions
  function redraw() {
    scene.remove(latheMesh);
    latheGeometry = new VaseGeometry(30, guiControls.segments, guiControls.heightVar, guiControls.sinVar, guiControls.cosVar);
    latheMesh = new VaseMesh(latheGeometry, guiControls.isWireframe);
    latheMesh.rotation.x = guiControls.rotation;
    latheMesh.translateX(-7);
    scene.add(latheMesh);
    exportSTL();
  }

  function exportSTL() {
    var stlGeometry = latheGeometry.clone();
    var myStlString = stlFromGeometry(stlGeometry, { setHref: true });
  }

  function render() {
    myStats.update();
    requestAnimationFrame(render);
    webGLRenderer.render(scene, camera);
  }

  //scene
  webGLRenderer.setClearColor(new THREE.Color(15658734, 1));
  webGLRenderer.setSize(window.innerWidth, window.innerHeight);
  webGLRenderer.shadowMapEnabled = true;

  //lighting
  lighting = new THREEx.ThreePointsLighting();
  scene.add(lighting);

  camera.position.x = 0;
  camera.position.y = 0;
  camera.position.z = 100;
  camera.lookAt(new THREE.Vector3(0, 0, 0));

  document.getElementById("WebGL-output").appendChild(webGLRenderer.domElement);

  var guiControls = new GUIControls(24, 5, 0.2, 0.3, -(Math.PI / 2), exportSTL, isWireframe);
  gui.add(guiControls, "segments", 0, 50).name("Segments").step(1).onChange(redraw);
  gui.add(guiControls, "heightVar", 1, 10).name("Curve Intensity").onChange(redraw);
  gui.add(guiControls, "sinVar", 0.1, 0.4).name("Curve Adjust A").onChange(redraw);
  gui.add(guiControls, "cosVar", 0.1, 0.4).name("Curve Adjust B").onChange(redraw);
  gui.add(guiControls, "rotation", -(Math.PI / 2), Math.PI).name("Rotation").onChange(redraw);
  gui.add(guiControls, "isWireframe").name("Wireframe On").onChange(redraw);

  latheGeometry = new VaseGeometry(30, 24, 5, 0.2, 0.3);
  latheMesh = new VaseMesh(latheGeometry, isWireframe);
  latheMesh.rotation.x = -(Math.PI / 2);
  latheMesh.translateX(-7);
  scene.add(latheMesh);

  //set initial download
  exportSTL();
  $("a.download").attr("href", document.myHref);

  //subsequently
  $("a.download").on("click", function () {
    $(this).attr("href", document.myHref);
  });

  //render
  render();
}
window.onload = init;
