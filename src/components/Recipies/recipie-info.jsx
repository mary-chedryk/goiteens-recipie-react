// export function Recipie({}) {
//     return( 
//         <li>
//         <h2></h2>
//         <p>Cooking Time:{} min</p>
//         <p>Servings: {}</p>
//         <p>Cal: {}</p>
//         <p>Difficulty: {}</p>
//         <img src= "{}" />
//         </li>
//     )
// }

import React from 'react';
import PropTypes from 'prop-types';


export default function RecipeInfo({ text, Icon }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', margin: '5px 0' }}>
      <Icon style={{ marginRight: '8px', color: '#007bff' }} size={20} />
      <span>{text}</span>
    </div>
  );
}


RecipeInfo.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  Icon: PropTypes.elementType.isRequired,
};