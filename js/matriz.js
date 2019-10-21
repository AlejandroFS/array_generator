
export class Matriz {
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

    getArrayOneDimension() {
        return this.matriz;
    }
    printt(){
        console.log("LLLL");
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
    getTwoDimensionalHtmlTable() {}
}

