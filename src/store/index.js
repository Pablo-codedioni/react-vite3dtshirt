import { proxy } from "valtio";

const state = proxy({
    intro: true,
    color: '#EFBD48',
    isLogoTexture: true,
    isFullTexture: false,
    position: [0, 0.04, 0.15],
    scale:0.15,
    logoDecal: './kamaxtli.png',
    fullDecal: './kamaxtli.png',
});

export default state;