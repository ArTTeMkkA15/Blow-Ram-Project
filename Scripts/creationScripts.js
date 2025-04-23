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
    let headers = ["LN", "Label", "Instruction", "Argument", "Comment"];
    let instruction = [" ", "LOAD", "STORE", "ADD", "SUB", "MULT", "DIV", "READ", 
        "WRITE", "JUMP", "JGTZ", "JZERO", "HALT"];
    
    headers.forEach(headerText => {
        let th = document.createElement("th");
        th.innerText = headerText;
        headerRow.appendChild(th);
    });
    
    thead.appendChild(headerRow);
    table.appendChild(thead);

    let tbody = document.createElement("tbody");
    
    for (let i = 1; i <= 15; i++) {
        let row = document.createElement("tr");
        
        let lnCell = document.createElement("td");
        lnCell.innerText = i; 
        row.appendChild(lnCell);
        
        let labelCell = document.createElement("td");
        labelCell.id = `label${i}`;
        labelCell.contentEditable = "true";
        row.appendChild(labelCell);

        let selectInst = document.createElement("select");
        selectInst.id = `instruction${i}`;
        instruction.forEach(instruction => {
            let optionInst = document.createElement("option");
            optionInst.innerHTML = instruction;
            selectInst.appendChild(optionInst);
        });
        row.appendChild(selectInst);

        let argumentCell = document.createElement("td");
        argumentCell.id = `argument${i}`;
        argumentCell.contentEditable = "true";
        row.appendChild(argumentCell);

        let commentCell = document.createElement("td");
        commentCell.contentEditable = "true";
        row.appendChild(commentCell);
        
        tbody.appendChild(row);
    }
    
    table.appendChild(tbody);
}

let focused = 3;

function maxLeft(e) {
    focused = 1;
    focusedCell = document.getElementById(e + focused);
    focusedCell.scrollIntoView();
}

function arrowLeft(e) {
    focused-= 3;
    if(focused <= 0) 
        focused = 1;
    focusedCell = document.getElementById(e + focused);
    focusedCell.scrollIntoView();
    focused++;
}

function arrowRight(e) {
    focused+= 3;
    focusedCell = document.getElementById(e + focused);
    focusedCell.scrollIntoView();
    focused--;
}

function readProcessor(){

}

function readMemory(){
    let memoryInners = document.querySelector(".memory");
    let adres = document.createElement("h1");
}
