import styled from '@emotion/styled';

const Texto = styled.div`
    background-color:#B7322C;
    color: #fff;
    padding:1.5rem;
    font-size:2.2rem;
    text-transform:uppercase;
    text-align:center;
    font-family:'Lato',sans-serif;
    font-weight:700;
`

type Children = {
    children? : string 
}

const Error = ({children}:Children):JSX.Element => {
  return (
    <Texto>
        {children}
    </Texto>
  )
}

export default Error