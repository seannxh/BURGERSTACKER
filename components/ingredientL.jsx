import Ingredient from './ingredient';

const IngredientList = ({ availableIngredients, addToBurger }) => {
  return (
    <ul>
      {availableIngredients.map((ingredient, index) => (
        <Ingredient
          key={index}
          ingredient={ingredient}
          handleClick={() => addToBurger(ingredient)}
          buttonLabel="+"
        />
      ))}
    </ul>
  );
};

export default IngredientList;
