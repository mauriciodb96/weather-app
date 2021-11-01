import React from 'react';
import PropTypes from 'prop-types';

const Clima = ({searchWeather}) => {

    // extraer los valores
    const {name, main} = searchWeather;
    if(!name) return null;

    // Grados Kelvin
    const kelvin = 273.15;
    return ( 
        <div className="card-panel white col s12">
            <div className="black-text">
                <h2>Weather in {name}:</h2>
                <p className="temperatura">
                    { parseFloat(main.temp - kelvin, 10).toFixed(2)} <span> &#x2103;</span>
                </p>

                <p>Max:
                    { parseFloat(main.temp_max - kelvin, 10).toFixed(2)} <span> &#x2103;</span>
                </p>

                <p>Min:
                    { parseFloat(main.temp_min - kelvin, 10).toFixed(2)} <span> &#x2103;</span>
                </p>
            </div>
        </div>
     );
}
 
Clima.propTypes = {
    searchWeather: PropTypes.object.isRequired
}
export default Clima;