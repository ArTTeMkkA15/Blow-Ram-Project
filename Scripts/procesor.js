class Instruction {
    constructor(line, label, instruction, argument) {
        this.line = line;
        this.label = label;
        this.instruction = instruction;
        this.argument = argument;
    }
}

const START_BUTTON = document.getElementById("startButton");
let instructionArray = [];
let currentInputCell = 1;
let acumulatorValue = null;
let currentNum = 1;
let currentNumUpperIndex = 0;
let output = 1;


function getValue(argument) {
    if (argument.startsWith("=")) {
        return parseInt(argument.slice(1));
    } 
    else if (!isNaN(argument)) {
        let memoryCell = document.getElementById('value' + argument);
        if (memoryCell) {
            return parseInt(memoryCell.textContent);
        } else {
            return 0;
        }
    } 
    else {
        return 0;
    }
}

function setValue(argument, value) {
    if (!isNaN(argument)) {
        let memoryCell = document.getElementById('value' + argument);
        if (memoryCell) {
            memoryCell.textContent = value;
        }
    }
}

function JUMP(instructionArray, startIndex, targetLabel) {
    for (let i = startIndex; i < instructionArray.length; i++) {
        console.log(instructionArray[i].label);
        if (instructionArray[i].label == targetLabel) {
            return i;
        }
    }
    return -1;
}

START_BUTTON.addEventListener("click", function getInstructions(){
    for (i = 1; i <= instructionsAmount; i++){
        let rowLable = document.getElementById(`label${i}`).innerText;    
        let OptionsInstruction = document.getElementById(`instruction${i}`);
        let rowInstruction = OptionsInstruction.options[OptionsInstruction.selectedIndex].text;
        let rowArgument = document.getElementById(`argument${i}`).innerText;
        const Code = new Instruction(i, rowLable, rowInstruction, rowArgument);
        instructionArray[i] = Code;
    }

    console.log(instructionArray);

    while (currentNum <= instructionsAmount) {
        let isJump = false;
        let currInstruction = instructionArray[currentNum].instruction;
        let currArgument = instructionArray[currentNum].argument;

        let instructionInsert = document.getElementById('instruction');
        let argumentInsert = document.getElementById('argument');

        if (instructionInsert) instructionInsert.value = currInstruction;
        if (argumentInsert) argumentInsert.value = currArgument;

        if(currInstruction == "JUMP" || currInstruction == "JGTZ" || currInstruction == "JZERO"){
            console.log("FOUND JUMP TYPE COMAND");

            if (currInstruction == "JUMP" && currArgument != ""){
                console.log("FOUND SIMPLE JUMP COMAND");
                let index = JUMP(instructionArray, currentNum, currArgument);
                if (index !== -1) {
                    console.log("JUMP COMAND COMPLEAT SUCCSSESFULLY");
                    currentNum = index;
                    isJump = true;
                }
            }

            if (currInstruction == "JGTZ" && currArgument != ""){
                console.log("FOUND JGTZ COMAND");
                if (acumulatorValue > 0){
                    let index = JUMP(instructionArray, currentNum, currArgument);
                    if (index !== -1) {
                        console.log("JGTZ COMAND COMPLEAT SUCCSSESFULLY");
                        currentNum = index;
                        isJump = true;
                    }
                }
                else {
                    console.log("Acomulator value is not greater than 0, its value is: " + acumulatorValue);
                }
            }

            if (currInstruction == "JZERO" && currArgument != ""){
                console.log("FOUND JZERO COMAND");
                if (acumulatorValue == 0){
                    let index = JUMP(instructionArray, currentNum, currArgument);
                    if (index !== -1) {
                        console.log("JZERO COMAND COMPLEAT SUCCSSESFULLY");
                        currentNum = index;
                        isJump = true;
                    }
                }
                else {
                    console.log("Acomulator value is not equal 0, its value is: " + acumulatorValue);
                }
            }

        }

        if (!isJump){
            switch (currInstruction) {
                case "LOAD":
                    setValue("0", getValue(currArgument));
                    acumulatorValue = getValue(currArgument);
                    break;
                case "STORE":
                    setValue(currArgument, getValue("0"));
                    break;
                case "ADD":
                    setValue("0", getValue("0") + getValue(currArgument));
                    acumulatorValue = getValue("0");
                    break;
                case "SUB":
                    setValue("0", getValue("0") - getValue(currArgument));
                    acumulatorValue = getValue("0");
                    break;
                case "MULT":
                    setValue("0", getValue("0") * getValue(currArgument));
                    acumulatorValue = getValue("0");
                    break;
                case "DIV":
                    setValue("0", Math.floor(getValue("0") / getValue(currArgument)));
                    acumulatorValue = getValue("0");
                    break;
                case "READ":
                    let inputValue = document.getElementById('input' + currentInputCell);
                    if (inputValue) setValue(currArgument, inputValue.value);
                    currentInputCell++;
                    break;
                case "WRITE":
                    let outputValue = getValue(currArgument);
                    let outputX = document.getElementById('output' + output);
                    if (outputX) outputX.value = outputValue;
                    output++;
                    break;
                case "HALT":
                    currentNum = instructionsAmount + 1;
                    break;
            }
            currentNum++;
            currentNumUpperIndex++;
        }
        else {
            continue;
        }
    } 
});