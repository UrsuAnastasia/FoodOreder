import styled from 'styled-components'

const Button = styled.button`
display: flex;
justify-content: center;
align-items: center;
width: ${props => props.sizeComponent};
height: ${props => props.heightComponent};
border-radius: 10px;
cursor: pointer;
 box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
font-weight: bold;
font-size: ${props => props.theme.Size.smallSize};
appearance:none;
border:0;
background: ${props => props.buttonColor ? props.buttonColor : props.theme.Color.DodgerBlue};
`
export default Button;
