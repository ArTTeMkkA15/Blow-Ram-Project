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
    let memory = document.createElement("h1");
    let value = document.createElement("h2");
    let address = document.createElement("h2");
    let tdNames1 = document.createElement("td");
    tdNames1.colSpan = "2";
    let tdNames2 = document.createElement("td");
    let tdNames3 = document.createElement("td");
    let trNames1 = document.createElement("tr");
    let trNames2 = document.createElement("tr");
    let table = document.createElement("table");

    memory.innerHTML = "Memory";
    address.innerHTML = "Address";
    value.innerHTML = "Value";
    tdNames1.appendChild(memory);
    tdNames2.appendChild(address);
    tdNames3.appendChild(value);
    trNames1.appendChild(tdNames1);
    trNames2.appendChild(tdNames2);
    trNames2.appendChild(tdNames3);
    table.appendChild(trNames1);
    table.appendChild(trNames2);

    for(let i = 1; i <= 10; i++) {
        let h3Address = document.createElement("h3");
        let h3Value = document.createElement("h3");
        let tdAddress = document.createElement("td");
        let tdValue = document.createElement("td");
        let tr = document.createElement("tr");

        h3Address.innerHTML = i;
        h3Value.innerHTML = "?";
        tdAddress.appendChild(h3Address);
        tdValue.appendChild(h3Value);
        tr.appendChild(tdAddress);
        tr.appendChild(tdValue);
        table.appendChild(tr);
    }
    memoryInners.appendChild(table);
    let arrowUp = document.createElement("h3");
    let showAddress = document.createElement("h3");
    let arrowDown = document.createElement("h3");
    tdArrowUp = document.createElement("td");
    tdArrowUp.className = "width10";
    tdShowAddress = document.createElement("td");
    tdShowAddress.className = "width33";
    tdArrowDown = document.createElement("td");
    tdArrowDown.className = "width10";
    trShowAddress = document.createElement("tr");
    table2 = document.createElement("table");

    arrowUp.innerHTML = "&#8593;";
    showAddress.innerHTML = "Show Address...";
    arrowDown.innerHTML = "&#8595;";

    tdArrowUp.appendChild(arrowUp);
    tdShowAddress.appendChild(showAddress);
    tdArrowDown.appendChild(arrowDown);

    trShowAddress.appendChild(tdArrowUp);
    trShowAddress.appendChild(tdShowAddress);
    trShowAddress.appendChild(tdArrowDown);

    table2.appendChild(trShowAddress);
    memoryInners.appendChild(table2);
}
