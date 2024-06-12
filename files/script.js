let randNum = () => {
    return Math.floor(Math.random() * 360);
};
let randBg = (option = "alpha") => {
    let color;
    let [r, g, b, a] = [
        Math.floor(Math.random() * 255),
        Math.floor(Math.random() * 255),
        Math.floor(Math.random() * 255),
        (Math.random() * 1).toFixed(4),
    ];
    if (option === "aplha") {
        color = `rgba(${r}, ${g}, ${b}, ${a})`;
    }
    else if (option === "solid") {
        color = `rgba(${r}, ${g}, ${b}, 1)`;
    }
    return color;
};
let randGradient = (angle = 0) => {
    let c1 = randBg("aplha");
    let c2 = randBg("aplha");
    let gradient = `linear-gradient( ${angle}deg, ${c1}, ${c2})`;
    return gradient;
};
let newDiv = () => {
    let color = randGradient(randNum());
    const element = document.createElement("div");
    element.style.background = color;
    element.id = "element";
    const details = document.createElement("div");
    details.innerHTML = "background: " + color + ";";
    details.id = "details";
    let wrapper = document.createElement("div");
    wrapper.id = "wrapper";
    wrapper.appendChild(element);
    wrapper.appendChild(details);
    window.onclick = document.body.style.background = color;
    return wrapper;
};
let createDivs = (len) => {
    let generate = document.getElementById("generate");
    let gradients = document.getElementById("gradients");
    generate.onclick = () => {
        gradients.innerHTML = "";
        gradients.appendChild(newDiv());
        copyText();
    };
};
let copyText = () => {
    let details = document.getElementById("details");
    details.addEventListener('click', () => {
        let value = details.innerText;
        console.log(value);
        navigator.clipboard.writeText(value);
        alert("Copied the text: " + value);
    })
}
copyText();
createDivs();
