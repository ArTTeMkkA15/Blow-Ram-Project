class Instruction {
    constructor(line, label, instruction, argument) {
        this.line = line;
        this.label = label;
        this.instruction = instruction;
        this.argument = argument;
    }
}

let instructionArray = [];
let currentNum = 1;
let currentNumJump = 1;
let currentNumUpperIndex = 0;
let jump = 0;
let jgtz = 0;
let jumpX = "";
let jgtzX = "";
let output = 1;

let currentNumJgtz = 1;

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

function startButton() {
    while (currentNum <= instructionsAmount) {
        let instructionRead = document.getElementById('instruction' + currentNum).value;
        let argumentRead = document.getElementById('argument' + currentNum).textContent.trim();
        let labelRead = document.getElementById('label' + currentNum).textContent.trim();

        let currentInstruction = new Instruction(currentNum, labelRead, instructionRead, argumentRead);
        instructionArray.push(currentInstruction);

        let instructionInsert = document.getElementById('instruction');
        let argumentInsert = document.getElementById('argument');

        if (instructionInsert) instructionInsert.value = instructionRead;
        if (argumentInsert) argumentInsert.value = argumentRead;

        if (jump === 0) {
            if (jgtz === 0) {
                switch (instructionRead) {
                    case "LOAD":
                        setValue("0", getValue(argumentRead));
                        break;
                    case "STORE":
                        setValue(argumentRead, getValue("0"));
                        break;
                    case "ADD":
                        setValue("0", getValue("0") + getValue(argumentRead));
                        break;
                    case "SUB":
                        setValue("0", getValue("0") - getValue(argumentRead));
                        break;
                    case "MULT":
                        setValue("0", getValue("0") * getValue(argumentRead));
                        break;
                    case "DIV":
                        setValue("0", Math.floor(getValue("0") / getValue(argumentRead)));
                        break;
                    case "READ":
                        let inputValue = document.getElementById('input' + currentNum);
                        if (inputValue) setValue(argumentRead, inputValue.value);
                        break;
                    case "WRITE":
                        let outputValue = getValue(argumentRead);
                        let outputX = document.getElementById('output' + output);
                        if (outputX) outputX.value = outputValue;
                        output++;
                        break;
                    case "JUMP":
                        jumpX = labelRead;
                        jump = 1;
                        break;
                    case "JGTZ":
                        jgtzX = labelRead;
                        jgtz = 1;
                        break;
                    case "HALT":
                        currentNum = instructionsAmount + 1;
                        break;
                }
            } else {
                while (currentNumJump <= instructionsAmount) {
                    let jgtzToCheck = document.getElementById('label' + currentNumJump).textContent.trim();
                    if (jgtzToCheck === jgtzX && getValue("0") > 0) {
                        jgtz = 0;
                        currentNum = currentNumJump - 1;
                        break;
                    }
                    currentNumJump++;
                }
                currentNumJump = 1;
            }
        } else {
            while (currentNumJump <= instructionsAmount) {
                let jumpToCheck = document.getElementById('label' + currentNumJump).textContent.trim();
                if (jumpToCheck === jumpX) {
                    jump = 0;
                    currentNum = currentNumJump - 1;
                    break;
                }
                currentNumJump++;
            }
            currentNumJump = 1;
        }

        currentNum++;
        currentNumUpperIndex++;
    }
}