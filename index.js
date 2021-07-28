let pilot = {
    0: "Dante",
    1: "Evan",
    2: "Richard",
    3: "Tevin"
};

function choosePilot() {
    document.querySelector("#name").innerHTML = pilot[Math.floor(Math.random() * 5)];
};