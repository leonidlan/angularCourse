function clicked()
{
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let password = document.getElementById("password").value;
    let gender = document.querySelector('input[name="gender"]:checked').value;
    let e = document.getElementById("carCompany");
    let carCompany = e.options[e.selectedIndex].text;
    let hasBike = document.getElementById("hasBike").checked;

    let p = new Person(name, age, password, gender, carCompany, hasBike);
    p.toString();
}

function Person(name, age, password, gender, carCompany , hasBike)
{
    this.name = name
    this.age = age
    this.password = password
    this.gender = gender
    this.carCompany = carCompany
    this.hasBike = hasBike
    
    this.toString = function(){
        console.log(this)
    }
}


/*
class Person{
    constructor(name, age, password, gender, carCompany , hasBike){
        this.name = name
        this.age = age
        this.password = password
        this.gender = gender
        this.carCompany = carCompany
        this.hasBike = hasBike  
        this.toString = function(){
            console.log(this)
        }
    }
}
*/