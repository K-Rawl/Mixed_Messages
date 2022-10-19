function generateRandNum(arr) {
    return Math.floor(Math.random() * arr.length);
}

const madeUpAnimalFacts = {
    animal: ['Monkeys', 'Dogs', 'Elephants', 'Fish', 'Birds', 'Turtles'],
    habitats: ['jungles', 'deserts', 'grassy plains', 'caves', 'rivers', 'houses'],
    food: ['bananas', 'meat', 'grass', 'algae', 'berries', 'insects']
};

let newAnimalFact = ['Animal Fact: '];

for (key in madeUpAnimalFacts) {
    
    let arrIndex = generateRandNum(madeUpAnimalFacts[key]);

    if(key === 'animal') {
        newAnimalFact.push(`${madeUpAnimalFacts[key][arrIndex]} live in `);
    } else if (key === 'habitats') {
        newAnimalFact.push(`${madeUpAnimalFacts[key][arrIndex]} and eat `);
    } else if (key === 'food') {
        newAnimalFact.push(`${madeUpAnimalFacts[key][arrIndex]}.`);
    }
}

function arrToString(arrName) 
{
    const strAnimalFact = arrName.join('');
    return strAnimalFact;
}
  
console.log(arrToString(newAnimalFact));

function arrToString(arrName) 
{
    const strAnimalFact = arrName.join('')
    return strAnimalFact;
}
  
arrToString(newAnimalFact);


