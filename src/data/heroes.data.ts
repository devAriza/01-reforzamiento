// Definir un posible de valores. Tipos permitidos
type Owner = 'DC' | 'Marvel';
// enum Owner {
//     DC = 'DC', // 0
//     Marvel = 'Marvel' // 1
// }

interface Hero {
    id: number;
    name: string;
    owner: Owner;
}


const heroes: Hero[] = [
  {
    id: 1,
    name: 'Batman',
    owner: 'DC',
  },
  {
    id: 2,
    name: 'Spiderman',
    owner: 'Marvel',
  },
  {
    id: 3,
    name: 'Superman',
    owner: 'DC',
  },
  {
    id: 4,
    name: 'Flash',
    owner: 'DC',
  },
  {
    id: 5,
    name: 'Wolverine',
    owner: 'DC',
  },
  {
    id: 6,
    name: 'Green Lantern',
    owner: 'Marvel'
  },
//   {
//     id: 7,
//     name: 'Wonder Woman',
//     owner: Owner.DC | 'DC' 
//   }
];