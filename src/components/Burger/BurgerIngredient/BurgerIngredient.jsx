import PropTypes from 'prop-types';
import './BurgerIngredient.css';

const BurgerIngredient = (props) => {
  let ingredient = null;

  switch (props.type) {
    case 'BreadBottom':
      ingredient = <div className="BreadBottom"></div>;
      break;
    case 'BreadTop':
      ingredient = (
        <div className="BreadTop">
          <div className="Sedds1"></div>
          <div className="Sedds2"></div>
        </div>
      );
      break;
    case 'Meat':
      ingredient = <div className="Meat"></div>;
      break;
    case 'Cheese':
      ingredient = <div className="Cheese"></div>;
      break;
    case 'Salad':
      ingredient = <div className="Salad"></div>;
      break;
    case 'Bacon':
      ingredient = <div className="Bacon"></div>;
      break;
    default:
      ingredient = null;
  }
  return ingredient;
};

BurgerIngredient.PropTypes = {
  type: PropTypes.string.isRequired,
};

export default BurgerIngredient;
