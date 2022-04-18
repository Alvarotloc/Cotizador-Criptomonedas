import styled from '@emotion/styled';
import { Moneda } from '../types/cotizacionCripto';

interface ParamsResultado {
    cotizacion : Moneda
}

const ResultadoDiv = styled.div`
    color: #fff;
    font-family:'Lato',sans-serif;
    display: flex;
    align-items:center;
    gap:1rem;
    margin-top:3rem;
`
const Texto = styled.p`
font-size:1.8rem;
    span {
        font-weight: 700;
    }
`
const Precio = styled.p`
    font-size:2.4rem;
    span {
        font-weight: 700;
    }
`

const Imagen = styled.img`
    display:block;
    width:12rem;
`

const Resultado = ({cotizacion}:ParamsResultado):JSX.Element => {

    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = cotizacion;
  return (
    <ResultadoDiv>
        <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt="Imagen de la criptomoneda" />
    <div>
    <Precio>El precio es de: <span>{PRICE}</span></Precio>
        <Texto>El precio más alto del día: <span>{HIGHDAY}</span></Texto>
        <Texto>El precio más bajo del día: <span>{LOWDAY}</span></Texto>
        <Texto>Variación últimas 24 horas: <span>{CHANGEPCT24HOUR}</span></Texto>
        <Texto>Última actualización: <span>{LASTUPDATE}</span></Texto>
    </div>
    </ResultadoDiv>
  )
}

export default Resultado