const SAVE_BUTTON = document.getElementById("saveButton");
const USE_FILE = document.getElementById("useFile");

function save() {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent("Test"));
    element.setAttribute('download', 'RAMsave');

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

function useFile() {
    var file = document.querySelector(".file_upload").files[0];
    if (file) {
        var reader = new FileReader();
        reader.readAsText(file, "UTF-8");
        reader.onload = function (evt) {
           alert(evt.target.result);
        }
        reader.onerror = function (evt) {
            alert("error reading file");
    }
}
}
function useContents(contents) {
    alert(contents)
}

function start() {

}