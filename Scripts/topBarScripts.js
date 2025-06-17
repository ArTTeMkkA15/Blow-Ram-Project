function download() {
    var element = document.createElement('a');

    let inputSave = "";
    let inputs = document.querySelectorAll(".input");
    for(let i = 0; i < inputs.length; i++) {
      let value = inputs[i].value; 
      inputSave += value + ";";
    }


    let programSave = "";
    let rows = document.querySelectorAll(".row");
    for(let i = 0; i<rows.length; i++) {
      let label = rows[i].querySelector("#label" + (i+1)).innerText;
      let instr = rows[i].querySelector("#instruction" + (i+1)).selectedIndex;
      let arg = rows[i].querySelector("#argument" + (i+1)).innerText;
      let comm = rows[i].querySelector("#comment" + (i+1)).innerText;
      programSave += label + ";" + instr + ";" + arg + ";" + comm + "\n";
    }
    console.log(inputSave + "\n" + programSave);
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(inputSave + "\n" + programSave));
    element.setAttribute('download', "test");
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
}
