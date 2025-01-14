// this is copyed from three js --> creating a scene --> copy from const scene (becasue we are using cdn , if we use bundler then copy from import)
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// render wali line ke pahile isko paste kro jo same code ke niche wala code hai
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );
camera.position.z = 5;
// it ends here

const canvas = document.querySelector("#draw");
const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize( window.innerWidth, window.innerHeight );
// document.body.appendChild( renderer.domElement );
// the first code we copyed is ends here

// same for this copy the next code and past afer document body (1st code)
function animate() {
	window.requestAnimationFrame(animate);
    renderer.render( scene, camera );
    // same for this (pase the next line in between 3rd line)
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
}
// renderer.setAnimationLoop( animate );
animate();