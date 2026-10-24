// textbox var

var textBox = document.getElementById("textBox")! as HTMLTextAreaElement;

// fontsizr btn var 

var fontSizeBtn8 = document.getElementById("fontSizeBtn8")! as HTMLButtonElement;

// fontSizeBtn8 click event

fontSizeBtn8.addEventListener('click',function() {
    // 8px logic
    textBox.style.fontSize = "8px";
})

// while true; do tsc fontSize.ts --ignoreConfig; sleep 1; done