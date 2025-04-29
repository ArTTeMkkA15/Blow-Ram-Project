const SAVE_BUTTON = document.getElementById("saveButton");
const USE_FILE = document.getElementById("useFile");

function download() {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent("text"));
    element.setAttribute('download', "test");
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
}

const fileInput = document.getElementById('fileUpload');
fileInput.onchange = () => {
  const selectedFile = fileInput.files[0];
  console.log(selectedFile);
}

function useContents(contents) {
    alert(contents)
}

function start() {

}