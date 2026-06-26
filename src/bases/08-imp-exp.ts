import { heroes, type Hero, Owner} from "../data/heroes.data"



const getHeroById = (id: number): Hero|undefined => {

    const hero = heroes.find( (hero) => {
        return hero.id === id;
    });

    // if (!hero) {
    //     throw new Error(`No existe un héroe con el id ${id}`)
    // }

    return hero;
}

// console.log(getHeroById(8));
// const myArray: number[] = [1,2,3,4,5,6];
// Exp por defecto, podría renombrar fácil en archivo original donde vive el obj | var
// export default heroes;

export const getHeroesByOwner = (owner: Owner): Hero[] => {

    const heroesByOwner = heroes.filter(
        hero => hero.owner === owner
    )

    return heroesByOwner;
}
