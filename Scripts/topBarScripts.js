const SAVE_BUTTON = document.getElementById("saveButton");
const USE_FILE = document.getElementById("useFile");
const START_BUTTON = document.getElementById("startButton");
const STOP_BUTTON = document.getElementById("stopButton");
const PAUSE_BUTTON = document.getElementById("pauseButton");

START_BUTTON.addEventListener("click", function getInstructions(){
    for (i = 1; i <= instructionsAmount; i++){
        let rowLable = document.getElementById(`label${i}`).innerText;    
        let OptionsInstruction = document.getElementById(`instruction${i}`);
        let rowInstruction = OptionsInstruction.options[OptionsInstruction.selectedIndex].text;
        let rowArgument = document.getElementById(`argument${i}`).innerText;

        if (rowLable == "" || rowArgument == "" || rowInstruction == ""){
            //alert("Fields: Lable, Instruciton and Argument cannot be empty!");
            break;
        } 
        else {
            const Code = new Instruction(i, rowLable, rowInstruction, rowArgument);
            instructionArray[i] = Code;
        }
    }
});

function download() {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent("text"));
    element.setAttribute('download', "test");
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
}

function getFile() {
  const input = document.getElementById('fileUpload');
  let file = input.files[0];
  let fr = new FileReader();
  fr.readAsText(file);
  fr.onload = () => {
    alert(fr.result);
  }
  fr.onerror = () => {
    alert(fr.error);
  }
}
