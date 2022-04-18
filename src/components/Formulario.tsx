import styled from '@emotion/styled';

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

    &:hover {
        background-color:#7A7DFE;
    }
`


const Formulario = ():JSX.Element => {
  return (
    <form>
        <InputSubmit type="submit" value="Cotizar" />
    </form>
  )
}

export default Formulario