import './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = (props) => {
  let burgerIngredients = Object.keys(props.ingredients)
    .map((key) => {
      return [...Array(props.ingredients[key])].map((_, i) => {
        return <BurgerIngredient key={key + i} type={key} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  if (burgerIngredients.length === 0) {
    burgerIngredients = <p>Please Start Adding Ingredients!</p>;
  }

  return (
    <div className="Burger">
      <BurgerIngredient type="BreadTop" />
      {burgerIngredients}
      <BurgerIngredient type="BreadBottom" />
    </div>
  );
};

export default Burger;
