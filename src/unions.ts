

{

     // Unions 

    let phoneNr: string | number

    function callNumber(phoneNr: string | number): void {

            if(typeof phoneNr === "string") {
                console.log(phoneNr.toUpperCase)
                return
            }
            console.log(phoneNr)

    }

    callNumber(123123123)


    type User = {
        role: "Admin"  | "Superuser" | "User"
    }

    let user: User;
    user.role = "Guest"

}