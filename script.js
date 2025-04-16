function createOutputCells() {
    let cells = document.querySelector(".outputCells");
    for(let i = 1; i <= 99; i++) {
        let cell = document.createElement("div");
        cell.className = "cell";
        cell.id = "o"+i;

        let input = document.createElement("input");
        let inputCell = document.createElement("div");
        input.className = "input";
        inputCell.className = "inputCell";

        let header = document.createElement("h3");
        let headerCell = document.createElement("div");
        header.className = "header";
        headerCell.className = "headerCell";
        input.type = "number";
        input.disabled = "disabled";
        header.innerHTML = i;

        headerCell.appendChild(header);
        inputCell.appendChild(input);
        cell.appendChild(inputCell);
        cell.appendChild(headerCell);
        cells.appendChild(cell);
    }
}

function createInputCells() {
    let cells = document.querySelector(".inputCells");
    for(let i = 1; i <= 99; i++) {
        let cell = document.createElement("div");
        cell.className = "cell";
        cell.id = "i"+i;

        let input = document.createElement("input");
        let inputCell = document.createElement("div");
        input.className = "input";
        inputCell.className = "inputCell";

        let header = document.createElement("h3");
        let headerCell = document.createElement("div");
        header.className = "header";
        headerCell.className = "headerCell";
        input.type = "number";
        input.disabled = "disabled";
        header.innerHTML = i;

        headerCell.appendChild(header);
        inputCell.appendChild(input);
        cell.appendChild(headerCell);
        cell.appendChild(inputCell);
        cells.appendChild(cell);
    }
}

let focused = 6;

function maxLeft(e) {
    focused = 1;
    focusedCell = document.getElementById(e + focused);
    focusedCell.scrollIntoView();
    focused = 6;
}

function arrowLeft(e) {
    focused--;
    focusedCell = document.getElementById(e + focused);
    focusedCell.scrollIntoView();
}

function arrowRight(e) {
    focused++;
    focusedCell = document.getElementById(e + focused);
    focusedCell.scrollIntoView();
}
