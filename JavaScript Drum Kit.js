const A = document.getElementById("A");
const S = document.getElementById("S");
const D = document.getElementById("D");
const F = document.getElementById("F");
const G = document.getElementById("G");
const H = document.getElementById("H");
const J = document.getElementById("J");
const K = document.getElementById("K");
const L = document.getElementById("L");

const aSound = document.getElementById("A-Sound");
const sSound = document.getElementById("S-Sound");
const dSound = document.getElementById("D-Sound");
const fSound = document.getElementById("F-Sound");
const gSound = document.getElementById("G-Sound");
const hSound = document.getElementById("H-Sound");
const jSound = document.getElementById("J-Sound");
const kSound = document.getElementById("K-Sound");
const lSound = document.getElementById("L-Sound");

function aRemove() {A.classList.remove( 'play' )}
function sRemove() {S.classList.remove( 'play' )}
function dRemove() {D.classList.remove( 'play' )}
function fRemove() {F.classList.remove( 'play' )}
function gRemove() {G.classList.remove( 'play' )}
function hRemove() {H.classList.remove( 'play' )}
function jRemove() {J.classList.remove( 'play' )}
function kRemove() {K.classList.remove( 'play' )}
function lRemove() {L.classList.remove( 'play' )}

const playSound = (ev) => {
    if (ev.which === 65) {
        A.classList.add( 'play' );
        aSound.currentTime = 0;
        aSound.play();
        setTimeout(aRemove, 100);
    } else if (ev.which === 83) {
        S.classList.add( 'play' );
        sSound.currentTime = 0;
        sSound.play();
        setTimeout(sRemove, 100);
    } else if (ev.which === 68) {
        D.classList.add( 'play' );
        dSound.currentTime = 0;
        dSound.play();
        setTimeout(dRemove, 100);
    } else if (ev.which === 70) {
        F.classList.add( 'play' );
        fSound.currentTime = 0;
        fSound.play();
        setTimeout(fRemove, 100);
    } else if (ev.which === 71) {
        G.classList.add( 'play' );
        gSound.currentTime = 0
        gSound.play();
        setTimeout(gRemove, 100);
    } else if (ev.which === 72) {
        H.classList.add( 'play' );
        hSound.currentTime = 0;
        hSound.play();
        setTimeout(hRemove, 100);
    } else if (ev.which === 74) {
        J.classList.add( 'play' );
        jSound.currentTime = 0;
        jSound.play();
        setTimeout(jRemove, 100);
    } else if (ev.which === 75) {
        K.classList.add( 'play' );
        kSound.currentTime = 0;
        kSound.play();
        setTimeout(kRemove, 100);
    } else if (ev.which === 76) {
        L.classList.add( 'play' );
        lSound.currentTime = 0;
        lSound.play();
        setTimeout(lRemove, 100);
    }
}

document.addEventListener("keydown", playSound);

