import styled from '@emotion/styled';
import { useState } from 'react';
import { Opcion } from '../components/Formulario';

const Label = styled.label`
    color:#FFF;
    display:block;
    font-family:'Lato', sans-serif;
    font-size:2.4rem;
    font-weight:700;
    margin:1.5rem 0;
`
const Select = styled.select`
    width:100%;
    font-size:1.8rem;
    padding:1.4rem;
    border-radius:1rem;
`

const useSelectMonedas = (label:string, opciones:Opcion[]) => {

    const [state, setState] = useState<string>('')

  const SelectMonedas = () => (
      <>
        <Label>{label}</Label>
        <Select value={state} onChange={ e => setState(e.target.value)}>
            <option value="">Seleccione</option>
            {opciones.map(({id,nombre}) =>
                <option key={id} value={id}>{nombre}</option>
                )}
        </Select>
      </>
  )
  return [ state,SelectMonedas ];
}

export default useSelectMonedas