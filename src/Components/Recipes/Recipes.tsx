import {
  myBrewer,
  myBrewer2,
  myGrinder,
  myGrinder2,
  myKettle,
  myKettle2,
} from '../Equipment/Equipment';
import { IBrewer, IKettle, IGrinder } from '../Equipment/Equipment';
import { useAuth0, User } from '@auth0/auth0-react';
import { Container, Card, Button, ListGroup } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import pressure from '../../assets/brewmethods/pressure.svg';
import aeropress from '../../assets/brewmethods/aeropress.svg';
import dripper from '../../assets/brewmethods/dripper.svg';

interface IRecipe {
  id: number;
  title: string;
  authorId: string;
  equipment: { grinder: IGrinder; brewer: IBrewer; kettle: IKettle };
  coffee: object;
  setup: object;
  steps: ISteps[];
  notes?: string[];
}

interface ISteps {
  label: string;
  preBrew?: boolean;
  stepNumber: number;
  pourWeight?: number;
  duration: number;
  instruction?: string;
  aside?: string;
}

const imgApply = (type?: string) => {
  if (type === 'pressure') return pressure;
  if (type === 'aeropress') return aeropress;
  if (type === 'dripper') return dripper;
};

const Recipes = () => {
  const { isLoading, user, isAuthenticated } = useAuth0();
  const [recipeHolder, updateRecipeHolder] = useState<IRecipe[]>([]);

  useEffect(() => {
    if (isAuthenticated) {
      // retrieve recipe
      if (recipeHolder.length === 0) {
        try {
          (async (user) => {
            let data;
            if (window.location.pathname.includes('my-')) {
              data = await fetchRecipes(user);
            } else {
              data = await fetchRecipes(undefined);
            }
            updateRecipeHolder(data);
          })(user);
        } catch (e) {
          console.error(e);
        }
      }
    } else {
      try {
        // not logged in, get all recipes.
        (async () => {
          const data = await fetchRecipes(undefined);
          updateRecipeHolder(data);
        })();
      } catch (e) {
        console.error(e);
      }
    }
    // console.log(
    //   `are we authenticated? ${isAuthenticated}, as user ${user?.name}, with recipes ${recipeHolder}`
    // );
  }, [isLoading, recipeHolder, user]);

  return (
    <Container className="d-flex p-2 justify-content-around">
      {recipeHolder.map((recipe, index) => {
        console.log('title', index, Object.keys(recipe));
        return (
          <Card style={{ width: '18rem' }} key={index}>
            <Card.Img
              variant="top"
              src={imgApply(recipe.equipment.brewer.brewerMethod)}
            />
            <Card.Body>
              <Card.Title>{recipe.title}</Card.Title>
              <Card.Subtitle>
                <>by {recipe.authorId}</>
              </Card.Subtitle>
              {recipe.notes ? (
                recipe.notes.map((note, idx) => (
                  <Card.Text key={idx}>{note}</Card.Text>
                ))
              ) : (
                <Card.Text>Check it out below 👇</Card.Text>
              )}
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>
                <>
                  Brewer: {recipe.equipment.brewer.manufacturerId}{' '}
                  {recipe.equipment.brewer.model}
                </>
              </ListGroup.Item>
              <ListGroup.Item>
                <>
                  Grinder: {recipe.equipment.grinder.manufacturerId}{' '}
                  {recipe.equipment.grinder.model}
                </>
              </ListGroup.Item>
              <ListGroup.Item>
                <>
                  Kettle: {recipe.equipment.kettle.manufacturerId}{' '}
                  {recipe.equipment.kettle.model}
                </>
              </ListGroup.Item>
            </ListGroup>
            <Button href={`/all-recipes/${recipe.id}`}>
              Read the Recipe! ☕️
            </Button>
          </Card>
        );
      })}
    </Container>
  );
};

export default Recipes;

const testRecipe: IRecipe = {
  id: 0,
  title: 'My V60 Recipe',
  authorId: 'auth0|62c335d06bc0f6e5a5062272',
  equipment: {
    grinder: myGrinder,
    kettle: myKettle,
    brewer: myBrewer,
  },
  coffee: {
    roasterId: 0,
    roastedOn: new Date(),
  },
  setup: {
    coffeeWeight: 30,
    coffeeWeightUnit: 'grams',
    waterTemp: 99,
    waterTempUnit: 'celcius',
    grindSize: 6,
  },
  steps: [
    {
      label: 'filter rinse',
      stepNumber: 0,
      preBrew: true,
      duration: 0,
      instruction: 'rinse filter inside V60 with hot water from kettle',
    },
    {
      label: 'prepare grounds for bloom',
      stepNumber: 1,
      preBrew: true,
      duration: 0,
      instruction:
        'place grounds in wetted v60 + filter. Using finger, make a hole in the bed of grounds for bloom step',
    },
    {
      label: 'bloom',
      stepNumber: 2,
      duration: 45,
      pourWeight: 50,
      instruction:
        'pour ~50g of water, aiming for the hole you made with your finger in the previous step. Shake V60 in circular motion to ensure all grounds are wet.',
    },
    {
      label: 'first pour',
      stepNumber: 3,
      duration: 45,
      pourWeight: 100,
      instruction:
        'pour 100g in ~15s, following traditional spiral pattern. Make sure to break up `crust` formation post-bloom. Wait 30s',
    },
    {
      label: '2nd - 4th pours',
      stepNumber: 4,
      duration: 135,
      pourWeight: 300,
      instruction: 'repeat step 3 three more times, up to 450g total weight.',
    },
    {
      label: 'final mini-pour',
      stepNumber: 5,
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
  notes: ['Also by Hoffman... or adapted therefrom'],
};
const testRecipe2: IRecipe = {
  id: 1,
  title: "James Hoffman's V60 Recipe",
  authorId: '00000000',
  equipment: {
    grinder: myGrinder2,
    kettle: myKettle2,
    brewer: myBrewer2,
  },
  coffee: {
    roasterId: 1,
    roastedOn: new Date(),
  },
  setup: {
    coffeeWeight: 11,
    coffeeWeightUnit: 'grams',
    waterTemp: 99,
    waterTempUnit: 'celcius',
    grindSize: 3,
  },
  steps: [
    {
      label: 'setup',
      stepNumber: 0,
      preBrew: true,
      duration: 0,
      instruction:
        "Set brewer in standard position on a server. Don't rinse or preheat the brewer (it doesn't make any difference).",
    },
    {
      label: 'Infusion',
      stepNumber: 1,
      duration: 120,
      pourWeight: 200,
      instruction:
        'Start a timer, add 200mL water, aiming to wet all the coffee during pouring.',
    },
    {
      label: 'Note - Infusion',
      stepNumber: 2,
      duration: 0,
      aside:
        'immediately place the plunger on top of the brewer, about 1cm in. This creates a vacuum to stop the coffee from dripping through.',
    },
    {
      label: 'Post - Infusion',
      stepNumber: 3,
      duration: 30,
      pourWeight: 0,
      instruction:
        'Holding the brewer and the plunger, gently swirl the brewer.',
    },
    {
      label: 'Press-down!',
      stepNumber: 4,
      duration: 30,
      pourWeight: 0,
      instruction: 'Press gently all the way, it takes about 30 seconds.',
    },
  ],
  notes: ['test note!'],
};
const allRecipes = [testRecipe, testRecipe2];

const fetchRecipes = async (auth0User: User | undefined) => {
  if (auth0User) {
    const a = allRecipes.filter((recipe, idx) => {
      return auth0User?.sub === allRecipes[idx]?.authorId;
    });
    console.log('filter result', a);
    return a;
  } else {
    return allRecipes;
  }
};
