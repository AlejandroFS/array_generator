
export class Matriz {
    constructor(elementOfArray, positiveLimit, negativeLimit) {
        this.__elementOfArray = parseInt(elementOfArray);
        this.__positiveLimit = positiveLimit;
        this.__negativeLimit = negativeLimit;
        this.matriz = [];
        this.fillOneDimensionArray();
    }

    fillOneDimensionArray() {

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

    getArrayOneDimension() {
        return this.matriz;
    }

    getOneDimensionalHtmlTable() {
        let count = 0;
        let table = document.createElement("table");
        let tableBody = document.createElement("tbody");
        table.id = "tableOnDimension";
        let tr = document.createElement("tr");
        for (const value of this.matriz) {
            tr.appendChild
            let td = document.createElement("td");
            let textNode = document.createTextNode(value);

            let span = document.createElement("span");
            let spanTextNode = document.createTextNode(count);


            td.appendChild(textNode);
            span.appendChild(spanTextNode);
            td.appendChild(span);
            tr.appendChild(td);
            count++;
        }
        table.appendChild(tableBody);
        tableBody.appendChild(tr);
        return table;
    }
    getTwoDimensionalsHtmlTable() { }
}

