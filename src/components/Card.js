import React from 'react';
import PropTypes from 'prop-types';


const Card = ({details}) => {

    const ingr = details.ingredients.split(',').map(ing =>
        <li>{ing}</li>)
        const instr = details.instructions.split('\n').map(ing =>
            <li>{ing}</li>)

            const requireImage = chemin =>{

                try {
                    return require(`../img/${chemin}`)
                }
                catch(e){
                    return require(`../img/default.jpeg`)
                }
            
            }
    return (
        <div>
            <div className="card">
                <div className="image">
                    <img  src={requireImage(details.image)} alt={details.nom}/>
                </div>
                <div className="recette">
                    <h2>{details.nom}</h2>
                    <ul className="liste-ingredients">
                        {ingr}
                    </ul>
                    <ol className="listes-instructions">
                        {instr  }
                    </ol>
                </div>
            </div>
        </div>
    );
};


Card.propTypes = {
    
};


export default Card;
