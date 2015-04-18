
    // once everything is loaded, we run our Three.js stuff.
    function init() {

        //init stats object
        var stats = new Stats();
        //wrapper
        var myStats = new StatsInit(stats, "Stats-output", "absolute", "top", "left", "0px");

        // create a scene, that will hold all our elements such as objects, cameras and lights.
        var scene = new THREE.Scene();

        // create a camera, which defines where we're looking at.
        var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

        // create a render and set the size
        var webGLRenderer = new THREE.WebGLRenderer();
        webGLRenderer.setClearColor(new THREE.Color(0xEEEEEE, 1.0));
        webGLRenderer.setSize(window.innerWidth, window.innerHeight);
        webGLRenderer.shadowMapEnabled = true;

        // position and point the camera to the center of the scene
        camera.position.x = 0;
        camera.position.y = 0;
        camera.position.z = 65;
        camera.lookAt(new THREE.Vector3(0, 0, 0));

        // add the output of the renderer to the html element
        document.getElementById("WebGL-output").appendChild(webGLRenderer.domElement);

        //the mesh
        var latheMesh;
        var latheGeometry;

        generatePoints(24, 5, 0.2, 0.3, -(Math.PI/2));

        // setup the control gui
        var gui = new dat.GUI();
        //redraw
        function redraw () {
          scene.remove(latheMesh);
          generatePoints(guiControls.segments, guiControls.heightVar, guiControls.sinVar, guiControls.cosVar, guiControls.rotation);
        }
        function exportSTL () {
          var stlGeometry = latheGeometry.clone();
          var myStlString = stlFromGeometry(stlGeometry, {download:true} );
        }
        //controls values wrapper
        var guiControls = new GUIControls(24, 5, 0.2, 0.3, -(Math.PI/2), exportSTL);
        //add controls
        gui.add(guiControls, 'segments', 0, 50).name('Segments').step(1).onChange(redraw);
        gui.add(guiControls, 'heightVar', 1, 10).name('Curve Intensity').onChange(redraw);
        gui.add(guiControls, 'sinVar', 0.1,  0.4).name('Curve Adjust A').onChange(redraw);
        gui.add(guiControls, 'cosVar', 0.1,  0.4).name('Curve Adjust B').onChange(redraw);
        gui.add(guiControls, 'rotation', -(Math.PI/2),  Math.PI).name('Rotation').onChange(redraw);
        gui.add(guiControls, 'exportSTL').name('Export STL');

        //render
        render();

        function generatePoints(segments, heightVar, sinVar, cosVar, rotation) {

            var points = [];
            var pointsR = [];
            var count = 30;
            var heightVar = heightVar;
            var sinVar = sinVar;
            var cosVar = cosVar;
            var phiStart = 0;
            var phiLength = 2*Math.PI;
            var rotation = rotation;

            for (var i = 0; i < count; i++) {

            	//first one

            	if (i === 0) {

                //start at zero
                points.push(
                  new THREE.Vector3(
                    0,
                    0,
                    (i - count) + count / 2
                    )
                );

                //do a regular one
                points.push(
                  new THREE.Vector3(
                    (Math.sin(i * sinVar) + Math.cos(i * cosVar)) * heightVar + 12,
                    0,
                    (i - count) + count / 2
                    )
                );

            	} else if (i === 29) {

                //regular one
                points.push(
                  new THREE.Vector3(
                    (Math.sin(i * sinVar) + Math.cos(i * cosVar)) * heightVar + 12,
                    0,
                    (i - count) + count / 2
                    )
                );

                //offset
                points.push(
                  new THREE.Vector3(
                    (Math.sin(i * sinVar) + Math.cos(i * cosVar)) * heightVar + 11,
                    0,
                    (i - count) + count / 2
                    )
                );

              } else {
                points.push(
                  new THREE.Vector3(
                    (Math.sin(i * sinVar) + Math.cos(i * cosVar)) * heightVar + 12,
                    0,
                    (i - count) + count / 2
                    )
                );
              }

            }

            for (var i = 0; i < count; i++) {

            	if (i === 0) {

                pointsR.push(
                  new THREE.Vector3(
                    0,
                    0,
                    ((i - count) + count / 2) + 1
                    )
                );

                pointsR.push(
                  new THREE.Vector3(
                    (Math.sin(i * sinVar) + Math.cos(i * cosVar)) * heightVar + 11,
                    0,
                    ((i - count) + count / 2) + 1
                    )
                );

            	} else {

                pointsR.push(
                  new THREE.Vector3(
                    (Math.sin(i * sinVar) + Math.cos(i * cosVar)) * heightVar + 11,
                    0,
                    (i - count) + count / 2
                    )
                );
              }
            }

            // use the same points to create a LatheGeometry
            latheGeometry = new THREE.LatheGeometry(points, segments, phiStart, phiLength);

            // use the same points to create a LatheGeometry
            latheGeometry2 = new THREE.LatheGeometry(pointsR, segments, phiStart, phiLength);

            //merge
            latheGeometry.merge(latheGeometry2);

            //then create mesh
            latheMesh = createMesh(latheGeometry);

            //rotate
            latheMesh.rotation.x = rotation;

            scene.add(latheMesh);
        }

        function createMesh(geom) {

            // assign two materials
            //  var meshMaterial = new THREE.MeshBasicMaterial({color:0x00ff00, transparent:true, opacity:0.6});
            var meshMaterial = new THREE.MeshNormalMaterial();
            meshMaterial.side = THREE.DoubleSide;
            var wireFrameMat = new THREE.MeshBasicMaterial();
            wireFrameMat.wireframe = true;

            // create a multimaterial
            var mesh = THREE.SceneUtils.createMultiMaterialObject(geom, [meshMaterial, wireFrameMat]);

            return mesh;
        }

        function render() {
            myStats.update();

            // render using requestAnimationFrame
            requestAnimationFrame(render);
            webGLRenderer.render(scene, camera);
        }

    }
    window.onload = init;