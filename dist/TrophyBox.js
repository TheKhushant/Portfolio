let scene = new THREE.Scene();
//let camera = new Three.PerspectiveCamera(65, window.innerWidth / window.innerHeight, .1, 100); //100 se dur and 0.1 se pass wali chij nahi dikhegi
let camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.z = 5;
scene.add(camera);

let box = new THREE.BoxGeometry(1,1,1);
let material = new THREE.MeshBasicMaterial({color: 0x00ff00});
let mesh = new THREE.Mesh(box, material);

mesh.position.x = 3; //mesh ko rotate krna hai 

scene.add(mesh);

const canvas = document.querySelector("#canvas");
let renderer = new THREE.WebGLRenderer({canvas:canvas});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera);

function animate(){
    window.requestAnimationFrame(animate);
    renderer.render(scene,camera);
    mesh.rotation.y += 0.01;
}
animate();