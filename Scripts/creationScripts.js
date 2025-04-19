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

function createEditorProgram() {
    let programDiv = document.querySelector(".program");
    
    let table = document.createElement("table");
    table.className = "codeTable";
    programDiv.appendChild(table);

    let thead = document.createElement("thead");
    let headerRow = document.createElement("tr");
    let headers = ["LN", "Label", "Instruction", "Argument", "Comment", "EC", "EP"];
    
    headers.forEach(headerText => {
        let th = document.createElement("th");
        th.innerText = headerText;
        headerRow.appendChild(th);
    });
    
    thead.appendChild(headerRow);
    table.appendChild(thead);

    let tbody = document.createElement("tbody");
    
    for (let i = 1; i <= 25; i++) {
        let row = document.createElement("tr");
        
        let lnCell = document.createElement("td");
        lnCell.innerText = i; 
        row.appendChild(lnCell);
        
        let labelCell = document.createElement("td");
        labelCell.id = `label${i}`;
        labelCell.contentEditable = "true";
        row.appendChild(labelCell);

        let instructionCell = document.createElement("td");
        instructionCell.id = `instruction${i}`;
        instructionCell.contentEditable = "true";
        row.appendChild(instructionCell);

        let argumentCell = document.createElement("td");
        argumentCell.id = `argument${i}`;
        argumentCell.contentEditable = "true";
        row.appendChild(argumentCell);

        let commentCell = document.createElement("td");
        commentCell.contentEditable = "true";
        row.appendChild(commentCell);

        let ecCell = document.createElement("td");
        ecCell.id = `ec${i}`;
        row.appendChild(ecCell);

        let epCell = document.createElement("td");
        ecCell.id = `ep${i}`;
        row.appendChild(epCell);
        
        tbody.appendChild(row);
    }
    
    table.appendChild(tbody);
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
