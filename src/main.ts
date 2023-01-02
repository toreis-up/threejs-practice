import {sample} from './sample';

const main = () => {
  try {
    const canvas = document.createElement('canvas');
    if (!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')))) {
      throw new Error();
    }
  } catch (e) {
    throw new Error('Failed initializing WebGL')
  }

  sample()
}

window.onload = main;