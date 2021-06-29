const init = function() {
    function removeElementsByClass(className) {
        const elements = document.getElementsByClassName(className);
        while (elements.length > 0) {
            elements[0].parentNode.removeChild(elements[0]);
        };
    };

    // Reset the grid if .container contains any .pixel elements
    removeElementsByClass("pixel");

    function appendDiv(percentage) {    
        function createDiv() {
            // Get container by ID
            const cont = document.getElementById("container");

            // Create new div
            const div = document.createElement("div");

            // Set div class to "pixel"
            div.setAttribute("class", "pixel");
            div.setAttribute("style", ("width: " + (100/percentage) + "%; height: " + (100/percentage) + "%;"));
            div.style.backgroundColor = "rgba(0,0,0,0)";
            div.setAttribute("onmouseover", "mEnter(this);");

            // Append "pixel" div to container
            cont.appendChild(div);
        };

        // Append children to container
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
        // if (colorSelection == "shade") 
        {
            aValue = parseFloat(obj.style.backgroundColor.split("(")[1].split(")")[0].split(",")[3]);
            obj.style.backgroundColor = colorSelect(0, 0, 0, (aValue + 0.1));
        };
    }
    else {
        obj.style.backgroundColor = colorSelect(255, 255, 255, 1);
    };
};

Window.onload = init();