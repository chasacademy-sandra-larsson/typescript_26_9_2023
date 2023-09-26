

{

//    let person: {
//         name: string,
//         age: number, 
//         isMarried: boolean
//     }

//     person = {name: "Torsten", age: 45, isMarried: false}

//     // Använda objekt inline

//     function printPerson( person: { name: string, age: number, isMarried: boolean}) {
//         console.log(`${person.name} is ${person.age} is married ${person.age}`)
//     }


    // Type aliasis

   type Person = {
        name: string,
        age: number, 
        isMarried: boolean
        height?: number
    }

    let person = {name: "Torsten", age: 45, isMarried: false, height: 170}

    // void - funktionen returnerar inget
    function printPerson(person: Person): void {

        if(typeof person.height !== "undefined") {
            console.log(`${person.name} is ${person.age} is married ${person.age} and has height ${person.height}`)
            return
        }
        console.log(`${person.name} is ${person.age} is married ${person.age}`)

    }


    printPerson(person)
}