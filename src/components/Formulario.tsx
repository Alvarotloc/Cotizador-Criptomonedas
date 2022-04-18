import styled from '@emotion/styled';
import { FormEvent, useEffect, useState } from 'react';
import { monedas } from '../data/monedas';
import useSelectMonedas from '../hooks/useSelectMonedas';
import {CryptoTypes } from '../types/cryptoTypes';
import Error from './Error';

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

    const [criptos, setCriptos] = useState<Opcion[]>([]);
    const [error, setError] = useState<boolean>(false);
    const [moneda,SelectMonedas] = useSelectMonedas('Elige Tu Moneda', monedas);
    const [cripto,SelectCriptomoneda] = useSelectMonedas('Elige Tu Criptomoneda', criptos);

    useEffect(() => {
        const consultarApi =async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';

            const respuesta = await fetch(url);
            const resultado:CryptoTypes = await respuesta.json();
            const {Data} = resultado;

            const arrayCriptos:Opcion[] = Data.map(({CoinInfo}) => {
                const {Name,FullName} = CoinInfo;

                const objeto:Opcion = {
                    id : Name,
                    nombre : FullName
                }
                return objeto;
            })

            setCriptos(arrayCriptos);
        }
        consultarApi();
    },[])

    const handleSubmit = (e:FormEvent) => {
        e.preventDefault();

        if([moneda,cripto].includes('')){
            return setError(true);
        }
        setError(false);
    }


  return (
      <>
            {error && <Error>Todos los campos son obligatorios</Error>}
    <form onSubmit={handleSubmit}>
        <SelectMonedas />
        <SelectCriptomoneda />
        <InputSubmit type="submit" value="Cotizar" />
    </form>
      </>
  )
}

export default Formulario