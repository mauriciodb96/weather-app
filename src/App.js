import React, {Fragment, useState, useEffect} from  'react';
import Header from './components/header';
import Fomrulario from './components/formulario';
import Clima from './components/clima';
import Error from './components/error';

const App = () => {

  // state del formilario
  const [search, setSearch] = useState({
    ciudad: '',
    pais: ''
  });

  const [request, setRequest] = useState(false);
  const [searchWeather, setSearchWeather] = useState({});
  const [error, setError] = useState(false);

  const {ciudad, pais} = search;
  useEffect(() => {
    const consultarAPI = async () => {
      if(request) {
        const appId = '1c30104a83fa4a7f9d595e8f129918db';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`
  
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        setSearchWeather(resultado);
        setRequest(false);

        // Valida si hay errores en la consulta 
        if(request.cod === '404') {
          setError(true)
        } else {
          setError(false)
        }
      }
    }
    consultarAPI();
  },[request, ciudad, pais]);

  let component;
  if(error) {
    component = <Error mensaje="Nothing found, try again" />
  } else {
    component = <Clima
                  searchWeather={searchWeather}
                />
  }

  return(
    <Fragment>
      <Header
        titulo="Weather App"
      />

      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Fomrulario 
                search={search}
                setSearch={setSearch}
                setRequest={setRequest}
              />
            </div>
            <div className="col m6 s12">
              {component}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default App;
