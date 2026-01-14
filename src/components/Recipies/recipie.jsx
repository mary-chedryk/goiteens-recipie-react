// export function Recipies({recipie}) {
//     return (
//         <ul>
//             {recipie.map( => )}
//         </ul>
//     )
// }

import React from 'react';
import PropTypes from 'prop-types';
import RecipeInfo from './recipie-info'; 


import {
  MdAccessTime, 
  MdOutlinePeopleAlt, 
  MdOutlineLocalFireDepartment, 
  MdOutlineInsights, 
} from 'react-icons/md';


export default function Recipe({ recipe }) {
 
  const { name, time, servings, calories, difficulty, image } = recipe;

  
  const getDifficultyText = (level) => {
    switch (level) {
      case 0:
        return 'Легко';
      case 1:
        return 'Середньо';
      case 2:
        return 'Важко';
      default:
        return 'Не визначено';
    }
  };

  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      margin: '20px',
      padding: '15px',
      width: '300px',
      boxShadow: '2px 2px 5px rgba(0,0,0,0.1)'
    }}>
      <img src={image} alt={name} style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '4px' }} />
      <h2 style={{ color: '#333' }}>{name}</h2>
      
      <RecipeInfo text={`${time} хв`} Icon={MdAccessTime} />
      <RecipeInfo text={`${servings} порц.`} Icon={MdOutlinePeopleAlt} />
      <RecipeInfo text={`${calories} ккал`} Icon={MdOutlineLocalFireDepartment} />
      <RecipeInfo text={getDifficultyText(difficulty)} Icon={MdOutlineInsights} />
      
    </div>
  );
}

Recipe.propTypes = {
  recipe: PropTypes.shape({
    name: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    servings: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    difficulty: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};