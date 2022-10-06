function generateRandNum(arr) {
    return Math.floor(Math.random() * arr.length);
}

const madeUpAnimalFacts = {
    animal: ['Monkeys', 'Dogs', 'Elephants', 'Fish', 'Birds', 'Turtles'],
    habitats: ['jungles', 'deserts', 'grassy plains', 'caves', 'rivers', 'houses'],
    food: ['bananas', 'meat', 'grass', 'algae', 'berries', 'insects']
}

let newAnimalFact = [];

for (let i = 0; i < madeUpAnimalFacts.length; i++) {
    let arrIndex = generateRandNum(madeUpAnimalFacts[i]);
    console.log(i);

    if(i === animal) {
        newAnimalFact.push(`${madeUpAnimalFacts[i][arrIndex]} live in `);
        return newAnimalFact;
    } else if (i === habitats) {
        newAnimalFact.push(`${madeUpAnimalFacts[i][arrIndex]} and eat `);
    } else if (i === food) {
        newAnimalFact.push(`${madeUpAnimalFacts[i][arrIndex]}.`);
    }
}

function arrToString(arrName) 
{
    const strAnimalFact = arrName.join('')
    return strAnimalFact;
}
  
arrToString(newAnimalFact);


