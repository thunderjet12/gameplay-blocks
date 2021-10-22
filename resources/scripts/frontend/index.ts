
// eslint-disable-next-line no-unused-vars
// import config from '@config';
import './vendor/*.js';
import '@styles/frontend';
// import 'airbnb-browser-shims';
import './spritesvg';
import 'svelte';
// Your code goes here ...
import "../../styles/frontend/elements/elements.scss";
import  App  from "./App.svelte";


export const GameplayFrontEnd = new App ({
    target: document.querySelector("body")
});

//  default GameplayFrontEnd;
