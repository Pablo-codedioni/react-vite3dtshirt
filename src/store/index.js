import { proxy } from "valtio";

const state = proxy({
    intro: true,
    color: '#EFBD48',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './fotocamera.jpg',
    fullDecal: './threejs.png',
    ///Define position
    position: [0, 0.04, 0.15],
    scale:0.15,
});

export default state;