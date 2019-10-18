let button;
document.addEventListener("DOMContentLoaded", function (event) {

    console.log("DOM fully loaded and parsed");
    button = document.getElementById("myBtn");
    console.log(button.attributes);
    
    console.log(Object.getOwnPropertyNames(new human("Jorge")));
    console.log(Object.getOwnPropertyNames(button.attributes));
    //Array(4) [ "name", "favoriteAnimes", "school", "age
    //Array(6) [ "0", "1", "2", "id", "type", "class" ]
    for (const key in button.attributes) {
       console.log(key);
    }
});


//for of prints the values.
//forin prints the keys on an object

class human {
    constructor(name) {
        this.name = name;
        this.favoriteAnimes = ["hxh", "naruto"];
        this.school = "Tec uruapan";
        this.age = 25;
    }
    setName(name) {
        this.name = name;
    }
}
