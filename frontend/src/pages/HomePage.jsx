import React, {useState, useEffect} from 'react';
import '../Css/homepage.css'
import axios from 'axios';

const HomePages = () => {

  const [platosHome, setPlatosHome] = useState([]);
  
  useEffect(() => {
    (  async () => {
      const response = await axios.get('/api/v1/comidas')
      setPlatosHome(response.data);
      })();
    }, []);

    const platos = platosHome.map(p =>
      <a className="col-6 col-md-4 col-lg-3 px-0 containers" href={`plato/` + p._id}>
      <img className="w-100 PlatosHomeimg" src="https://www.jbgood.com/wp/wp-content/uploads/2015/05/Bacardi-Mojito-350x300.jpg" alt="" />
      <div className="overlay col p-0 text-white text-center">
          <h3 className="mb-0">{ p.title }</h3>
          <p className="mb-0">{p.summary}</p>
          <hr className="bg-white"/>
        <div className="text">
          { p.description }
        </div>
      </div>
      </a>
  )

  return (
    <div className="mw-100">
      <div className="Titulo-Presentacion">
        <div className="col-12 col-md-6 pl-3 pl-md-5 pt-3 pt-md-4 text-white">
          <h1 className="tituloh1"><span className="redcolor">Nuestro</span><br></br>MENU</h1>
          <h2 className="mb-0 text-white">EXCELENTE COMIDA, BEBIDAS & CAFE.</h2>
        </div>
      </div>
      <div className="box-menu row flex-wrap mx-0 mw-100" id="Menu">
        {platos}
      </div>
      <div className="parallaxHOME firstpara row m-0 text-center justify-content-center align-items-center">
        <h3 className="font-parallax">VIVÍ LA EXPERIENCIA, TODO EL DÍA, TODOS LOS DÍAS</h3>
      </div>
      <div className="parallaxHOME secondpara row m-0 justify-content-center align-items-center">
        <h3 className="font-parallax">EXCELENTE MÚSICA</h3>
      </div>
    </div>
  );
}

export default HomePages;