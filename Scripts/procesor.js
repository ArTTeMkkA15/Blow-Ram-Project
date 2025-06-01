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
let acumulatorValue = 0;
let currentNum = 1;
let currentNumUpperIndex = 0;
let output = 1;
let stopProgram = false;

async function getInstructions(){
    let inputHeaders = document.getElementsByClassName("headerI");
    let outputHeaders = document.getElementsByClassName("headerO");
    for(let i = 0; i < inputHeaders.length; i++) {
        inputHeaders[i].classList.remove("glowica");
    }
    inputHeaders[0].classList.add("glowica");
    for(let i = 0; i < outputHeaders.length; i++) {
        outputHeaders[i].classList.remove("glowica");
    }
    outputHeaders[0].classList.add("glowica");

    for (i = 1; i <= instructionsAmount; i++){
        let rowLable = document.getElementById(`label${i}`).innerText;    
        let OptionsInstruction = document.getElementById(`instruction${i}`);
        let rowInstruction = OptionsInstruction.options[OptionsInstruction.selectedIndex].text;
        let rowArgument = document.getElementById(`argument${i}`).innerText;
        const Code = new Instruction(i, rowLable, rowInstruction, rowArgument);
        instructionArray[i] = Code;
    }

    console.log(instructionArray);
    currentInputCell = 1;
    acumulatorValue = 0;
    currentNum = 1;
    output = 1;
    stopProgram = false;
    while (currentNum <= instructionsAmount) {

        if (stopProgram) {
            break;
        }

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
                let index = JUMP(instructionArray, currArgument);
                if (index !== -1) {
                    console.log("JUMP COMAND COMPLEAT SUCCSSESFULLY");
                    currentNum = index;
                    isJump = true;
                }
            }

            if (currInstruction == "JGTZ" && currArgument != ""){
                console.log("FOUND JGTZ COMAND");
                if (acumulatorValue > 0){
                    let index = JUMP(instructionArray, currArgument);
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
                    let index = JUMP(instructionArray, currArgument);
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
                    writeRaport(currentNum, currInstruction, currArgument, acumulatorValue);
                    await sleep(1000);
                    break;
                case "STORE":
                    setValue(currArgument, getValue("0"));
                    writeRaport(currentNum, currInstruction, currArgument, acumulatorValue);
                    await sleep(1000);
                    break;
                case "ADD":
                    setValue("0", getValue("0") + getValue(currArgument));
                    acumulatorValue = getValue("0");
                    writeRaport(currentNum, currInstruction, currArgument, acumulatorValue);
                    await sleep(1000);
                    break;
                case "SUB":
                    setValue("0", getValue("0") - getValue(currArgument));
                    acumulatorValue = getValue("0");
                    writeRaport(currentNum, currInstruction, currArgument, acumulatorValue);
                    await sleep(1000);
                    break;
                case "MULT":
                    setValue("0", getValue("0") * getValue(currArgument));
                    acumulatorValue = getValue("0");
                    writeRaport(currentNum, currInstruction, currArgument, acumulatorValue);
                    await sleep(1000);
                    break;
                case "DIV":
                    setValue("0", Math.floor(getValue("0") / getValue(currArgument)));
                    acumulatorValue = getValue("0");
                    writeRaport(currentNum, currInstruction, currArgument, acumulatorValue);
                    await sleep(1000);
                    break;
                case "READ":
                    let inputValue = document.getElementById('input' + currentInputCell);
                    if (inputValue) setValue(currArgument, inputValue.value);
                    inputHeaders[currentInputCell-1].classList.remove("glowica");
                    inputHeaders[currentInputCell].classList.add("glowica");
                    currentInputCell++;
                    writeRaport(currentNum, currInstruction, currArgument, acumulatorValue);
                    await sleep(1000);
                    break;
                case "WRITE":
                    let outputValue = getValue(currArgument);
                    let outputX = document.getElementById('output' + output);
                    if (outputX) outputX.value = outputValue;
                    outputHeaders[output-1].classList.remove("glowica");
                    outputHeaders[output].classList.add("glowica");
                    output++;
                    writeRaport(currentNum, currInstruction, currArgument, acumulatorValue);
                    await sleep(1000);
                    break;
                case "HALT":
                    currentNum = instructionsAmount + 1;
                    writeRaport(currentNum, currInstruction, currArgument, acumulatorValue);
                    await sleep(1000);
                    break;
            }
            currentNum++;
            currentNumUpperIndex++;
        }
        else {
            continue;
        }
    } 
}

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

function JUMP(instructionArray, targetLabel) {
    for (let i = 1; i < instructionArray.length; i++) {
        console.log(instructionArray[i].label);
        if (instructionArray[i].label == targetLabel) {
            return i;
        }
    }
    return -1;
}

function writeRaport(line, currInstruction, currArgument, acumulatorValue){
    console.log("Line: " + line + "\nInstrucktion: " + currInstruction + "\nArgument: " + currArgument + "\nAcumulator value: " + acumulatorValue);
}

document.querySelector('#pauseButton').addEventListener('click', function() {
    const resumeProgram = document.getElementById("resumeButton"); // Przycisk do wznowienia programu
    resumeProgram.style.display = "block";
    document.querySelector('#pauseButton').style.display = "none";
    stopProgram = true;
});

document.querySelector('#resumeButton').addEventListener('click', function() {
    document.querySelector('#pauseButton').style.display = "block";
    const resumeProgram = document.getElementById("resumeButton"); // Przycisk do wznowienia programu
    resumeProgram.style.display = "none";
    stopProgram = false;
    getInstructions(); // Wznów program od currentNum
});

const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

START_BUTTON.addEventListener("click", getInstructions);
