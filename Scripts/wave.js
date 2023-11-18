const canvas = document.getElementById("string");
const ctx = canvas.getContext("2d");
const numPoints = 1000;
const pointSpacing = canvas.width / numPoints;
let amplitude = 50;
let nodes = document.getElementById("Nodes").value;
let frequency = 1;
let time = 0;

function animateWave() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const phi = (nodes) * Math.PI;

    ctx.beginPath();
    ctx.moveTo(0, canvas.height / 2);

    for (let i = 0; i < numPoints; i++) {
        const x = i * pointSpacing;
        const displacement = 2*amplitude * Math.sin(phi * i / numPoints) * Math.cos(frequency * time);
        const y = canvas.height / 2 + displacement;

        ctx.lineTo(x, y);
    }

    ctx.strokeStyle = "red";
    ctx.stroke();

    time += 0.02;
    requestAnimationFrame(animateWave);
}

animateWave();

document.getElementById("Amplitude").addEventListener("change", function() {
    amplitude = parseFloat(this.value);
});

document.getElementById("Nodes").addEventListener("input", function(){
    nodes = parseFloat(this.value);
});

document.getElementById("Frecuency").addEventListener("change", function(){
    frequency = parseFloat(this.value);
});
