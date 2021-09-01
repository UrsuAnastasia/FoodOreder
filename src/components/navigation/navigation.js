//react
import { Link } from 'react-router-dom'

//styled-components
import styled from 'styled-components'
import Label from '../../styled-components/label'


const Navigation = () => {
  return <Header>
    <Label colorComponent={props => props.theme.Color.Black} sizeComponent={props => props.theme.Size.largeSize}>BookShop</Label>
    <NavBar>
      <UlList >
        <List>
          <Link to='/home'>
            <Label colorComponent={props => props.theme.Color.Black} sizeComponent={props => props.theme.Size.normalSize}>Home</Label>
          </Link>
        </List>
        <List>
          <Link to=''>
            <Label colorComponent={props => props.theme.Color.Black} sizeComponent={props => props.theme.Size.normalSize}>Books</Label>
          </Link>
        </List>
        <List>
          <Link to=''>
            <Label colorComponent={props => props.theme.Color.Black} sizeComponent={props => props.theme.Size.normalSize}>AudioBooks</Label>
          </Link>
        </List>
        <List>
          <Link to='/login'>
            <Label colorComponent={props => props.theme.Color.Black} sizeComponent={props => props.theme.Size.normalSize}>Login</Label>
          </Link>
        </List>
      </UlList>
    </NavBar>
  </Header>
}


export default Navigation;


const Header = styled.header`
display:flex;
padding: 0 2 rem;
justify-content:space-between;
align-items:center;
width:100%;
height: 13vh;
padding: 0 5%;
background-image: linear-gradient(315deg, #b8c6db 0%, #f5f7fa 74%);
 box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
`
const NavBar = styled.nav`
display:flex;
`
const UlList = styled.ul`
  list-style: none;
  margin: 0;
  width:100%;
  padding: 0;
  display: flex;
  align-items: space-between;
`


const List = styled.li`
  margin: 0 1rem;
`


