const person = {
    name: 'Tony',
    age: 45,
    key: 'Ironman'
}

// const name = person.name;
// const age = person.age;
// const key = person.key;

const { name: nameIron, age, key } = person;
console.log(nameIron, age, key);

interface Hero{
    name: string;
    age: number;
    key: string;
    rank: string | undefined;
}

const useContext = ( {key, name, age, rank}: Hero ) => {
    return {
        keyName: key,
        user:{
            name: name,
            age: age,
        },
        rank: rank
    }
}

const {rank, user: {name}} = useContext(person);
console.log({rank, name});

const {user} = useContext(person);
const {name: nameDestructur} = user;
console.log(nameDestructur);