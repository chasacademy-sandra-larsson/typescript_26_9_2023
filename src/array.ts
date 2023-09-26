{

    const numbers: number[] = [1,2,3]

    // Anant sätt att skriva arrayer på - generics 
    const num: Array<number> = [4,5,6]

    const bools: boolean[] = [true, true]


    const addNumbers = (numbers : number[]): number => {
        return numbers.reduce((acc, current) => acc + current, 0)
    }

    type Book = {
        title: string, 
        author: string, 
        year: number
    }

    const book: Book[] = [
        {title: "The Lord of the Rings", author: "J.R.R Tolkien", year: 1954},
        {title: "The Lord of the Flies", author: "William Golding", year: 1954},
        { title: "The Lord of the Flies", author: "William Golding", year: 1954}
    ]

    const addBook = (books: Book[]): number => {
        return books.reduce((acc, current) => acc + current.year, 0)
    }

}