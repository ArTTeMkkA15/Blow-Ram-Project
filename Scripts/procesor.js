const START_BUTTON = document.getElementById("startButton");
const STOP_BUTTON = document.getElementById("stopButton");
const PAUSE_BUTTON = document.getElementById("pauseButton");

class Instruction {
    constructor(line, label, instruction, argument, comment){
        this.line = line;
        this.label = label;
        this.instruction = instruction;
        this.argument = argument;
    }
}

let instructionArray = [];

START_BUTTON.addEventListener("click", function getInstructions(){
    for (i = 1; i <= instructionsAmount; i++){
        let rowLable = document.getElementById(`label${i}`).innerText;    
        let OptionsInstruction = document.getElementById(`instruction${i}`);
        let rowInstruction = OptionsInstruction.options[OptionsInstruction.selectedIndex].text;
        let rowArgument = document.getElementById(`argument${i}`).innerText;

        if (rowLable == "" || rowArgument == "" || rowInstruction == ""){
            alert("Fields: Lable, Instruciton and Argument cannot be empty!");
            break;
        } 
        else {
            const Code = new Instruction(i, rowLable, rowInstruction, rowArgument);
            instructionArray[i] = Code;
        }
    }
});