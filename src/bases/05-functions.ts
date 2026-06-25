
interface User{
    uuid: string;
    username: string;
}

function greet(name: string): string{
    return `Hola ${name}`
}

const greet2 = (name:string):string => {
    return `Hola ${name}`
}

// simplificada
const greet3 = (name: string): string => `Hola ${name}`;

function getUser(): User{
    return {
        uuid: 'ABC',
        username: 'JAriza'
    }
}

const user = (): User => {
    return {
        uuid: 'ABC',
        username: 'JAriza'
    }
}

const user3 = () => ({
    uuid: 'ABC',
    username: 'JAriza'
})

// simplificada


const message = greet('Goku');
console.log(message);
console.log(greet2('Gohan'));

console.log(getUser());
console.log(user());

// Callbacks
const myNumbers: number[] = [1, 2, 3, 4, 5];
// myNumbers.forEach(function(value){
//     console.log({value});
// })
// myNumbers.forEach( (value) => {console.log({value});} )

myNumbers.forEach(console.log)

