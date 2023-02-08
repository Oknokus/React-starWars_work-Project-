import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from "./SpeciesList.module.css";


const SpeciesList = ({ speciesState }) => {
    return (
        <ul className={ styles.list__container }>     
        {speciesState &&      
            (
                speciesState.map(({ name, language, img, id }) => 
                    <li className={ styles.list__item } key={ id }>
                        <Link to="#">
                        <img className={ styles.person__photo } src= { img } alt={ name } />
                        <p>Name: { name }</p>
                        <p>Language: { language }</p>   
                        </Link>                                                 
                    </li>
                )
            ) 
            }
        </ul>
    )
}

SpeciesList.propTypes = {
    speciesState: PropTypes.array
};

export default SpeciesList;