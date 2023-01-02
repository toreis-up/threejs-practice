import * as THREE from 'three';
import {sample} from './sample';
import {drawLine} from './drawline'

const main = () => {
  try {
    const canvas = document.createElement('canvas');
    if (!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')))) {
      throw new Error();
    }
  } catch (e) {
    throw new Error('Failed initializing WebGL')
  }

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement)

  // sample(renderer)
  drawLine(renderer)
}

window.onload = main;