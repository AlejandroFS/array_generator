import {
    Matriz
} from './matriz.js';

let arrayLength, secondColumn, validInput;
let myMatriz;
let oneDimensionTable;

document.addEventListener("DOMContentLoaded", function (event) {

    console.log("DOM fully loaded and parsed");

    document.getElementById("myBtn").addEventListener("click", () => {
        initializeElements();
        if (!validInput) {
            prompt("Add a numeric value");
        } else {
            myMatriz = new Matriz(arrayLength, 100, -100);
            insertOneDimensionTable();
        }
    });

});


function writteArrayFormatOnHtml(values, language = "Javascript", variableName = "myArray") {

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
function initializeElements() {
    secondColumn = document.getElementById("secondColumn");
    arrayLength = document.getElementById("inputNumericField").value;
    validInput = checkValue(arrayLength);
}

function checkValue(value) {
    return Number.isInteger(parseInt(value)) && value > 0;
}

function insertOneDimensionTable() {
    oneDimensionTable = myMatriz.getOneDimensionalHtmlTable();
    secondColumn.innerHTML = "";
    secondColumn.appendChild(oneDimensionTable);
    writteArrayFormatOnHtml(myMatriz.getArrayOneDimension());
}
function insertTwoDimensionsTable() {
    //To create later
}