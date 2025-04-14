function createExit() {
    let exit = document.querySelector(".exit");
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
        exit.appendChild(box);
    }
}
