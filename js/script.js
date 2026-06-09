const scene = new THREE.Scene();
scene.background = new THREE.Color(0x87CEEB);

// ==========================
// CAMERA
// ==========================

const camera = new THREE.PerspectiveCamera(
75,
window.innerWidth/window.innerHeight,
0.1,
1000
);

camera.position.set(8,5,8);

// ==========================
// RENDERER
// ==========================

const renderer = new THREE.WebGLRenderer({
antialias:true
});

renderer.setSize(
window.innerWidth,
window.innerHeight
);

renderer.shadowMap.enabled = true;

document.body.appendChild(renderer.domElement);

// ==========================
// CONTROLS
// ==========================

const controls = new THREE.OrbitControls(
camera,
renderer.domElement
);

controls.enableDamping = true;

// ==========================
// LIGHTING
// ==========================

const ambientLight =
new THREE.AmbientLight(0xffffff,0.8);

scene.add(ambientLight);

const pointLight =
new THREE.PointLight(0xffffff,1.5);

pointLight.position.set(0,5,0);

pointLight.castShadow = true;

scene.add(pointLight);

// Lampu visual

const lamp = new THREE.Mesh(
new THREE.SphereGeometry(0.25,32,32),
new THREE.MeshBasicMaterial({
color:0xffffaa
})
);

lamp.position.set(0,4.8,0);
scene.add(lamp);

// ==========================
// FLOOR
// ==========================

const floor = new THREE.Mesh(
new THREE.BoxGeometry(12,0.2,12),
new THREE.MeshPhongMaterial({
color:0x808080
})
);

floor.receiveShadow = true;
floor.position.y = -0.1;

scene.add(floor);

// ==========================
// WALL BACK
// ==========================

const wallMaterial =
new THREE.MeshPhongMaterial({
color:0xf5f5dc
});

const backWall = new THREE.Mesh(
new THREE.BoxGeometry(12,5,0.2),
wallMaterial
);

backWall.position.set(0,2.5,-6);

scene.add(backWall);

// ==========================
// LEFT WALL
// ==========================

const leftWall = new THREE.Mesh(
new THREE.BoxGeometry(0.2,5,12),
wallMaterial
);

leftWall.position.set(-6,2.5,0);

scene.add(leftWall);

// ==========================
// TABLE
// ==========================

const woodMaterial =
new THREE.MeshPhongMaterial({
color:0x8B4513
});

// meja atas

const tableTop = new THREE.Mesh(
new THREE.BoxGeometry(3,0.2,2),
woodMaterial
);

tableTop.position.set(0,2,0);

tableTop.castShadow = true;

scene.add(tableTop);

// kaki meja

function createLeg(x,z){

const leg = new THREE.Mesh(
new THREE.BoxGeometry(0.2,2,0.2),
woodMaterial
);

leg.position.set(x,1,z);

leg.castShadow = true;

scene.add(leg);

}

createLeg(-1.3,-0.8);
createLeg(1.3,-0.8);
createLeg(-1.3,0.8);
createLeg(1.3,0.8);

// ==========================
// CHAIR
// ==========================

const chairMaterial =
new THREE.MeshPhongMaterial({
color:0x654321
});

// dudukan

const seat = new THREE.Mesh(
new THREE.BoxGeometry(1,0.2,1),
chairMaterial
);

seat.position.set(0,1,-2);

scene.add(seat);

// sandaran

const backChair = new THREE.Mesh(
new THREE.BoxGeometry(1,1.2,0.2),
chairMaterial
);

backChair.position.set(0,1.7,-2.4);

scene.add(backChair);

// ==========================
// DECORATION CUBE
// ==========================

const cube = new THREE.Mesh(
new THREE.BoxGeometry(0.8,0.8,0.8),
new THREE.MeshPhongMaterial({
color:0x00ff00
})
);

cube.position.set(0,2.7,0);

cube.castShadow = true;

scene.add(cube);

// ==========================
// WINDOW
// ==========================

const windowMesh = new THREE.Mesh(
new THREE.BoxGeometry(2,1.5,0.05),
new THREE.MeshPhongMaterial({
color:0x66ccff,
transparent:true,
opacity:0.6
})
);

windowMesh.position.set(-2,3,-5.8);

scene.add(windowMesh);

// ==========================
// GRID HELPER
// ==========================

const gridHelper =
new THREE.GridHelper(12,12);

scene.add(gridHelper);

// ==========================
// ANIMATION
// ==========================

function animate(){

requestAnimationFrame(animate);

// kubus berputar

cube.rotation.x += 0.01;
cube.rotation.y += 0.01;

// update kamera

controls.update();

renderer.render(
scene,
camera
);

}

animate();

// ==========================
// RESPONSIVE
// ==========================

window.addEventListener(
'resize',
function(){

camera.aspect =
window.innerWidth /
window.innerHeight;

camera.updateProjectionMatrix();

renderer.setSize(
window.innerWidth,
window.innerHeight
);

}
);
