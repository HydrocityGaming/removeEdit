function removeEdit() {
    var s;
    s = document.URL;
    for (var x = 0; x < urlseg.length; x++) {
        if (s.indexOf(urlseg[x]) != -1) {
            if (debug.removeEdit) {
                console.log("This page does contain \"" + urlseg[x] + "\".");
            }
            var myElements = document.querySelectorAll("li.post_edit");
            for (var i = 0; i < myElements.length; i++) {
                myElements[i].style.display = "none";
            }
        } else {
            if (debug.removeEdit) {
                console.log("This page does not contain \"" + urlseg[x] + "\".");
            }
        }
    }
    return true;
}

function addEdit() {
    var s;
    s = document.URL;
    for (var x = 0; x < urlseg.length; x++) {
        if (s.indexOf(urlseg[x]) != -1) {

            var myElements = document.querySelectorAll("li.post_edit");

            for (var i = 0; i < myElements.length; i++) {
                myElements[i].style.display = "";
            }
            if (debug.removeEdit) {
                console.log("This page does contain \"" + urlseg[x] + ".");
            }
        } else {
            if (debug.removeEdit) {
                console.log("This page does not contain \"" + urlseg[x] + ".");
            }
        }
    }
    return true;
}

console.info("removeEdit Javascript Loaded.");
removeEdit();