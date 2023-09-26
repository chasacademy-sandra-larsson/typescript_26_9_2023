"use strict";
{
    // Variabler 
    // Implicit typning
    // let name = "Torsten"
    //Explicit typning
    let name = "Torsten";
    name = 12323;
    // name = 1234
    // Typen any: "vanlig" JS
    let fun;
    fun = "Something that feels good";
    console.log(typeof fun, fun.toUpperCase()); //string
    fun = 12332243;
    console.log(typeof fun, fun.toPrecision(2)); //number?
    let writer = "August Stringberg";
    writer.toUpperCase;
    // Objekt 
    const person = {
        name: "Torsten",
        age: 45,
        isMarried: true
    };
    person.isCool = true;
    const myList = ["one", "two", 3];
}
