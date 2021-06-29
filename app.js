const INIT = function() {
    function removeElementsByClass(className) {
        const elements = document.getElementsByClassName(className);
        while (elements.length > 0) {
            elements[0].parentNode.removeChild(elements[0]);
        };
    };

    // Reset the grid if .container contains any .pixel elements
    removeElementsByClass("pixel");

    // Create and append pixel divs
    function appendDiv(percentage) {    
        function createDiv() {
            const CONT = document.getElementById("container");
            const DIV = document.createElement("div");

            // Set div attributes"
            DIV.setAttribute("class", "pixel");
            DIV.setAttribute("style", ("width: " + (100/percentage) + "%; height: " + (100/percentage) + "%;"));
            DIV.style.backgroundColor = "rgba(0,0,0,0)";
            DIV.setAttribute("onmouseover", "mEnter(this);");

            // Append "pixel" div to container
            CONT.appendChild(DIV);
        };

        let i = 0;
        while (i < percentage*percentage) {
            createDiv();
            i++;
        };
    };
    let gridSize = document.getElementById("grid-size").value;
    appendDiv(gridSize);  
};


let colorSelect = function(r,g,b,a) {
    return `rgba(${r},${g},${b},${a}`;
}

let randomColorValue = function() {
    return Math.floor(Math.random() * 256);
}

const mEnter = function(obj) {
    let colorSelection = document.getElementById("color-select").value;
    let eraser = document.getElementById("eraser").checked;
    console.log(eraser);

    if (!eraser) {
        if (colorSelection == "black") {
            obj.style.backgroundColor = colorSelect(0, 0, 0, 1);
        } else 
        if (colorSelection == "rainbow") {
            obj.style.backgroundColor = colorSelect(randomColorValue(), randomColorValue(), randomColorValue(), 1);
        } else
        {
            aValue = parseFloat(obj.style.backgroundColor.split("(")[1].split(")")[0].split(",")[3]);
            obj.style.backgroundColor = colorSelect(0, 0, 0, (aValue + 0.1));
        };
    }
    else {
        obj.style.backgroundColor = colorSelect(255, 255, 255, 1);
    };
};

Window.onload = INIT();