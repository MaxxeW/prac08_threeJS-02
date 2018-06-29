
// display anything with THREE.js: scene, camera and renderer => render the scene with camera

// SCENE:
var scene = new THREE.Scene();

// CAMERA:
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
camera.position.set(0, 15, 20);
camera.rotation.set(0.2, 0, 0);
/* PerspectiveCamera(
      fieldOfView: degrees, // the vertical field of view
      aspectRatio: theWidthOfTheElement / theHeight,
      nearClippingPlane,
      farClippingPlane)
*/


// RENDERER:
var renderer = new THREE.WebGLRenderer({canvas: document.getElementById('canvas1')});

renderer.setSize( window.innerWidth , window.innerHeight, false ); // (width, height, updateStyle)
// document.body.appendChild( renderer2.domElement );


// === ADD A CUBE ===:
// GEOMETRY:
var geometry = new THREE.BoxGeometry( 5, 5, 20 );
// an object that contains all the points(vertices) and fill(faces) of the cube.
var geometry2 = new THREE.BoxGeometry(4, 4, 10);
var geometry3 = new THREE.IcosahedronGeometry(4, 0);
var geometry4 = new THREE.PlaneGeometry( 200, 100, 32, 32 );


// MATERIAL:
var material = new THREE.MeshLambertMaterial( { color: 0xfd59d7 } );
// a material to color it. All material take an object of properties which will be applied to them
var material2 = new THREE.MeshLambertMaterial( { color: 0x488AC5 } );
var material3 = new THREE.MeshLambertMaterial( { color: 0xF7D260} );
var material4 = new THREE.MeshLambertMaterial( {color: 0xffff0f, side: THREE.DoubleSide} );

// MESH:
var cube = new THREE.Mesh( geometry, material );
// an object that takes a geometry, and applies a material to it
var cube2 = new THREE.Mesh( geometry2, material2 );
var icosahedron = new THREE.Mesh( geometry3, material3 );
var plane = new THREE.Mesh( geometry4, material4 );

// Modify the vertices:
for (var i = 0;i < geometry.vertices.length; i++) {
  geometry.vertices[i].x += -5 + Math.random()*20;
  geometry.vertices[i].y += -5 + Math.random()*20;
}


// Positioning:
cube2.position.set( 20, 20, 10 );
icosahedron.position.set( -10, -10, 5 );
plane.position.set( 0, -10, 5 );

// Add into the scene
scene.add( cube );
scene.add( cube2 );
scene.add( icosahedron );
scene.add( plane );
// the thing we add will be added to the coordinates( 0,0,0 ) by default.
// This would cause both the camera and the cube to be inside each other
camera.position.z = 100;
// so we move the camera out a bit.

// LIGHT: we need to add a light to see our cube
var light = new THREE.PointLight(0xFFFFFF);
light.position.set(10, 20, 0);
scene.add(light);


// === we are not rendering anything yet, we need to call a RENDER / ANIMATE LOOP here ===

function rotateBoxes(rtx, rty) {
  cube.rotation.x += rtx;
  cube.rotation.y += rty;
  cube2.rotation.x += rtx;
  cube2.rotation.y += rty;
  icosahedron.rotation.x += rtx;
  icosahedron.rotation.y -= rty;
  plane.rotation.x = 90;
}

function animate() {
  // create a loop that causes the renderer to draw the scene every time the screen is refreshed
  // on a typical screen: 60 times per second
  requestAnimationFrame( animate ); // it pauses when the user navigates to another browser tab
  renderer.render( scene, camera );
  rotateBoxes(0.01, 0.01);


}



animate();
