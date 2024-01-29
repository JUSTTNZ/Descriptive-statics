//Using static methods and variables.
class Calculator {
    static PI = 3.14159265
    static diameter = 240

    static calculateRadius() {
        //using static property
        console.log(`The radius of diameter ${Calculator.diameter}m is: ${Calculator.diameter / 2}m`)
    }

    static computeArea() {
        //using static property
        let area = (Calculator.PI * (Calculator.diameter / 2) ** 2).toFixed(2)
        console.log(`The area of a circle of radius ${Calculator.diameter / 2}m is ${area} meter squared.`)
    }
}


//Accessing static properties

// To access static properties you use the class name plus a period and the property name.
console.log(`PI: `, Calculator.PI)
console.log(`Diameter: `, Calculator.diameter)
console.log()
//calling static methods.
Calculator.calculateRadius()
Calculator.computeArea()