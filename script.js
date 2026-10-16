// textbox var

var textBox = document.getElementById("textBox");

// run button var 

var runBtn = document.getElementById("runBtn");

// output var

var outputBox = document.getElementById("outputBox");

// run buttt=on par click kare uska event 

runBtn.addEventListener('click', function(){
    // code var === value in text box
    var runCode = textBox.value;
    if (runCode.startsWith('bik')) {
        // output ka text contain value
        outputBox.innerHTML = runCode.substring(4);
    }
    else{
        // errror message var
        var errorSmg = "syntax error: invaid syntax";
        outputBox.innerHTML = errorSmg;
    }
})