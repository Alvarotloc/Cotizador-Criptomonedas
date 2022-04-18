import styled from "@emotion/styled";
import ImagenCripto from "./img/imagen-criptos.png";
import Formulario from './components/Formulario';
import Resultado from "./components/Resultado";
import { useState, useEffect } from 'react';
import { Moneda } from './types/cotizacionCripto';
import Spinner from './components/Spinner';

const Contenedor = styled.div`
  max-width: 90rem;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Imagen = styled.img`
  max-width: 40rem;
  width: 80%;
  margin: 10rem auto 0 auto;
  display: block;
`;

const Heading = styled.h1`
  font-family: "Lato", sans-serif;
  color: #fff;
  text-align:center;
  font-weight:700;
  margin-top:8rem;
  margin-bottom:5rem;
  font-size:3.4rem;

  &::after{
    content:'';
    width:10rem;
    height:.6rem;
    background-color: #66A2FE;
    display:block;
    margin:1rem auto 0 auto;
  }
`;

interface StateMoneda {
  moneda : string,
  cripto : string
}

const App = (): JSX.Element => {

  const [monedas, setMonedas] = useState<StateMoneda>({moneda : '', cripto : ''});
  const [cotizacion, setCotizacion] = useState<Moneda>();
  const [cargando, setCargando] = useState<boolean>(false);
  // const [visible, setVisible] = useState<boolean>(false)
  useEffect(() => {
    const {moneda,cripto} = monedas;
    if([moneda,cripto].includes('') === false){
      const cotizarCripto = async () => {
        setCargando(true);
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cripto}&tsyms=${moneda}`;
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();

        setCotizacion(resultado.DISPLAY[cripto][moneda]);
        setCargando(false);
      }
      cotizarCripto();
    }
  },[monedas])

  return (
    <Contenedor>
      <Imagen src={ImagenCripto} alt="Imagen de criptomonedas" />
      <div>
        <Heading>Cotiza Criptomonedas Al Instante</Heading>
        <Formulario setMonedas={setMonedas}/>
        {cargando && <Spinner />}
        {cargando === false ? cotizacion?.PRICE && <Resultado cotizacion={cotizacion}/> : null}
      </div>
    </Contenedor>
  );
};

export default App;
