import { proxy } from "valtio";

const state = proxy({
    intro: true,
    color: '#EFBD48',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './kamaxtli.png',
    fullDecal: './kamaxtli.png',
});

export default state;