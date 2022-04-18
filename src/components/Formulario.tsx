import styled from '@emotion/styled';
import { monedas } from '../data/monedas';
import useSelectMonedas from '../hooks/useSelectMonedas';

export interface Opcion {
    id : string,
    nombre : string,
}

const InputSubmit = styled.input`
    background-color:#9497FF;
    border:none;
    width:100%;
    padding:1rem;
    color: #fff;
    font-weight:700;
    text-transform:uppercase;
    font-size:2rem;
    border-radius:.5rem;
    cursor: pointer;
    transition:background-color .3s ease;
    margin-top:2rem;

    &:hover {
        background-color:#7A7DFE;
    }
`


const Formulario = ():JSX.Element => {

    const [moneda,SelectMonedas] = useSelectMonedas('Elige Tu Moneda', monedas);
  return (
    <form>
        <SelectMonedas />
        <InputSubmit type="submit" value="Cotizar" />
    </form>
  )
}

export default Formulario