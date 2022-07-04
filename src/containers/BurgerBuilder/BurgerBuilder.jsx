import { useState } from 'react';
import Burger from '../../components/Burger/Burger';

const BurgerBuilder = () => {
  const [state, setState] = useState({
    ingredients: {
      Salad: 0,
      Bacon: 0,
      Cheese: 0,
      Meat: 0,
    },
  });

  return (
    <>
      <Burger ingredients={state.ingredients} />
      <div>Build Containers</div>
    </>
  );
};

export default BurgerBuilder;
