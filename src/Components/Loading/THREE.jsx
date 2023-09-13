import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

let currentMount = null;
//scene
const scene = new THREE.Scene();
//camara
const camera = new THREE.PerspectiveCamera(25, 100 / 100, 0.1, 100);
camera.position.z = 60;
scene.add(camera);
//render
const render = new THREE.WebGLRenderer();

const controls = new OrbitControls(camera, render.domElement);
controls.autoRotate = true;
controls.autoRotateSpeed = 10;

//resize

const resize = () => {
  render.setSize(currentMount.clientWidth, currentMount.clientHeight);
  camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
  camera.updateProjectionMatrix();
};
window.addEventListener("resize", resize);
let mesh = {};
//loader
const gltfLoader = new GLTFLoader();
gltfLoader.load(
  "../../Public/logoMatsu.gltf",
  (gltf) => {
    mesh = gltf.scene;
    scene.add(mesh);
  },
  () => {},
  () => {}
);

const directionalLight = new THREE.DirectionalLight(0xffffff, 100);
directionalLight.position.set(20, 20, 20);
scene.add(directionalLight);
const directionalLight2 = new THREE.DirectionalLight(0xffffff, 100);
directionalLight2.position.set(-20, -20, -20);
scene.add(directionalLight2);
const animation = () => {
  controls.update();
  render.render(scene, camera);
  requestAnimationFrame(animation);
};
animation();

export const mountScene = (mountRef) => {
  currentMount = mountRef.current;
  resize();
  currentMount.appendChild(render.domElement);
};
export const cleanUpScene = () => {
  currentMount.removeChild(render.domElement);
};
