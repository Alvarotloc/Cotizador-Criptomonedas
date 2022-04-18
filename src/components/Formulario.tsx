import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { monedas } from '../data/monedas';
import useSelectMonedas from '../hooks/useSelectMonedas';
import {CryptoTypes } from '../types/cryptoTypes';

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

    const [criptos, setCriptos] = useState<Opcion[]>([])
    const [moneda,SelectMonedas] = useSelectMonedas('Elige Tu Moneda', monedas);

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
  return (
    <form>
        <SelectMonedas />
        <InputSubmit type="submit" value="Cotizar" />
    </form>
  )
}

export default Formulario