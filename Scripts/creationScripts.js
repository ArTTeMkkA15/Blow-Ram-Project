let instructionsAmount = 1;
let currentNum = 1;
let currentNumUpperIndex = 1;
let currentNumJump = 1;
let currentNumJgtz = 1;
let output = 1;
let jump = 0;
let jgtz = 0;
let jumpX = '';
let jgtzX = '';
const HEADERS = ["LN", "Label", "Instruction", "Argument", "Comment"];
const INSTRUCTIONS = [" ", "LOAD", "STORE", "ADD", "SUB", "MULT", "DIV", "READ", "WRITE", "JUMP", "JGTZ", "JZERO", "HALT"];

function createOutputCells() {
    let cells = document.querySelector("#outputCells");
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
        input.id = 'output'+i;
        //input.disabled = "disabled";
        header.innerHTML = i;

        headerCell.appendChild(header);
        inputCell.appendChild(input);
        cell.appendChild(inputCell);
        cell.appendChild(headerCell);
        cells.appendChild(cell);
    }
}

function createInputCells() {
    let cells = document.querySelector("#inputCells");
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
        input.id = 'input'+i;
        input.value = i;
        header.innerHTML = i;

        headerCell.appendChild(header);
        inputCell.appendChild(input);
        cell.appendChild(headerCell);
        cell.appendChild(inputCell);
        cells.appendChild(cell);
    }
}

function createEditorProgram() {
    console.log(instructionsAmount);
    let programDiv = document.querySelector(".program");
    
    let table = document.createElement("table");
    table.className = "codeTable";
    programDiv.appendChild(table);

    let thead = document.createElement("thead");
    let headerRow = document.createElement("tr");
    
    HEADERS.forEach(headerText => {
        let th = document.createElement("th");
        th.innerText = headerText;
        headerRow.appendChild(th);
    });
    
    thead.appendChild(headerRow);

    table.appendChild(thead);

    let tbody = document.createElement("tbody");

    let row = document.createElement("tr");
        
    let lnCell = document.createElement("td");
    lnCell.innerText = instructionsAmount; 
    row.appendChild(lnCell);
        
    let labelCell = document.createElement("td");
    labelCell.id = `label${instructionsAmount}`;
    labelCell.contentEditable = "true";
    row.appendChild(labelCell);
    
    let selectInst = document.createElement("select");
    selectInst.id = `instruction${instructionsAmount}`;
    INSTRUCTIONS.forEach(instruction => {
        let optionInst = document.createElement("option");
        optionInst.innerHTML = instruction;
        selectInst.appendChild(optionInst);
    });
    row.appendChild(selectInst);

    let argumentCell = document.createElement("td");
    argumentCell.id = `argument${instructionsAmount}`;
    argumentCell.contentEditable = "true";
    row.appendChild(argumentCell);

    let commentCell = document.createElement("td");
    commentCell.contentEditable = "true";
    row.appendChild(commentCell);
    
    tbody.appendChild(row);
    
    table.appendChild(tbody);

    let addRowButton = document.createElement("button");
    addRowButton.className = "addButton";
    addRowButton.innerHTML = "+";
    programDiv.appendChild(addRowButton);

    addRowButton.addEventListener("click", function(){
        instructionsAmount++;
        console.log(instructionsAmount);
        let row = document.createElement("tr");
            
        let lnCell = document.createElement("td");
        lnCell.innerText = instructionsAmount; 
        row.appendChild(lnCell);
        
        let labelCell = document.createElement("td");
        labelCell.id = `label${instructionsAmount}`;
        labelCell.contentEditable = "true";
        row.appendChild(labelCell);
    
        let selectInst = document.createElement("select");
        selectInst.id = `instruction${instructionsAmount}`;
        INSTRUCTIONS.forEach(instruction => {
            let optionInst = document.createElement("option");
            optionInst.innerHTML = instruction;
            selectInst.appendChild(optionInst);
        });
        row.appendChild(selectInst);
    
        let argumentCell = document.createElement("td");
        argumentCell.id = `argument${instructionsAmount}`;
        argumentCell.contentEditable = "true";
        row.appendChild(argumentCell);
    
        let commentCell = document.createElement("td");
        commentCell.contentEditable = "true";
        row.appendChild(commentCell);
        
        tbody.appendChild(row);
    });
}

function maxLeft(e) {
    focusedCell = document.getElementById(e);
    focusedCell.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
}

function arrowLeft(e) {
    focusedCell = document.getElementById(e);
    focusedCell.scrollBy({
        top: 0,
        left: -250,
        behavior: "smooth",
    });
}

function arrowRight(e) {
    focusedCell = document.getElementById(e);
    focusedCell.scrollBy({
        top: 0,
        left: 250,
        behavior: "smooth",
    });
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

    for(let i = 0; i <= 99; i++) {
        let h3Address = document.createElement("h3");
        let h3Value = document.createElement("h3");
        let tdAddress = document.createElement("td");
        let tdValue = document.createElement("td");
        let tr = document.createElement("tr");

        h3Address.innerHTML = i;
        h3Value.innerHTML = "?";
        h3Value.id = "value"+i;
        tdAddress.appendChild(h3Address);
        tdValue.appendChild(h3Value);
        tr.appendChild(tdAddress);
        tr.appendChild(tdValue);
        table.appendChild(tr);
    }
    memoryInners.appendChild(table);
    let arrowUp = document.createElement("button");
    let showAddress = document.createElement("button");
    let arrowDown = document.createElement("button");
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

function startButton(){
    while(currentNum <= instructionsAmount){
        console.log(currentNum);
        let instructionRead = document.getElementById('instruction'+currentNum).value;
        let argumentRead = document.getElementById('argument'+currentNum).textContent;
        let instructionInsert = document.getElementById('instruction');
        let argumentInsert = document.getElementById('argument');
        console.log("instructionRead:"+instructionRead);
        console.log("argumentRead:"+argumentRead);
        let memoryValue = document.getElementById('value'+argumentRead);
        instructionInsert.value = instructionRead;
        argumentInsert.value = argumentRead;
        //Część funkcji powyżej wpisuje dane do Procesora;
        if(jump === 0){
            if(jgtz === 0){
                console.log(jump);
                switch (instructionRead) {
                    case "LOAD":
                        var value0 = document.getElementById('value0');
                        value0.textContent = document.getElementById('value'+argumentRead).textContent;
                        break;
                    case "STORE":
                        var valueX = document.getElementById('value'+argumentRead);
                        valueX.textContent = document.getElementById('value0').textContent;
                        break;
                    case "ADD":
                        var value0 = document.getElementById('value0');
                        var valueX = document.getElementById('value'+argumentRead);
                        valueADD = parseInt(value0.textContent) + parseInt(valueX.textContent);
                        value0.textContent = valueADD;
                        console.log(valueADD);
                        value0.innerHTML;
                        break;
                    case "SUB":
                        var value0 = document.getElementById('value0');
                        var valueX = document.getElementById('value'+argumentRead);
                        valueADD = parseInt(value0.textContent) - parseInt(valueX.textContent);
                        value0.textContent = valueADD;
                        console.log(valueADD);
                        value0.innerHTML;
                        break;
                    case "MULT":
                        var value0 = document.getElementById('value0');
                        var valueX = document.getElementById('value'+argumentRead);
                        valueADD = parseInt(value0.textContent) * parseInt(valueX.textContent);
                        value0.textContent = valueADD;
                        console.log(valueADD);
                        value0.innerHTML;
                        break;
                    case "DIV":
                        var value0 = document.getElementById('value0');
                        var valueX = document.getElementById('value'+argumentRead);
                        valueADD = Math.floor(parseInt(value0.textContent) / parseInt(valueX.textContent));
                        value0.textContent = valueADD;
                        console.log(valueADD);
                        value0.innerHTML;
                        break;
                    case "READ":
                        memoryValue.textContent = document.getElementById('input'+currentNum).value;
                        break;
                    case "WRITE":
                        var valueX = document.getElementById('value'+argumentRead).textContent;
                        var outputX = document.getElementById('output'+output);
                        outputX.value = valueX;
                        output++;
                        console.log(output);
                        break;
                    case "JUMP":
                        jumpX = document.getElementById('label'+currentNum).textContent;
                        console.log(jumpX);
                        jump = 1;
                        break;
                    case "JGTZ":
                        jgtzX = document.getElementById('label'+currentNum).textContent;
                        console.log(jumpX);
                        jgtz = 1;
                        break;
                    case "JZERO":
                        
                        break;
                    case "HALT":
                        currentNum = instructionsAmount;
                        break;
                    default:
                        break;
                }
            }
            else{
                while(currentNumJgtz <= instructionsAmount){
                    var jgtzToCheck = document.getElementById('label'+currentNumJump).textContent;
                    console.log(jgtzToCheck);
                }
            }
        }
        else{
            while(currentNumJump <= instructionsAmount){
                var jumpToCheck = document.getElementById('label'+currentNumJump).textContent;
                if(jumpToCheck === jumpX){
                    jump = 0;
                    console.log("jump = 0");
                    currentNum = currentNumJump;
                    currentNum = currentNum-1;
                    console.log("currentNumber my ass:"+currentNum);
                    currentNumJump = instructionsAmount;
                }
                currentNumJump++;
            }
            currentNumJump = 1;
        }
        currentNum++;
        currentNumUpperIndex++;
    }
}
