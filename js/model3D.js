import * as THREE from "https://unpkg.com/three@0.158.0/build/three.module.js";
import { GLTFLoader } from "https://unpkg.com/three@0.158.0/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "https://unpkg.com/three@0.158.0/examples/jsm/controls/OrbitControls.js";

//3D Model Scene Setup 
let loadedModel = null;
let baseScale = 1;
let scene, camera, renderer, controls;

function initScene() {
  const canvas = document.getElementById("aboutCanvas");
  if (!canvas) return;

  scene = new THREE.Scene();
  scene.background = null;

  //camera
  camera = new THREE.PerspectiveCamera(
    60,
    canvas.clientWidth / canvas.clientHeight,
    0.1,
    100
  );
  camera.position.set(0, 0, 5);

  //renderer
  renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: true,
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(canvas.clientWidth, canvas.clientHeight);

  //lights
  scene.add(new THREE.AmbientLight(0xffffff, 1.2));

  const keyLight = new THREE.DirectionalLight(0xffffff, 1.8);
  keyLight.position.set(3, 5, 3);
  scene.add(keyLight);

  const rimLight = new THREE.DirectionalLight(0x00ffff, 0.8);
  rimLight.position.set(-3, 2, -2);
  scene.add(rimLight);

  const fillLight = new THREE.DirectionalLight(0xffffff, 0.5);
  fillLight.position.set(0, -2, 2);
  scene.add(fillLight);

  // Controls
  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableZoom = false; 
  controls.enablePan = false;
  controls.autoRotate = false;
  controls.minDistance = 2; 
  controls.maxDistance = 10; 
}

function fitModelToView() {
  if (!loadedModel) return;

  const box = new THREE.Box3().setFromObject(loadedModel);
  const center = box.getCenter(new THREE.Vector3());
  const size = box.getSize(new THREE.Vector3());

  loadedModel.position.x -= center.x;
  loadedModel.position.y -= center.y;
  loadedModel.position.z -= center.z;

  const maxDim = Math.max(size.x, size.y, size.z);
  const fov = camera.fov * (Math.PI / 180);
  let cameraZ = Math.abs(maxDim / 2 / Math.tan(fov / 2));
  cameraZ *= 5.0;

  camera.position.set(0, 0, cameraZ);
  camera.lookAt(0, 0, 0);
  controls.target.set(0, 0, 0);
  controls.update();
}

// Hide loading screen function with minimum 3s display time
let loadingStartTime = Date.now();
const MIN_LOADING_TIME = 3000; //5S

function hideLoadingScreen() {
  const loadingScreen = document.getElementById("loadingScreen");
  if (!loadingScreen) return;

  const elapsedTime = Date.now() - loadingStartTime;
  const remainingTime = Math.max(0, MIN_LOADING_TIME - elapsedTime);

  // Wait for minimum loading time before hiding
  setTimeout(() => {
    loadingScreen.classList.add('fade-out');
    document.body.classList.remove('loading');
    
    // Remove from DOM after fade animation completes
    setTimeout(() => {
      loadingScreen.style.display = "none";
    }, 800); // Match CSS transition duration
  }, remainingTime);
}

// Update loading progress
function updateLoadingProgress(progress) {
  const loadingProgress = document.getElementById("loadingProgress");
  if (loadingProgress) {
    loadingProgress.style.width = `${progress * 100}%`;
  }
}

function loadModel() {
  const loader = new GLTFLoader();

  loader.load(
    "model.glb",  //credit for  https://www.instagram.com/nottodayrender/?hl=en
    // onLoad callback
    (gltf) => {
      const model = gltf.scene;
      model.scale.set(baseScale, baseScale, baseScale);

      scene.add(model);
      loadedModel = model;

      fitModelToView();
      
      // Hide loading screen when model is loaded
      hideLoadingScreen();
    },
    // onProgress callback
    (xhr) => {
      if (xhr.lengthComputable) {
        const percentComplete = xhr.loaded / xhr.total;
        updateLoadingProgress(percentComplete);
      }
    },
    
    (error) => {
      console.error("GLTFLoader error:", error);
      // Hide loading screen even if there's an error
      hideLoadingScreen();
    }
  );
}

//Scroll 3D model animation
function updateModelOnScroll() {
  if (!loadedModel) return;

  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const aboutSection = document.getElementById("about");
  if (!aboutSection) return;

  const aboutTop = aboutSection.offsetTop;

  //Scroll progress relative to about section
  const sectionProgress = Math.max(
    0,
    Math.min(
      1,
      (scrollTop - aboutTop + window.innerHeight) / (window.innerHeight * 2)
    )
  );

  //Rotation based on scroll
  loadedModel.rotation.y = sectionProgress * Math.PI * 2;

  //Scale grows smoothly on scroll
  const scaleMultiplier = 1 + sectionProgress * 0.8;
  loadedModel.scale.set(baseScale * scaleMultiplier, baseScale * scaleMultiplier, baseScale * scaleMultiplier);

  //Fade out past the section
  const canvas = document.getElementById("aboutCanvas");
  if (scrollTop > aboutTop + aboutSection.offsetHeight) {
    const fadeDistance = 500;
    const distancePast = scrollTop - (aboutTop + aboutSection.offsetHeight);
    canvas.style.opacity = Math.max(0, 1 - distancePast / fadeDistance);
  } else {
    canvas.style.opacity = 1;
  }
}

//Resize handling
function handleResize() {
  const canvas = document.getElementById("aboutCanvas");
  if (!canvas) return;

  const w = canvas.clientWidth;
  const h = canvas.clientHeight;
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
  renderer.setSize(w, h);
  fitModelToView();
}

//Animation loop
function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}

//Initialize 3D scene
export function init3DModel() {
  // Add loading class to body
  document.body.classList.add('loading');
  
  initScene();
  loadModel();
  animate();

  window.addEventListener("scroll", updateModelOnScroll);
  window.addEventListener("resize", handleResize);
}

// Scroll-based animations using Intersection Observer
export function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
  };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);
  // Observe project cards and awards rows
  document.querySelectorAll(".project-card, .awards-row").forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });
}