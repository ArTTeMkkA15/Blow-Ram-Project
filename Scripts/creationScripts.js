let instructionsAmount = 1;
const HEADERS = ["LN", "Label", "Instruction", "Argument", "Comment"];
const INSTRUCTIONS = [" ", "LOAD", "STORE", "ADD", "SUB", "MULT", "DIV", "READ", "WRITE", "JUMP", "JGTZ", "JZERO", "HALT"];

function createOutputCells() {
    let cells = document.querySelector("#outputCells");
    for(let i = 1; i <= 99; i++) {
        let cell = document.createElement("div");
        cell.className = "cellO";
        cell.id = "o"+i;

        let input = document.createElement("input");
        let inputCell = document.createElement("div");
        input.className = "output";
        inputCell.className = "inputCell";

        let header = document.createElement("h3");
        let headerCell = document.createElement("div");
        header.className = "header";
        headerCell.className = "headerCell";
        input.type = "number";
        input.id = 'output'+i;
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
    let cells = document.querySelector("#inputCells");
    for(let i = 1; i <= 99; i++) {
        let cell = document.createElement("div");
        cell.className = "cellI";
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
    row.className = "row";
        
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
    commentCell.id = `comment${instructionsAmount}`;
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
        row.className = "row";
        
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
        commentCell.id = `comment${instructionsAmount}`;
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


function getFile() {
  let infoArr = [];
  const input = document.getElementById('fileUpload');
  let file = input.files[0];
  let fr = new FileReader();
  fr.readAsText(file);
  fr.onload = () => {
    let rows = document.querySelectorAll(".row");
    let rowsL = rows.length;
    let lines = fr.result.split("\n");
    lines.splice(-1);
    lines.forEach(line => {
      let info = line.split(";");
      infoArr.push(info);
    });
    for(let i = 0; i<infoArr.length; i++) {
      if(i == 0) {
        let inputs = document.querySelectorAll(".input");
        for(let j = 1; j < inputs.length-1; j++) {
          document.getElementById("input" + (j)).value = infoArr[0][j-1];
        }
      }else if (i <= rowsL) {
        rows[i-1].querySelector("#label" + (i)).innerText = infoArr[i][0];
        rows[i-1].querySelector("#instruction" + (i)).selectedIndex = infoArr[i][1];
        rows[i-1].querySelector("#argument" + (i)).innerText = infoArr[i][2];
        rows[i-1].querySelector("#comment" + (i)).innerText = infoArr[i][3];
      } else if (i > rowsL) {
        let tbody = document.querySelector(".codeTable").getElementsByTagName("tbody")[0];
        instructionsAmount++;
        console.log(instructionsAmount);
        let row = document.createElement("tr");
        row.className = "row";
        
        let lnCell = document.createElement("td");
        lnCell.innerText = instructionsAmount; 
        row.appendChild(lnCell);
        
        let labelCell = document.createElement("td");
        labelCell.id = `label${instructionsAmount}`;
        labelCell.contentEditable = "true";
        labelCell.innerText = infoArr[i][0];
        row.appendChild(labelCell);
    
        let selectInst = document.createElement("select");
        selectInst.id = `instruction${instructionsAmount}`;
        INSTRUCTIONS.forEach(instruction => {
            let optionInst = document.createElement("option");
            optionInst.innerHTML = instruction;
            selectInst.appendChild(optionInst);
        });
        selectInst.selectedIndex = infoArr[i][1];
        row.appendChild(selectInst);
    
        let argumentCell = document.createElement("td");
        argumentCell.id = `argument${instructionsAmount}`;
        argumentCell.contentEditable = "true";
        argumentCell.innerText = infoArr[i][2];
        row.appendChild(argumentCell);
    
        let commentCell = document.createElement("td");
        commentCell.contentEditable = "true";
        commentCell.id = `comment${instructionsAmount}`;
        commentCell.innerText = infoArr[i][3];
        row.appendChild(commentCell);
        
        tbody.appendChild(row);
      }
    }
  }
  fr.onerror = () => {
    alert(fr.error);
  }
}