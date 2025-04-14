function createExit() {
    let exit = document.querySelector(".exit");

    let maxL = document.createElement("div");
    maxL.className = "maxLeft";
    let mLH = document.createElement("h1");
    mLH.className = "mLH";
    mLH.innerHTML = "&#11244;";
    maxL.appendChild(mLH);

    let arrowL = document.createElement("div");
    arrowL.className = "leftArrow";
    let arLH = document.createElement("h1");
    arLH.className = "aLH";
    arLH.innerHTML = "&#11207;";
    arrowL.appendChild(arLH);

    let arrowR = document.createElement("div");
    arrowR.className = "rightArrow";
    let arRH = document.createElement("h1");
    arRH.className = "aRH";
    arRH.innerHTML = "&#11208;";
    arrowR.appendChild(arRH);

    exit.appendChild(maxL);
    exit.appendChild(arrowL);

    let boxes = document.createElement("div");
    boxes.className = "boxes";
    for(let i = 1; i <= 99; i++) {
        let box = document.createElement("div");
        box.className = "box";

        let input = document.createElement("input");
        let inputBox = document.createElement("div");
        input.className = "input";
        inputBox.className = "inputBox";

        let header = document.createElement("h3");
        let headerBox = document.createElement("div");
        header.className = "header";
        headerBox.className = "headerBox";
        
        input.type = "number";
        input.disabled = "disabled";
        header.innerHTML = i;

        headerBox.appendChild(header);
        inputBox.appendChild(input);
        box.appendChild(inputBox);
        box.appendChild(headerBox);
        boxes.appendChild(box);
    }
    exit.appendChild(boxes);

    exit.appendChild(arrowR);
}
