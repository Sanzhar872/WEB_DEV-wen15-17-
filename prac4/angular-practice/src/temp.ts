let number: number = 0;

let string: string = "Hello, Angular!";

let boolean: boolean = true;    

let array: number[] = [1, 2, 3, 4, 5];

let tags: string[] = ["Angular", "TypeScript", "JavaScript"];

let person: { name: string; age: number } = {
    name: "John Doe",
    age: 30
};

// interface

export interface User {
    id: number;
    name: string;
    createdAt: Date;
}

const user: User = {
    id: 1,
    name: "Alis",
    createdAt: new Date()
};


// Classes

export class Movie{
    constructor(public title: string, public director: string, public releaseYear: number) {}

    getMovieInfo(): string {
        return `${this.title} directed by ${this.director}, released in ${this.releaseYear}`;
    }
}

const movie = new Movie("Inception", "Christopher Nolan", 2010);