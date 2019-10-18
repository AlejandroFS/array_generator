let button;
document.addEventListener("DOMContentLoaded", function (event) {

    console.log("DOM fully loaded and parsed");
    document.getElementById("myBtn").addEventListener("click", () => {
        let secondColumn = document.getElementById("secondColumn");
        let valueOfInput = document.getElementById("inputNumericField").value;
        let result = checkValue(valueOfInput);
        if (!result) { prompt("Add a numeric value"); }
        else {
            let myMatriz = new Matriz(valueOfInput, 100, -100);
            myMatriz.fillArray();
            let oneDimensionTable = myMatriz.getOneDimensionalHtmlTable();
            secondColumn.removeChild(secondColumn.childNodes[0]);
            secondColumn.appendChild(oneDimensionTable);

        }
    });

});

function checkValue(value) {
    return Number.isInteger(parseInt(value)) && value > 0;
}

class Matriz {
    constructor(elementOfArray, positiveLimit, negativeLimit) {
        this.__elementOfArray = parseInt(elementOfArray);
        this.__positiveLimit = positiveLimit;
        this.__negativeLimit = negativeLimit;
        this.matriz = [];
    }

    fillArray() {

        for (let index = 0; index < this.__elementOfArray; index++) {
            if (Math.random() > 0.5) {
                const randomNumber = Math.floor(Math.random() * this.__negativeLimit);
                this.matriz[index] = randomNumber;
            } else {
                const randomNumber = Math.floor(Math.random() * this.__positiveLimit);
                this.matriz[index] = randomNumber;
            }
        }

    }
    printArray() {
        console.log(this.matriz);
    }

    getArray() {
        return this.matriz;
    }
    getOneDimensionalHtmlTable() {
        let table = document.createElement("table");
        let tr = document.createElement("tr");
        for (const value of this.matriz) {
            tr.appendChild
            let td = document.createElement("td");
            let textNode = document.createTextNode(value);
            td.appendChild(textNode);
            tr.appendChild(td);
        }
        table.appendChild(tr);
        return table;
    }
    getTwoDimensionalHtmlTable() { }
}


