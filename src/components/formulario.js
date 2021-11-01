import React, {useState} from 'react';
import Error from './error';
import PropTypes from 'prop-types';


const Fomrulario = ({search, setSearch, setRequest}) => {

    // state para mandar el error en caso de tenerlo
    const [error, setError] = useState(false);

    // destructuring a search para extraer ciudad y pais
    const {ciudad, pais} = search;

    // coloca los elementos en el state
    const handleChange = e => {
        // actualiza el state
        setSearch({
            ...search,
            [e.target.name] : e.target.value
        })
    }

    // cuando el usuario da submit al form
    const handleSubmit = e => {
        e.preventDefault();

        // validar
        if(ciudad.trim() === '' || pais.trim === '' ) {
            setError(true);
            return;
        }
        setError(false);
        setRequest(true);
    }

    return ( 
        <form
            onSubmit={handleSubmit}
        >   
            {error ? <Error mensaje="Please fill all the fields" /> : null}
            <div className="input-field col s12">
                <input
                    type="text"
                    name="ciudad"
                    id="ciudad"
                    value={ciudad}
                    onChange={handleChange}
                />
                <label htmlFor="ciudad">City:</label>
            </div>

            <div className="input-field col s12">
                <select
                    name="pais"
                    id="pais"
                    value={pais}
                    onChange={handleChange}
                >
                    <option value="pais">-- Select your Country --</option>
                    <option value="US">United States</option>
                    <option value="MX">Mexico</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Peru</option>
                    <option value="CA">Canada</option>
                </select>
                <label htmlFor="pais">Country</label>
            </div>

            <div className="input-field col s12">
                <input 
                    type="submit"
                    value="Get Weather"
                    className="waves-effect waves-light btn-large btn-block yellow accent-4"
                />
            </div>
        </form>
    );
}

Fomrulario.propTypes = {
    search: PropTypes.object.isRequired,
    setSearch: PropTypes.func.isRequired,
    setRequest: PropTypes.func.isRequired
}
export default Fomrulario;