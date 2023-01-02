import * as THREE from 'three'

export const cube = (renderer: THREE.WebGLRenderer) => {
  const scene = new THREE.Scene()

  const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 3500);
  camera.position.z = 5;

  const color = 0xFFFFFF;
  const intensity = 1;
  const light = new THREE.DirectionalLight(color, intensity);
  light.position.set(-1, 2, 4);
  scene.add(light)

  const boxWidth = 1;
  const boxHeight = 1;
  const boxDepth = 1;
  const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);

  const makeInstance = (geometry: THREE.BoxGeometry, color: number, x: number) => {
    const material = new THREE.MeshPhongMaterial({color});

    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    cube.position.x = x;

    return cube;
  }

  const cubes = [makeInstance(geometry, 0x44aa88, 0),
                 makeInstance(geometry, 0x8844aa, -2),
                 makeInstance(geometry, 0xaa8844, 2)]

  const render = () => {
    cubes.forEach((cube, index) => {
      const speed = 1 + index * .1;
      cube.rotation.x += 0.01 * speed;
      cube.rotation.y += 0.01 * speed;
    })

    const canvas = renderer.domElement;
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix()
    
    renderer.render(scene, camera);
    requestAnimationFrame(render);
  }

  render()
}