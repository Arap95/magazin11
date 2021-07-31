const btnminus1 = document.getElementById('btn1minus');
const btnplus1 = document.getElementById('btnplus1');
const p1 = document.getElementById('p1');
const total1 = document.getElementById('total1');
btnplus1.onclick = () => {
    p1.innerText = +p1.innerText + 1
    total1.innerText = +total1.innerText + 40
}
btnminus1.onclick = () => {
    if (p1.innerText > 1) {
        p1.innerText = +p1.innerText - 1
        total1.innerText = +total1.innerText - 40
    }
}


const btnminus2 = document.getElementById('btnminus2');
const btnplus2 = document.getElementById('btnplus2');
const p2 = document.getElementById('p2');
const total2 = document.getElementById('total2');
btnplus2.onclick = () => {
    p2.innerText = +p2.innerText + 1
    total2.innerText = +total2.innerText + 70
}
btnminus2.onclick = () => {
    if (p2.innerText > 1) {
        p2.innerText = +p2.innerText - 1
        total2.innerText = +total2.innerText - 70
    }
}



const btnminus3 = document.getElementById('btnminus3');
const btnplus3 = document.getElementById('btnplus3');
const p3 = document.getElementById('p3');
const total3 = document.getElementById('total3');
btnplus3.onclick = () => {
    p3.innerText = +p3.innerText + 1
    total3.innerText = +total3.innerText + 50
}
btnminus3.onclick = () => {
    if (p3.innerText > 1) {
        p3.innerText = +p3.innerText - 1
        total3.innerText = +total3.innerText - 50
    }
}


