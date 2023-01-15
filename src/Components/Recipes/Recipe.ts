import {Grinder, Kettle, Brewer} from '../Equipment/Equipment'

class Recipe {
    constructor(
        authorId: number,
        equipment: { myGrinder: Grinder; myKettle: Kettle; myBrewer: Brewer; },
        coffee: { roasterId: number; roastedOn: Date; },
        setup: { coffeeWeight: number; coffeeWeightUnit: string; waterTemp: number; waterTempUnit: string; grindSize: number; },
        steps: [[]] | [],
        notes: string[],
    ) {
    }

    totalDuration = () => {
        return 120;
    }

    totalBrewWeight = () => {
        return 500;
    }
}

export default Recipe;



// TEST
const myGrinder = new Grinder(0, 'Bistro', 'Bodum');
const myKettle = new Kettle(0, 'Gooseneck', 'Bonavita');
const myBrewer = new Brewer(0, 'V60', 'Hario');

const testRecipe = new Recipe(
     0,
    {
        myGrinder,
        myKettle,
        myBrewer,
    },
   {
        roasterId: 0,
        roastedOn: new Date(),
    },
 {
        coffeeWeight: 30,
        coffeeWeightUnit: 'grams',
        waterTemp: 99,
        waterTempUnit: 'celcius',
        grindSize: 6,
    },
 [
        {
            label: 'filter rinse',
            atTime: -1,
            duration: 0,
            instruction: 'rinse filter inside V60 with hot water from kettle',
        },
        {
            label: 'prepare grounds for bloom',
            atTime: -1,
            duration: 0,
            instruction:
                'place grounds in wetted v60 + filter. Using finger, make a hole in the bed of grounds for bloom step',
        },
        {
            label: 'bloom',
            stepNumber: 1,
            duration: 45,
            pourWeight: 50,
            instruction:
                'pour ~50g of water, aiming for the hole you made with your finger in the previous step. Shake V60 in circular motion to ensure all grounds are wet.',
        },
        {
            label: 'first pour',
            stepNumber: 2,
            duration: 45,
            pourWeight: 100,
            instruction:
                'pour 100g in ~15s, following traditional spiral pattern. Make sure to break up `crust` formation post-bloom. Wait 30s',
        },
        {
            repeatStepNumber: 2,
            repeatTimes: 3,
            instruction: 'Keep doing 100g pours as described in step 2',
        },
        {
            label: 'final mini-pour',
            stepNumber: 3,
            duration: 30,
            pourWeight: 50,
            instruction:
                'using the last 50g, clean grounds off the side and end up at the target 500g',
        },
        {
            label: 'cleanup / drawdown',
            stepNumber: 4,
            duration: 0,
            pourWeight: 0,
            instruction:
                'gently shake the brewer like you did during the bloom phase to ensure an even bed during final drawdown.',
        },
    ],
['My daily v60 routine!'],
);
