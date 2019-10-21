import {
    Matriz
} from './matriz.js';


document.addEventListener("DOMContentLoaded", function (event) {

    console.log("DOM fully loaded and parsed");
    document.getElementById("myBtn").addEventListener("click", () => {
        let secondColumn = document.getElementById("secondColumn");
        let valueOfInput = document.getElementById("inputNumericField").value;
        let result = checkValue(valueOfInput);
        if (!result) {
            prompt("Add a numeric value");
        } else {
            let myMatriz = new Matriz(valueOfInput, 100, -100);
            myMatriz.fillArray();
            let oneDimensionTable = myMatriz.getOneDimensionalHtmlTable();
            secondColumn.removeChild(secondColumn.childNodes[0]);
            secondColumn.appendChild(oneDimensionTable);
            writteArrayFormatonHtml(myMatriz.getArrayOneDimension());
        }
    });

});

function checkValue(value) {
    return Number.isInteger(parseInt(value)) && value > 0;
}

function writteArrayFormatonHtml(values, language = "Javascript", variableName = "myArray") {

    let jsValue = `${language}:  let ${variableName} = [`;
    for (const index in values) {
        if (index == values.length - 1) {
            jsValue += values[index] + "];";
        } else {

            jsValue += values[index] + ", ";
        }
    }
    var para = document.createElement("li");
    var node = document.createTextNode(jsValue);
    para.appendChild(node);
    let ulList = document.getElementById("langagueCode");
    if (ulList.childNodes.length > 0) {
        ulList.removeChild(ulList.childNodes[0]);
        ulList.appendChild(para);
    } else {
        ulList.appendChild(para);
    }
}