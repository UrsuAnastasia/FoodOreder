import styled from 'styled-components'

const Input = styled.input`
display: flex;
position: relative;
flex-direction: column;
appearance:none;
border-radius: 5px;
 box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
padding:0.6rem 0.5rem;
outline:none;
border: 0;
font-size:${props => props.theme.Size.normalSize};
background:${props => props.theme.Color.White};
width:${props => props.widthComponent};
height:${props => props.heightComponent};
cursor:pointer;
`

export default Input;
