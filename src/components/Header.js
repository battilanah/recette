import React from 'react';
import PropTypes from 'prop-types';


const Header = ({pseudo}) => {

    const formatPseudo = pseudo =>
        

        /[aeiouy]/i.test(pseudo([0])) ?  `d'${pseudo}` : `de ${pseudo}`   
        
    return (
        <header>
            <h1>La boite a recettes {formatPseudo}</h1>
        </header>
    );
};


Header.propTypes = {
    
};


export default Header;
