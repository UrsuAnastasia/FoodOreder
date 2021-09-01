import styled from 'styled-components';

const Label = styled.label`
font-size: ${props => props.sizeComponent ? props.sizeComponent : props.theme.Size.normalSize};
color:${props => props.colorComponent ? props.colorComponent : props.theme.Color.DarkBlue};
font-weight: ${props => props.fontWeight ? props.fontWeight : "600"};
`
export default Label;
